/* Copyright Elysia © 2025. All rights reserved */

import { net } from "electron";
import { Router } from "express";

const app = Router({ mergeParams: true });

app.get("/*", (req, res) => {
    net.fetch("https://canary.discord.com/popout").then(r => r.text()).then(t => res.send(t));
});

export default app;
