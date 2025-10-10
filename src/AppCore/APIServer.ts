/* Copyright Elysia © 2025. All rights reserved */

import { scope } from "electron-log";
import express from "express";
import { readFileSync } from "fs";
import httpProxy from "http-proxy";
import https from "https";
import { Server } from "lambert-server";
import morgan from "morgan";
import { AddressInfo, Socket } from "net";
import path from "path";

import Constants from "./Constants";

const logger = scope("APIServer");

const app = express();

app.use(
    morgan("dev", {
        stream: {
            write: msg => logger.info(msg.replace(/\n/g, "")),
        },
    }),
);

const server = https.createServer(Constants.HttpsOptions, app);

const route = express.Router({ mergeParams: true });

const lambertServer = new Server({
    // @ts-expect-error I know what I'm doing
    app: route,
    server,
    production: true,
    errorHandler: (err, req, res, next) => {
        next();
    },
    jsonBody: false,
});

const proxy = httpProxy.createProxyServer<express.Request, express.Response>({
    target: "https://discord.com",
    secure: false,
    changeOrigin: true,
});

// Make proxy globally accessible
globalThis.proxy = proxy;

proxy.on("error", (err, req, res) => {
    logger.error("Proxy error:", err, req, res);
    if (res instanceof Socket) {
        logger.error("Response is a socket, cannot send error response");
        return;
    }
    res.status(500).send({
        message: "Internal Server Error (proxy)",
        code: 500,
        error: err.message,
        stack: err.stack,
    });
});

// Routes
lambertServer.registerRoutes(path.resolve(__dirname, "routes") + path.sep);

lambertServer.app = app;

const ignoreHeaders = ["cookie", "x-", "sec-", "referer", "origin", "authorization", "user-agent", "host"];

// Handle headers
app.all("*", function (req, res, next) {
    req.originalHeaders = req.headers;
    const headers: typeof req.headers = {};
    if (req.headers.authorization) {
        if (!req.headers.authorization.toLowerCase().startsWith("bot ")) {
            headers.authorization = `Bot ${req.headers.authorization.trim()}`;
        } else {
            headers.authorization = req.headers.authorization.trim();
        }
        headers["user-agent"] = Constants.UserAgentDiscordBot;
    }
    Object.keys(req.headers).forEach(key => {
        if (!ignoreHeaders.some(prefix => key.toLowerCase().startsWith(prefix))) {
            headers[key] = req.headers[key];
        }
    });
    req.headers = headers;
    next();
});
// Routes: v10, v9, default
app.use("/api/v10", route);
app.use("/api/v9", route);
app.use("/api", route);
app.use(route);
app.all("/developers/*", (req, res) => {
    return res.redirect("/app");
});

// Other
app.use((req, res, next) => {
    if (req.originalUrl.endsWith(".map")) return res.status(404).send();
    if (Constants.BlacklistRoutes.some(_ => req.originalUrl.includes(_))) {
        return res.status(403).send({
            message: "APIServer: Bots cannot use this endpoint",
            code: 20001,
        });
    }
    // API routes
    if (req.originalUrl.includes("/api/")) return proxy.web(req, res);
    // Main page
    if (["/", "/app", "/login"].includes(req.path) || ["/channels/"].some(s => req.path.startsWith(s))) {
        logger.log("Serving Discord HTML for route:", req.path);
        return res.send(readFileSync(Constants.DiscordHTMLPath, "utf8"));
    }
    // Other routes
    req.headers = req.originalHeaders;
    return proxy.web(req, res);
});

export default async function start(): Promise<number> {
    return new Promise((resolve, reject) => {
        const callback = () => {
            const address = server.address() as AddressInfo;
            resolve(address.port);
            logger.log(`API Server listening on https://localhost:${address.port}`);
        };
        server.listen(0).once("listening", callback);
    });
}
