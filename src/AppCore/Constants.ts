/* Copyright Elysia © 2025. All rights reserved */

import { app, nativeImage } from "electron";
import { readFileSync } from "fs";
import path from "path";
import UserPatch from "src/AppUtils/UserPatch";

const GithubUserName = "aiko-chan-ai";
const GithubRepoName = "DiscordBotClient";

export default class Constants extends null {
    static BlacklistRoutes = [
        "outbound-promotions/codes",
        "science",
        "applications/public",
        "notes",
        "roles/member-counts",
        "member-ids",
        "connections/",
        "users/@me/disable",
        "users/@me/delete",
        "users/@me/mfa",
        "users/@me/phone",
        "interaction-data",
        "member-verification",
        "cdn-cgi/challenge-platform",
        "explicit-media",
        "premium/subscriptions",
        "/ack",
        "/stripe",
        "/paypal",
        "/validate-billing-address",
        "/custom-call-sounds",
        "auth/conditional/start", // Disable WebAuthn
    ];
    static LatestStorageUpdate = 1735000000000;
    static AppName = "Nekocord";
    static AppID = "DiscordBotClient";
    static iconPath = path.join(app.getAppPath(), "assets", "icon.png");
    static icon16 = nativeImage.createFromPath(Constants.iconPath).resize({ width: 16 });
    static icon128 = nativeImage.createFromPath(Constants.iconPath).resize({ width: 128 });
    static DiscordBackgroundColor = "#36393f";
    static GithubRepo = `${GithubUserName}/${GithubRepoName}`;
    static UserAgentDiscordBot = `DiscordBot (https://github.com/${GithubUserName}/${GithubRepoName}, v${app.getVersion()})`;
    static VencordExtensionPath = path.join(app.getAppPath(), "VencordExtension");
    static DiscordHTMLPath = path.join(app.getAppPath(), "assets", "snapshot", "index.html");
    static ConfigHTMLPath = path.join(app.getAppPath(), "assets", "editor", "index.html");
    static DiscordGuildExperimentsPath = path.join(app.getAppPath(), "assets", "snapshot", "guild_experiments.json");
    static DiscordUserExperimentsPath = path.join(app.getAppPath(), "assets", "snapshot", "user_experiments.json");
    static HttpsOptions = {
        key: readFileSync(path.resolve(app.getAppPath(), "assets", "cert", "server.key")).toString("utf-8"),
        cert: readFileSync(path.resolve(app.getAppPath(), "assets", "cert", "server.cert")).toString("utf-8"),
    };
    static UserDefaultPatch = UserPatch["1056491867375673424"];
    static ChannelIdDefault = "1000000000000000000";
    static UserIdDefault = "1056491867375673424";
    static CustomDiscordDomain = "discord.com";
    // Database
    static DirectMessages = {
        name: "DMsData",
        path: "DirectMessages",
    };
    static PreloadedUserSettings = {
        name: "UserSettingsProto1",
        path: "PreloadedUserSettings",
    };
    static FrecencyUserSettings = {
        name: "UserSettingsProto2",
        path: "FrecencyUserSettings",
    };
    // Chromium Features
    static enableFeatures = [];
    static disableFeatures = [
        "CalculateNativeWinOcclusion",
        "OutOfBlinkCors",
        "WinRetrieveSuggestionsOnlyOnDemand",
        "HardwareMediaKeyHandling",
        "MediaSessionService",
    ];
}
