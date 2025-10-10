/* Copyright Elysia © 2025. All rights reserved */

import { Express, Router } from "express";
import fg from "fast-glob";
import fs from "fs";
import { resolve } from "path";

export interface TraverseDirectoryOptions {
    dirname: string;
    filter?: RegExp;
    excludeDirs?: RegExp;
    recursive?: boolean;
}

const DEFAULT_EXCLUDE_DIR = /^\./;
const DEFAULT_FILTER = /^([^.].*)(?<!\.d)\.(ts|js)$/;

export function traverseDirectorySync<T>(options: TraverseDirectoryOptions, action: (path: string) => T): T[] {
    if (!options.filter) options.filter = DEFAULT_FILTER;
    if (!options.excludeDirs) options.excludeDirs = DEFAULT_EXCLUDE_DIR;

    const routes = fs.readdirSync(options.dirname);
    const result: T[] = [];

    for (const file of routes.sort((a, b) => (a.startsWith("#") ? 1 : -1))) {
        const path = options.dirname + file;
        const stat = fs.lstatSync(path);
        if (path.match(options.excludeDirs)) continue;

        if (path.match(options.filter) && stat.isFile()) {
            result.push(action(path));
        } else if (options.recursive && stat.isDirectory()) {
            result.push(...traverseDirectorySync({ ...options, dirname: path + "/" }, action));
        }
    }

    return result;
}

export function registerRoutesSync(app: Express, path: string, autoPrefix: string[] = []) {
    const route = Router({ mergeParams: true });
    const files = fg.sync(["**/*.js"], { cwd: path });
    console.log(`[Server] Found ${files.length} route files in ${path}`);
    const result = [];

    for (const file of files) {
        const absolutePath = resolve(path, file);
        // eslint-disable-next-line
        const module = require(absolutePath);
        const res = registerRouteSync(route, file, module);
        if (res) result.push(res);
    }

    for (const prefix of autoPrefix) {
        app.use(prefix, route);
    }

    app.use(route);

    return result;
}

export function registerRouteSync(
    route: Router,
    path: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router: any,
): Router | undefined {
    path = path.split(".").slice(0, -1).join(".");
    path = path.replaceAll("#", ":").replaceAll("!", "?").replaceAll("\\", "/");
    if (path.endsWith("/index")) path = path.slice(0, -6);
    if (!path.length) path = "/";

    try {
        if (router.router) router = router.router;
        if (router.default) router = router.default;
        if (!router || router?.prototype?.constructor?.name !== "router") {
            throw "File doesn't export any default router";
        }
        if (!path.startsWith("/")) path = "/" + path;
        route.use(path, <Router>router);
        return router;
    } catch (error) {
        console.error(new Error(`[Server] Failed to register route ${path}: ${error}`));
    }
}
