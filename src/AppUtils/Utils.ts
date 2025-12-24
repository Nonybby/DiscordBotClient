/* Copyright Elysia © 2025. All rights reserved */

import { APIGuildMember, APIUser } from "discord-api-types/v10";
import { Request, Response } from "express";
import multer from "multer";
import GlobalConfig from "src/AppCore/Config";
import Constants from "src/AppCore/Constants";
import { fetch } from "undici";

import { UserFlagsBitField } from "./DiscordBitField";
import { BadgesBasedUserDataAndExtends as UserBadges } from "./UserBadges";

interface DNSJSON {
    Question: Question[];
    Answer: Answer[];
}

interface Question {
    name: string;
    type: number;
}

interface Answer {
    name: string;
    type: number;
    data: string;
    TTL: number;
}

interface DnsCacheEntry {
    ip: string;
    expiresAt: number;
}

const dnsCache: Map<string, DnsCacheEntry> = new Map();

const DNS_TTL = 60 * 60 * 1000;

export default class Util {
    static ProfilePatch(
        userData: APIUser,
        guildMember: APIGuildMember | null = null,
        guildId: string | null = null,
        bio: string | null = null,
    ) {
        const flags = new UserFlagsBitField(userData.flags);
        const badges: object[] = [];
        flags.toArray().map(element => {
            // @ts-expect-error TS7053
            if (UserBadges[element]) {
                // @ts-expect-error TS7053
                badges.push(UserBadges[element]);
            }
        });
        if (userData.id !== Constants.UserIdDefault && GlobalConfig.config.generate_fake_profile) {
            if (userData.bot) {
                badges.push(
                    UserBadges.BotCommands,
                    UserBadges.ApplicationAutomod,
                    UserBadges.ApplicationGuildSubscription,
                );
            } else {
                badges.push(
                    UserBadges.PremiumDefault,
                    UserBadges.GuildBooster(9),
                    UserBadges.PremiumTenureV2(60),
                    UserBadges.LegacyUsername,
                    UserBadges.QuestCompleted,
                );
            }
        }
        /*
		// https://github.com/discord/discord-api-docs/issues/6623
		if (userData.premium_type > 0) {
			badges.push(UserBadges.PREMIUM_DEFAULT);
			if (userData.premium_type == 2) {
				badges.push(UserBadges.GUILD_BOOSTER_LEVEL(9));
			}
			// Ruby
			badges.push(UserBadges.PREMIUM_TENURE(60));
		}
		*/
        if (!bio && GlobalConfig.config.generate_fake_profile) {
            bio = "<a:shiggy:1162436090775470160> Based on the cutest Discord client mod :3";
        }
        return {
            application_role_connections: [],
            badges,
            connected_accounts: [],
            guild_badges: [],
            guild_member: guildMember,
            guild_member_profile: guildMember && {
                guild_id: guildId,
                pronouns: "",
                bio: "",
                banner: guildMember.banner,
                accent_color: null,
                theme_colors: null,
                popout_animation_particle_type: null,
                emoji: null,
                profile_effect: null,
            },
            legacy_username: null,
            mutual_friends: [],
            mutual_friends_count: 0,
            mutual_guilds: [],
            premium_since: GlobalConfig.config.generate_fake_profile ? "2016-12-22T00:00:00.000000+00:00" : null,
            premium_guild_since: GlobalConfig.config.generate_fake_profile ? "2016-12-22T00:00:00.000000+00:00" : null,
            // Force enable Nitro features (Bot)
            premium_type: userData.bot ? 2 : userData.premium_type,
            profile_themes_experiment_bucket: 4,
            user: userData,
            user_profile: {
                accent_color: userData.accent_color,
                banner: userData.banner,
                bio,
                emoji: null,
                popout_animation_particle_type: null,
                profile_effect: null,
                pronouns: null,
                theme_colors: null,
            },
        };
    }
    static getIDFromToken(token = "") {
        if (!token) return null;
        token = token.replace(/^(Bot|Bearer)\s*/i, "");
        return Buffer.from(token.split(".")[0], "base64").toString();
    }

    static getDataFromRequest(
        req: Request,
        res: Response,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: (rq: Request<any, any, any, any>, rs: Response) => unknown,
    ) {
        let data = "";
        // check content-type
        if (req.headers["content-type"] !== "application/json") {
            return multer().any()(req, res, function (err) {
                if (err) {
                    console.error("Multer Error:", err);
                }
                callback(req, res);
            });
        }
        req.on("data", function (chunk) {
            data += chunk;
        });
        req.on("end", function () {
            req.rawBody = data;
            if (data) {
                try {
                    req.body = JSON.parse(data);
                } catch (e) {
                    req.body = undefined;
                    console.error("JSON Parse Error:", e);
                }
                callback(req, res);
            }
        });
    }
    /**
     * Create a ISO Date string
     * Ex: 2024-12-25T14:14:53.033000+00:00
     * @param {number} addYear
     * @returns
     */
    static makeISODate(addYear = 0) {
        const date = new Date();
        date.setFullYear(date.getFullYear() + addYear);
        return date.toISOString().replace("Z", "000+00:00");
    }
    /**
     * Create a ISO Date string without milliseconds
     * Ex: 2024-12-25T14:18:15+00:00
     * @param {number} addYear
     * @returns
     */
    static makeISODateWithoutMilliseconds(addYear = 0) {
        const date = new Date();
        date.setFullYear(date.getFullYear() + addYear);
        return date.toISOString().replace(/\.\d+Z/, "+00:00");
    }
    /**
     * Compares two version strings and determines if `versionB` is newer than `versionA`.
     * Supports version strings in the format `major.minor.patch` with an optional prefix 'v'.
     *
     * @param versionA - The current version (e.g., "v1.2.3" or "1.2.3").
     * @param versionB - The new version to check (e.g., "v1.3.0" or "1.3.0").
     * @returns `true` if `versionB` is newer than `versionA`, otherwise `false`.
     */
    static isNewerVersion(versionA: string, versionB: string) {
        const normalizeVersion = (version: string) => version.replace(/^v/, "");

        const parseVersion = (version: string) => {
            const parts = version.split(".").map(Number);
            if (parts.length !== 3 || parts.some(isNaN)) {
                throw new Error(`Invalid version format: ${version}`);
            }
            return parts;
        };

        const [vA, vB] = [normalizeVersion(versionA), normalizeVersion(versionB)].map(parseVersion);

        for (let i = 0; i < 3; i++) {
            if (vB[i] > vA[i]) return true;
            if (vB[i] < vA[i]) return false;
        }

        return false;
    }
    static async getIpFromDoH(domain: string): Promise<string> {
        const now = Date.now();

        if (dnsCache.has(domain)) {
            const entry = dnsCache.get(domain)!;

            if (entry.expiresAt > now) {
                // console.log(`[DNS Cache] Hit: ${domain} -> ${entry.ip}`);
                return entry.ip;
            } else {
                dnsCache.delete(domain);
            }
        }

        const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
            headers: { Accept: "application/dns-json" },
        });

        if (!response.ok) {
            throw new Error(`DoH fetch failed: ${response.statusText}`);
        }

        const data = (await response.json()) as DNSJSON;

        if (data.Answer && data.Answer.length > 0) {
            const ip = data.Answer[0].data;

            dnsCache.set(domain, {
                ip: ip,
                expiresAt: now + DNS_TTL,
            });

            // console.log(`[DNS Cache] Miss (Fetched): ${domain} -> ${ip}`);
            return ip;
        } else {
            throw new Error("No DNS answer found");
        }
    }
    static clearDnsCache() {
        dnsCache.clear();
    }
}
