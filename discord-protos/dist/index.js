"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = require("@protobuf-ts/runtime");
/**
 * Supports both node and web environments, replacement of previous Buffer.from() being node-only.
 * This is specific to this package's usage, and not a replacement of Buffer.from() altogether
 */
const compatBuffer = {
    from: function (input, encoding) {
        if (typeof input === "string" && encoding === "base64") {
            const encodedBytes = atob(input);
            const bytes = new Uint8Array(encodedBytes.length);
            for (let i = 0; i < encodedBytes.length; i++) {
                bytes[i] = encodedBytes.charCodeAt(i);
            }
            return bytes;
        }
        else if (!encoding && input instanceof Uint8Array) {
            return input;
        }
        throw new Error("Invalid input type.");
    },
    toBase64String: function (buffer) {
        let encodedBytes = "";
        for (let i = 0; i < buffer.length; i++) {
            encodedBytes += String.fromCharCode(buffer[i]);
        }
        return btoa(encodedBytes);
    },
};
function toBase64(data) {
    return compatBuffer.toBase64String(compatBuffer.from(this.toBinary(data)));
}
function fromBase64(base64) {
    return this.fromBinary(compatBuffer.from(base64, "base64"));
}
runtime_1.MessageType.prototype.fromBase64 = fromBase64;
runtime_1.MessageType.prototype.toBase64 = toBase64;
__exportStar(require("./discord_protos/discord_users/v1/PreloadedUserSettings"), exports);
__exportStar(require("./discord_protos/discord_users/v1/FrecencyUserSettings"), exports);
__exportStar(require("./discord_protos/discord_kkv_store_value_models/v1/ApplicationUserRoleConnection"), exports);
__exportStar(require("./discord_protos/discord_kkv_store_value_models/v1/AcknowledgedApplicationDisclosures"), exports);
__exportStar(require("./discord_protos/premium_marketing/v1/PremiumMarketingComponentProperties"), exports);
