/* Copyright Elysia © 2025. All rights reserved */

import { Router } from "express";
import { fetch } from "undici";

const app = Router({ mergeParams: true });

app.get("/*", (req, res) => {
    fetch("https://discord.com/popout").then(r => r.text()).then(t => res.send(t));
});

export default app;
