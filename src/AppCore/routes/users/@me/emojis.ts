/* Copyright Elysia © 2025. All rights reserved */

// Custom API, Discord doesn't have this endpoint

import { APIApplicationEmoji } from "discord-api-types/v10";
import { net } from "electron";
import { Router } from "express";
import Constants from "src/AppCore/Constants";
import Util from "src/AppUtils/Utils";

const app = Router({ mergeParams: true });

const cacheMap = new Map();
/**
 * @key {string} DiscordUID
 * @value {Object}
 * @param {number} timeout
 * @param {Array} data
 */

app.get("/", (req, res) => {
    const id = Util.getIDFromToken(req.headers.authorization);
    const data = cacheMap.get(id);
    if (data && data.timeout > Date.now()) {
        return res.send(data.data);
    }
    net.fetch(`https://canary.discord.com/api/v9/applications/${id}/emojis`, {
        headers: {
            authorization: req.headers.authorization,
            "user-agent": Constants.UserAgentDiscordBot,
        } as Record<string, string>,
    })
        .then(r => r.json() as Promise<{ items: APIApplicationEmoji[] }>)
        .then(r => {
            // Emoji
            r.items.map((emoji, i) => {
                return {
                    roles: [],
                    require_colons: emoji.require_colons,
                    name: emoji.name,
                    managed: false,
                    id: emoji.id,
                    available: true,
                    animated: emoji.animated,
                    allNamesString: `:${emoji.name}:`,
                    guildId: "0",
                    type: 1,
                };
            });
            cacheMap.set(id, {
                timeout: Date.now() + 5 * 60 * 1000, // 5 minutes
                data: r.items,
            });
            res.send(r.items);
        })
        .catch(() => {
            res.send([]);
        });
});

export default app;
