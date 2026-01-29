/* Copyright Elysia © 2025. All rights reserved */

import { APIGuild, APIGuildMember } from "discord-api-types/v10";
import { net } from "electron";
import { Request, Response, Router } from "express";
import Constants from "src/AppCore/Constants";
import Util from "src/AppUtils/Utils";

const app = Router({ mergeParams: true });

// Convert Guild object to GuildProfile object
// with_counts

// Ref: https://github.com/discord-userdoccers/discord-userdoccers/pull/346

function convertGuildObjectToGuildProfileObject (guild: APIGuild & { code?: number }) {
    if (!guild.id && guild.code) {
        return {
            isError: true,
            data: guild,
        };
    }
    return {
        isError: false,
        data: {
            id: guild.id,
            name: guild.name,
            icon_hash: guild.icon,
            member_count: guild.approximate_member_count,
            online_count: guild.approximate_presence_count,
            description: guild.description,
            banner_hash: guild.banner,
            game_application_ids: [],
            game_activity: {},
            tag: null,
            badge: 0,
            badge_color_primary: "#ff0000", // ?
            badge_color_secondary: "#800000", // ?
            badge_hash: null,
            traits: [],
            features: guild.features,
            visibility: 2,
            custom_banner_hash: null,
            premium_subscription_count: guild.premium_subscription_count,
            premium_tier: guild.premium_tier,
        },
    };
}

app.get(
    "/",
    async (
        req: Request<{
            id: string;
        }>,
        res,
    ) => {
        net.fetch(`https://canary.discord.com/api/v9/guilds/${req.params.id}?with_counts=true`, {
            method: "GET",
            headers: req.headers as Record<string, string>,
        })
            .then(r => r.json() as Promise<APIGuild & { code?: number }>)
            .then(guild => {
                const data = convertGuildObjectToGuildProfileObject(guild);
                return res.status(data.isError ? 403 : 200).send(data.data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Internal Server Error (/guilds/:id/profile)",
                    code: 500,
                    error: err.message,
                    stack: err.stack,
                });
            });
    },
);

const callback = (
    reqCallback: Request<
        {
            id: string;
        },
        unknown,
        {
            nick?: string;
            avatar?: string;
            banner?: string;
            bio?: string;
        }
    >,
    resCallback: Response,
) => {
    const guildId = reqCallback.params.id;
    const body: Record<string, string> = {};
    if (reqCallback.body.nick) body.nick = reqCallback.body.nick;
    if (reqCallback.body.avatar) body.avatar = reqCallback.body.avatar;
    if (reqCallback.body.banner) body.banner = reqCallback.body.banner;
    if (reqCallback.body.bio) body.bio = reqCallback.body.bio;
    net.fetch(`https://canary.discord.com/api/v10/guilds/${guildId}/members/@me`, {
        headers: {
            authorization: reqCallback.headers.authorization,
            "user-agent": Constants.UserAgentDiscordBot,
            "Content-Type": "application/json",
        } as Record<string, string>,
        method: "PATCH",
        body: JSON.stringify(body),
    })
        .then(r => r.json() as Promise<APIGuildMember>)
        .then(d =>
            resCallback.send({
                guild_id: guildId,
                pronouns: "",
                bio: body.bio || "",
                banner: d.banner,
                accent_color: null,
                theme_colors: null,
                popout_animation_particle_type: null,
                emoji: null,
                profile_effect: null,
            }),
        );
};

app.patch("/@me", async (req, res) => {
    return Util.getDataFromRequest(req, res, callback);
});

// ??? WTF discord ???
app.patch("/%40me", async (req, res) => {
    return Util.getDataFromRequest(req, res, callback);
});

export default app;
