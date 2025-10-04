/* Copyright Elysia © 2025. All rights reserved */

import { Request, Router } from "express";
import NitroData from "src/AppUtils/NitroData";

const app = Router({ mergeParams: true });

app.get(
    "/",
    (
        req: Request<{
            id: string;
        }>,
        res,
    ) => {
        res.send(NitroData[req.params.id]);
    },
);

export default app;
