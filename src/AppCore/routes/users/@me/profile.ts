/* Copyright Elysia © 2025. All rights reserved */

import { APIApplication, APIGuildMember, APIUser } from "discord-api-types/v10";
import { Request, Router } from "express";
import Constants from "src/AppCore/Constants";
import Util from "src/AppUtils/Utils";
import { fetch } from "undici";

const app = Router({ mergeParams: true });

app.get(
    "/",
    async (
        req: Request<
            unknown,
            unknown,
            unknown,
            {
                guild_id?: string;
            }
        >,
        res,
    ) => {
        const id = Util.getIDFromToken(req.headers.authorization);
        const { guild_id } = req.query;
        let guild_member = null;
        if (guild_id) {
            guild_member = await fetch("https://discord.com/api/v9/guilds/" + guild_id + "/members/" + id, {
                headers: {
                    authorization: req.headers.authorization,
                    "user-agent": Constants.UserAgentDiscordBot,
                },
            })
                .then(r => r.json() as Promise<APIGuildMember>)
                .catch(() => null);
        }
        // Using bio from applications/@me
        // Note:
        // There was a strange behavior that occurred:
        // The Bot’s *Description* field supports up to 400 characters and **does not handle emojis automatically**,
        // whereas the *About Me* tab in the app supports up to 190 characters and **does handle emojis automatically**.
        // As a result, in some specific cases, clicking on the *About Me* tab can trigger an error and cause it to get stuck on the popup:
        // **"Careful - you have unsaved changes!"**
        // > **Emoji handling note**: When the server has an emoji that the bot does not have access to, or if the emoji has been deleted,
        // Discord will automatically remove the emoji's ID.
        const applicationData = await fetch("https://discord.com/api/v9/applications/@me", {
            headers: {
                Authorization: req.headers.authorization,
                "User-Agent": Constants.UserAgentDiscordBot,
            },
        }).then(resFetch => {
            return resFetch.json() as Promise<APIApplication>;
        });
        fetch("https://discord.com/api/v9/users/@me", {
            headers: {
                authorization: req.headers.authorization,
                "user-agent": Constants.UserAgentDiscordBot,
            },
        })
            .then(r => r.json() as Promise<APIUser>)
            .then(d => res.send(Util.ProfilePatch(d, guild_member, guild_id, applicationData.description)));
    },
);

export default app;
