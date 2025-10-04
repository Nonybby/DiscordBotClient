/* Copyright Elysia © 2025. All rights reserved */

import { APIApplication, APIGuildMember, APIUser } from "discord-api-types/v10";
import { Request, Router } from "express";
import Constants from "src/AppCore/Constants";
import Util from "src/AppUtils/Utils";
import { fetch } from "undici";

const app = Router({ mergeParams: true });

app.get("/", async (req: Request<{ id: string }>, res) => {
    const { guild_id } = req.query;
    let guild_member: APIGuildMember | null = null;
    if (guild_id) {
        guild_member = await fetch(
            "https://discord.com/api/v9/guilds/" +
				guild_id +
				"/members/" +
				req.params.id,
            {
                headers: {
                    authorization: req.headers.authorization,
                    "user-agent": Constants.UserAgentDiscordBot,
                },
            },
        )
            .then(r => r.json() as Promise<APIGuildMember>)
            .catch(() => null);
    }
    let bio = null;
    if (req.params.id === Util.getIDFromToken(req.headers.authorization)) {
        // Using bio from applications/@me
        const applicationData = await fetch(
            "https://discord.com/api/v9/applications/@me",
            {
                headers: {
                    Authorization: req.headers.authorization,
                    "User-Agent": Constants.UserAgentDiscordBot,
                },
            },
        ).then(resF => {
            return resF.json() as Promise<APIApplication>;
        });
        bio = applicationData.description;
    }
    fetch("https://discord.com/api/v9/users/" + req.params.id, {
        headers: {
            authorization: req.headers.authorization,
            "user-agent": Constants.UserAgentDiscordBot,
        },
    })
        .then(r => r.json() as Promise<APIUser>)
        .then(d =>
            res.send(Util.ProfilePatch(d, guild_member, guild_id as string, bio)),
        );
});

app.patch("/", (req, res) => {
    req.url = "/api/v9/users/@me";
    return globalThis.proxy.web(req, res);
});

export default app;
