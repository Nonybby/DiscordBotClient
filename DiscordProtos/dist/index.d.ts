declare module "@protobuf-ts/runtime" {
    interface MessageType<T> {
        toBase64(data: T): string;
        fromBase64(base64: string): T;
    }
}
export * from "./discord_protos/discord_users/v1/PreloadedUserSettings";
export * from "./discord_protos/discord_users/v1/FrecencyUserSettings";
export * from "./discord_protos/discord_kkv_store_value_models/v1/ApplicationUserRoleConnection";
export * from "./discord_protos/discord_kkv_store_value_models/v1/AcknowledgedApplicationDisclosures";
export * from "./discord_protos/premium_marketing/v1/PremiumMarketingComponentProperties";
