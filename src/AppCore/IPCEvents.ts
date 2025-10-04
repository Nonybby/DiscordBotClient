/* Copyright Elysia © 2025. All rights reserved */

export class IPCEvent extends null {
    static Close = "nekocord:window:close";
    static Minimize = "nekocord:window:minimize";
    static Maximize = "nekocord:window:maximize";
    static Focus = "nekocord:window:focus";
    // Preload IPC Events
    static GetBotInfo = "nekocord:preload:get_bot_info";
    static GetVersion = "nekocord:preload:get_version";
    static GetName = "nekocord:preload:get_name";
    static GetExperiment = "nekocord:preload:get_experiment";
    static GetDefaultUserPatch = "nekocord:preload:get_default_user_patch";
    // Logging from Main Process
    static LogFromMainProcess = "nekocord:main:log";
    // Main > Renderer Events
    static GetPreloadedUserSettings = "nekocord:preload:get_preloaded_user_settings";
    static GetPreloadedUserSettingsResponse = "nekocord:preload:get_preloaded_user_settings_response";
    static SetPreloadedUserSettings = "nekocord:preload:set_preloaded_user_settings";

    static GetFrecencyUserSettings = "nekocord:preload:get_frecency_user_settings";
    static GetFrecencyUserSettingsResponse = "nekocord:preload:get_frecency_user_settings_response";
    static SetFrecencyUserSettings = "nekocord:preload:set_frecency_user_settings";
    // Monaco Editor IPC Events
    static MonacoEditorGetConfig = "nekocord:editor:get_config";
    static MonacoEditorGetAutoComplete = "nekocord:editor:get_autocomplete";
    static MonacoEditorSaveConfig = "nekocord:editor:save_config";
}
