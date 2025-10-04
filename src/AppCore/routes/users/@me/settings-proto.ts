/* Copyright Elysia © 2025. All rights reserved */

import { FrecencyUserSettings, PreloadedUserSettings } from "discord-protos";
import { IpcMainEvent } from "electron";
import { Request, Response, Router } from "express";
import { IPCEvent } from "src/AppCore/IPCEvents";
import Util from "src/AppUtils/Utils";

const app = Router({ mergeParams: true });

// eslint-disable-next-line
function waitForEvent<T extends any[]>(emitter: NodeJS.EventEmitter, eventName: string, timeoutMs = 15000): Promise<T> {
    return new Promise((resolve, reject) => {
        const onEvent = (...args: T) => {
            clearTimeout(timer);
            emitter.removeListener("error", onError);
            resolve(args);
        };

        const onError = (err: Error) => {
            clearTimeout(timer);
            emitter.removeListener(eventName, onEvent);
            reject(err);
        };

        const timer = setTimeout(() => {
            emitter.removeListener(eventName, onEvent);
            emitter.removeListener("error", onError);
            reject(new Error(`Timeout waiting for "${eventName}" after ${timeoutMs}ms`));
        }, timeoutMs);

        emitter.once(eventName, onEvent);
        emitter.once("error", onError);
    });
}

const TOTAL_BITS = 624;
const TOTAL_BYTES = Math.ceil(TOTAL_BITS / 8);

export function createDismissArray(): Uint8Array {
    return new Uint8Array(TOTAL_BYTES);
}

export function setDismissible(arr: Uint8Array, id: number, value: boolean) {
    const byteIndex = id >> 3;
    const bitIndex = id & 7;
    if (value) arr[byteIndex] |= 1 << bitIndex;
    else arr[byteIndex] &= ~(1 << bitIndex);
}

export function getDismissible(arr: Uint8Array, id: number): boolean {
    const byteIndex = id >> 3;
    const bitIndex = id & 7;
    return (arr[byteIndex] & (1 << bitIndex)) !== 0;
}

export function fillDissmissArray(arr: Uint8Array) {
    for (let i = 0; i < TOTAL_BITS; i++) {
        setDismissible(arr, i, true);
    }
}

app.all("/1", async (req, res) => {
    const uid = Util.getIDFromToken(req.headers.authorization);
    if (!uid) {
        return res.send({
            settings: "",
        });
    }
    const promise = waitForEvent<[IpcMainEvent, string, string]>(
        globalThis.botClient.ipcMain,
        IPCEvent.GetPreloadedUserSettingsResponse,
    );
    // Request user settings from database
    globalThis.botClient.win.webContents.send(IPCEvent.GetPreloadedUserSettings, uid);
    // [event, botId, settings]
    const userSettingEvent = await promise;
    const userSettings = await PreloadedUserSettings.fromBase64(userSettingEvent[2]);
    if (req.method.toUpperCase() === "GET") {
        return res.send({
            settings: userSettingEvent[2],
        });
    }
    const callback = async (
        reqC: Request<
            unknown,
            unknown,
            {
                required_data_version: number;
                settings: string;
            }
        >,
        resC: Response,
    ) => {
        /**
         * @type {PreloadedUserSettings}
         */
        const decoded = PreloadedUserSettings.fromBase64(reqC.body?.settings || "");
        for (const key in decoded) {
            // eslint-disable-next-line
            (userSettings as any)[key] = (decoded as any)[key];
        }
        const base64 = PreloadedUserSettings.toBase64(userSettings);
        await globalThis.botClient.win.webContents.send(IPCEvent.SetPreloadedUserSettings, uid, base64);
        return resC.send({
            settings: base64,
        });
    };
    return Util.getDataFromRequest(req, res, callback);
});

app.all("/2", async (req, res) => {
    const uid = Util.getIDFromToken(req.headers.authorization);
    if (!uid) {
        return res.send({
            settings: "",
        });
    }
    const promise = waitForEvent<[IpcMainEvent, string, string]>(
        globalThis.botClient.ipcMain,
        IPCEvent.GetFrecencyUserSettingsResponse,
    );
    // Request user settings from database
    globalThis.botClient.win.webContents.send(IPCEvent.GetFrecencyUserSettings, uid);
    // [event, botId, settings]
    const userSettingEvent = await promise;
    const userSettings = await FrecencyUserSettings.fromBase64(userSettingEvent[2]);
    if (req.method.toUpperCase() === "GET") {
        return res.send({
            settings: userSettingEvent[2],
        });
    }
    const callback = async (
        reqC: Request<
            unknown,
            unknown,
            {
                settings: string;
            }
        >,
        resC: Response,
    ) => {
        /**
         * @type {FrecencyUserSettings}
         */
        const decoded = FrecencyUserSettings.fromBase64(reqC.body?.settings || "");
        for (const key in decoded) {
            // eslint-disable-next-line
            (userSettings as any)[key] = (decoded as any)[key];
        }
        const base64 = FrecencyUserSettings.toBase64(userSettings);
        await globalThis.botClient.win.webContents.send(IPCEvent.SetFrecencyUserSettings, uid, base64);
        return res.send({
            settings: base64,
        });
    };
    return Util.getDataFromRequest(req, res, callback);
});

export default app;
