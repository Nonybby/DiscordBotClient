/* Copyright Elysia © 2025. All rights reserved */

import { lookup } from "dns";
import { scope } from "electron-log";
import express from "express";
import { readFileSync } from "fs";
import httpProxy from "http-proxy";
import https from "https";
import morgan from "morgan";
import { AddressInfo, isIP, Socket } from "net";
import path from "path";
import { registerRoutesSync } from "src/AppUtils/RegisterRoutes";
import Util from "src/AppUtils/Utils";

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

const proxy = httpProxy.createProxyServer<express.Request, express.Response>({
    target: "https://discord.com",
    secure: false,
    changeOrigin: true,
    agent: new https.Agent({
        lookup: (hostname, options, callback) => {
            if (hostname === "discord.com") {
                Util.getIpFromDoH("discord.com")
                    .then(ip => {
                        logger.log(`Resolved discord.com to ${ip} via DoH`);
                        callback(null, [
                            {
                                address: ip,
                                family: isIP(ip),
                            },
                        ]);
                    })
                    .catch(() => {
                        lookup(hostname, options, callback);
                    });
            } else {
                lookup(hostname, options, callback);
            }
        },
    }),
});

// Make proxy globally accessible
globalThis.proxy = proxy;

proxy.on("error", (err, req, res) => {
    logger.error("Proxy error:", err);
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

const ignoreHeaders = ["cookie", "sec-", "referer", "origin", "authorization", "host"];

// Handle headers
app.all("*", function (req, res, next) {
    req.originalHeaders = req.headers;
    const headers: typeof req.headers = {};
    Object.keys(req.headers).forEach(key => {
        if (!ignoreHeaders.some(prefix => key.toLowerCase().startsWith(prefix))) {
            headers[key] = req.headers[key];
        }
    });
    if (req.headers.authorization) {
        if (!req.headers.authorization.toLowerCase().startsWith("bot ")) {
            headers.authorization = `Bot ${req.headers.authorization.trim()}`;
        } else {
            headers.authorization = req.headers.authorization.trim();
        }
        headers["user-agent"] = Constants.UserAgentDiscordBot;
    }
    req.headers = headers;
    next();
});

registerRoutesSync(app, path.resolve(__dirname, "routes"), ["/api/v10", "/api/v9", "/api"]);

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

export default async function start (): Promise<number> {
    return new Promise((resolve, reject) => {
        const callback = () => {
            const address = server.address() as AddressInfo;
            resolve(address.port);
            logger.log(`API Server listening on https://localhost:${address.port}`);
        };
        server.listen(0).once("listening", callback);
    });
}
