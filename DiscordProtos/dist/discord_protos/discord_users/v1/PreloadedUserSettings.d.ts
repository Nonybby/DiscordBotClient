import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Int64Value } from "../../google/protobuf/wrappers";
import { Int32Value } from "../../google/protobuf/wrappers";
import { FloatValue } from "../../google/protobuf/wrappers";
import { UInt32Value } from "../../google/protobuf/wrappers";
import { BoolValue } from "../../google/protobuf/wrappers";
import { Timestamp } from "../../google/protobuf/timestamp";
import { StringValue } from "../../google/protobuf/wrappers";
import { UInt64Value } from "../../google/protobuf/wrappers";
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings
 */
export interface PreloadedUserSettings {
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.Versions versions = 1
     */
    versions?: PreloadedUserSettings_Versions;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings inbox = 2
     */
    inbox?: PreloadedUserSettings_InboxSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings guilds = 3
     */
    guilds?: PreloadedUserSettings_AllGuildSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings user_content = 4
     */
    userContent?: PreloadedUserSettings_UserContentSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings voice_and_video = 5
     */
    voiceAndVideo?: PreloadedUserSettings_VoiceAndVideoSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings text_and_images = 6
     */
    textAndImages?: PreloadedUserSettings_TextAndImagesSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings notifications = 7
     */
    notifications?: PreloadedUserSettings_NotificationSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings privacy = 8
     */
    privacy?: PreloadedUserSettings_PrivacySettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings debug = 9
     */
    debug?: PreloadedUserSettings_DebugSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings game_library = 10
     */
    gameLibrary?: PreloadedUserSettings_GameLibrarySettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings status = 11
     */
    status?: PreloadedUserSettings_StatusSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings localization = 12
     */
    localization?: PreloadedUserSettings_LocalizationSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings appearance = 13
     */
    appearance?: PreloadedUserSettings_AppearanceSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders guild_folders = 14
     */
    guildFolders?: PreloadedUserSettings_GuildFolders;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.Favorites favorites = 15
     */
    favorites?: PreloadedUserSettings_Favorites;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings audio_context_settings = 16
     */
    audioContextSettings?: PreloadedUserSettings_AudioSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings communities = 17
     */
    communities?: PreloadedUserSettings_CommunitiesSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings broadcast = 18
     */
    broadcast?: PreloadedUserSettings_BroadcastSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings clips = 19
     */
    clips?: PreloadedUserSettings_ClipsSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings for_later = 20
     */
    forLater?: PreloadedUserSettings_ForLaterSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings safety_settings = 21
     */
    safetySettings?: PreloadedUserSettings_SafetySettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings icymi_settings = 22
     */
    icymiSettings?: PreloadedUserSettings_ICYMISettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AllApplicationSettings applications = 23
     */
    applications?: PreloadedUserSettings_AllApplicationSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AdsSettings ads = 24
     */
    ads?: PreloadedUserSettings_AdsSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.InAppFeedbackSettings in_app_feedback_settings = 25
     */
    inAppFeedbackSettings?: PreloadedUserSettings_InAppFeedbackSettings;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Versions
 */
export interface PreloadedUserSettings_Versions {
    /**
     * @generated from protobuf field: uint32 client_version = 1
     */
    clientVersion: number;
    /**
     * @generated from protobuf field: uint32 server_version = 2
     */
    serverVersion: number;
    /**
     * @generated from protobuf field: uint32 data_version = 3
     */
    dataVersion: number;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings
 */
export interface PreloadedUserSettings_InboxSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.InboxTab current_tab = 1
     */
    currentTab: PreloadedUserSettings_InboxTab;
    /**
     * @generated from protobuf field: bool viewed_tutorial = 2
     */
    viewedTutorial: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji
 */
export interface PreloadedUserSettings_ChannelIconEmoji {
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value id = 1
     */
    id?: UInt64Value;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue name = 2
     */
    name?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value color = 3
     */
    color?: UInt64Value;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig
 */
export interface PreloadedUserSettings_CustomNotificationSoundConfig {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue notification_sound_pack_id = 1
     */
    notificationSoundPackId?: StringValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings
 */
export interface PreloadedUserSettings_ChannelSettings {
    /**
     * @generated from protobuf field: bool collapsed_in_inbox = 1
     */
    collapsedInInbox: boolean;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji icon_emoji = 2
     */
    iconEmoji?: PreloadedUserSettings_ChannelIconEmoji;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig custom_notification_sound_config = 3
     */
    customNotificationSoundConfig?: PreloadedUserSettings_CustomNotificationSoundConfig;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound
 */
export interface PreloadedUserSettings_CustomCallSound {
    /**
     * @generated from protobuf field: fixed64 sound_id = 1
     */
    soundId: bigint;
    /**
     * @generated from protobuf field: fixed64 guild_id = 2
     */
    guildId: bigint;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings
 */
export interface PreloadedUserSettings_ChannelListSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue layout = 1
     */
    layout?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue message_previews = 2
     */
    messagePreviews?: StringValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings
 */
export interface PreloadedUserSettings_GuildSettings {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings> channels = 1
     */
    channels: {
        [key: string]: PreloadedUserSettings_ChannelSettings;
    };
    /**
     * @generated from protobuf field: uint32 hub_progress = 2
     */
    hubProgress: number;
    /**
     * @generated from protobuf field: uint32 guild_onboarding_progress = 3
     */
    guildOnboardingProgress: number;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp guild_recents_dismissed_at = 4
     */
    guildRecentsDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: bytes dismissed_guild_content = 5
     */
    dismissedGuildContent: Uint8Array;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound join_sound = 6
     */
    joinSound?: PreloadedUserSettings_CustomCallSound;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings mobile_redesign_channel_list_settings = 7
     */
    mobileRedesignChannelListSettings?: PreloadedUserSettings_ChannelListSettings;
    /**
     * @generated from protobuf field: bool disable_raid_alert_push = 8
     */
    disableRaidAlertPush: boolean;
    /**
     * @generated from protobuf field: bool disable_raid_alert_nag = 9
     */
    disableRaidAlertNag: boolean;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig custom_notification_sound_config = 10
     */
    customNotificationSoundConfig?: PreloadedUserSettings_CustomNotificationSoundConfig;
    /**
     * @generated from protobuf field: bool leaderboards_disabled = 11
     */
    leaderboardsDisabled: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings
 */
export interface PreloadedUserSettings_AllGuildSettings {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings> guilds = 1
     */
    guilds: {
        [key: string]: PreloadedUserSettings_GuildSettings;
    };
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState
 */
export interface PreloadedUserSettings_RecurringDismissibleContentState {
    /**
     * @generated from protobuf field: uint32 last_dismissed_version = 1
     */
    lastDismissedVersion: number;
    /**
     * @generated from protobuf field: uint64 last_dismissed_at_ms = 2
     */
    lastDismissedAtMs: bigint;
    /**
     * @generated from protobuf field: uint64 last_dismissed_object_id = 3
     */
    lastDismissedObjectId: bigint;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings
 */
export interface PreloadedUserSettings_UserContentSettings {
    /**
     * @generated from protobuf field: bytes dismissed_contents = 1
     */
    dismissedContents: Uint8Array;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue last_dismissed_outbound_promotion_start_date = 2
     */
    lastDismissedOutboundPromotionStartDate?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp premium_tier_0_modal_dismissed_at = 3
     */
    premiumTier0ModalDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp guild_onboarding_upsell_dismissed_at = 4
     */
    guildOnboardingUpsellDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp safety_user_sentiment_notice_dismissed_at = 5
     */
    safetyUserSentimentNoticeDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: fixed64 last_received_changelog_id = 6
     */
    lastReceivedChangelogId: bigint;
    /**
     * @generated from protobuf field: map<int32, discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState> recurring_dismissible_content_states = 7
     */
    recurringDismissibleContentStates: {
        [key: number]: PreloadedUserSettings_RecurringDismissibleContentState;
    };
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur
 */
export interface PreloadedUserSettings_VideoFilterBackgroundBlur {
    /**
     * @generated from protobuf field: bool use_blur = 1
     */
    useBlur: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset
 */
export interface PreloadedUserSettings_VideoFilterAsset {
    /**
     * @generated from protobuf field: fixed64 id = 1
     */
    id: bigint;
    /**
     * @generated from protobuf field: string asset_hash = 2
     */
    assetHash: string;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings
 */
export interface PreloadedUserSettings_SoundboardSettings {
    /**
     * @generated from protobuf field: float volume = 1
     */
    volume: number;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings
 */
export interface PreloadedUserSettings_VoiceAndVideoSettings {
    /**
     * @generated from protobuf oneof: video_background_filter_desktop
     */
    videoBackgroundFilterDesktop: {
        oneofKind: "blur";
        /**
         * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur blur = 1
         */
        blur: PreloadedUserSettings_VideoFilterBackgroundBlur;
    } | {
        oneofKind: "presetOption";
        /**
         * @generated from protobuf field: uint32 preset_option = 2
         */
        presetOption: number;
    } | {
        oneofKind: "customAsset";
        /**
         * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset custom_asset = 3
         */
        customAsset: PreloadedUserSettings_VideoFilterAsset;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue always_preview_video = 5
     */
    alwaysPreviewVideo?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value afk_timeout = 6
     */
    afkTimeout?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue stream_notifications_enabled = 7
     */
    streamNotificationsEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue native_phone_integration_enabled = 8
     */
    nativePhoneIntegrationEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings soundboard_settings = 9
     */
    soundboardSettings?: PreloadedUserSettings_SoundboardSettings;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue disable_stream_previews = 10
     */
    disableStreamPreviews?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.FloatValue soundmoji_volume = 11
     */
    soundmojiVolume?: FloatValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings
 */
export interface PreloadedUserSettings_ExplicitContentSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_guilds = 1
     */
    explicitContentGuilds: PreloadedUserSettings_ExplicitContentRedaction;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_friend_dm = 2
     */
    explicitContentFriendDm: PreloadedUserSettings_ExplicitContentRedaction;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_non_friend_dm = 3
     */
    explicitContentNonFriendDm: PreloadedUserSettings_ExplicitContentRedaction;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings
 */
export interface PreloadedUserSettings_KeywordFilterSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue profanity = 1
     */
    profanity?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue sexual_content = 2
     */
    sexualContent?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue slurs = 3
     */
    slurs?: BoolValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GoreContentSettings
 */
export interface PreloadedUserSettings_GoreContentSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction gore_content_guilds = 1
     */
    goreContentGuilds: PreloadedUserSettings_ExplicitContentRedaction;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction gore_content_friend_dm = 2
     */
    goreContentFriendDm: PreloadedUserSettings_ExplicitContentRedaction;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction gore_content_non_friend_dm = 3
     */
    goreContentNonFriendDm: PreloadedUserSettings_ExplicitContentRedaction;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings
 */
export interface PreloadedUserSettings_TextAndImagesSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue diversity_surrogate = 1
     */
    diversitySurrogate?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue use_rich_chat_input = 2
     */
    useRichChatInput?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue use_thread_sidebar = 3
     */
    useThreadSidebar?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue render_spoilers = 4
     */
    renderSpoilers?: StringValue;
    /**
     * @generated from protobuf field: repeated string emoji_picker_collapsed_sections = 5 [packed = false]
     */
    emojiPickerCollapsedSections: string[];
    /**
     * @generated from protobuf field: repeated string sticker_picker_collapsed_sections = 6 [packed = false]
     */
    stickerPickerCollapsedSections: string[];
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue view_image_descriptions = 7
     */
    viewImageDescriptions?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue show_command_suggestions = 8
     */
    showCommandSuggestions?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue inline_attachment_media = 9
     */
    inlineAttachmentMedia?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue inline_embed_media = 10
     */
    inlineEmbedMedia?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue gif_auto_play = 11
     */
    gifAutoPlay?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue render_embeds = 12
     */
    renderEmbeds?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue render_reactions = 13
     */
    renderReactions?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue animate_emoji = 14
     */
    animateEmoji?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value animate_stickers = 15
     */
    animateStickers?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue enable_tts_command = 16
     */
    enableTtsCommand?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue message_display_compact = 17
     */
    messageDisplayCompact?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value explicit_content_filter = 19
     */
    explicitContentFilter?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue view_nsfw_guilds = 20
     */
    viewNsfwGuilds?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue convert_emoticons = 21
     */
    convertEmoticons?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue expression_suggestions_enabled = 22
     */
    expressionSuggestionsEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue view_nsfw_commands = 23
     */
    viewNsfwCommands?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue use_legacy_chat_input = 24
     */
    useLegacyChatInput?: BoolValue;
    /**
     * @generated from protobuf field: repeated string soundboard_picker_collapsed_sections = 25 [packed = false]
     */
    soundboardPickerCollapsedSections: string[];
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value dm_spam_filter = 26
     */
    dmSpamFilter?: UInt32Value;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.DmSpamFilterV2 dm_spam_filter_v2 = 27
     */
    dmSpamFilterV2: PreloadedUserSettings_DmSpamFilterV2;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue include_stickers_in_autocomplete = 28
     */
    includeStickersInAutocomplete?: BoolValue;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings explicit_content_settings = 29
     */
    explicitContentSettings?: PreloadedUserSettings_ExplicitContentSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings keyword_filter_settings = 30
     */
    keywordFilterSettings?: PreloadedUserSettings_KeywordFilterSettings;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue include_soundmoji_in_autocomplete = 31
     */
    includeSoundmojiInAutocomplete?: BoolValue;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.GoreContentSettings gore_content_settings = 32
     */
    goreContentSettings?: PreloadedUserSettings_GoreContentSettings;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings
 */
export interface PreloadedUserSettings_NotificationSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue show_in_app_notifications = 1
     */
    showInAppNotifications?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue notify_friends_on_go_live = 2
     */
    notifyFriendsOnGoLive?: BoolValue;
    /**
     * @generated from protobuf field: fixed64 notification_center_acked_before_id = 3
     */
    notificationCenterAckedBeforeId: bigint;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue enable_burst_reaction_notifications = 4
     */
    enableBurstReactionNotifications?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue quiet_mode = 5
     */
    quietMode?: BoolValue;
    /**
     * @generated from protobuf field: fixed64 focus_mode_expires_at_ms = 6
     */
    focusModeExpiresAtMs: bigint;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ReactionNotificationType reaction_notifications = 7
     */
    reactionNotifications: PreloadedUserSettings_ReactionNotificationType;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.GameActivityNotificationType game_activity_notifications = 8
     */
    gameActivityNotifications: PreloadedUserSettings_GameActivityNotificationType;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatusPushNotificationType custom_status_push_notifications = 9
     */
    customStatusPushNotifications: PreloadedUserSettings_CustomStatusPushNotificationType;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue game_activity_exclude_steam_notifications = 10
     */
    gameActivityExcludeSteamNotifications?: BoolValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings
 */
export interface PreloadedUserSettings_PrivacySettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_activity_party_privacy_friends = 1
     */
    allowActivityPartyPrivacyFriends?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_activity_party_privacy_voice_channel = 2
     */
    allowActivityPartyPrivacyVoiceChannel?: BoolValue;
    /**
     * @generated from protobuf field: repeated fixed64 restricted_guild_ids = 3
     */
    restrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: bool default_guilds_restricted = 4
     */
    defaultGuildsRestricted: boolean;
    /**
     * @generated from protobuf field: bool allow_accessibility_detection = 7
     */
    allowAccessibilityDetection: boolean;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue detect_platform_accounts = 8
     */
    detectPlatformAccounts?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue passwordless = 9
     */
    passwordless?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue contact_sync_enabled = 10
     */
    contactSyncEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value friend_source_flags = 11
     */
    friendSourceFlags?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value friend_discovery_flags = 12
     */
    friendDiscoveryFlags?: UInt32Value;
    /**
     * @generated from protobuf field: repeated fixed64 activity_restricted_guild_ids = 13
     */
    activityRestrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.GuildActivityStatusRestrictionDefault default_guilds_activity_restricted = 14
     */
    defaultGuildsActivityRestricted: PreloadedUserSettings_GuildActivityStatusRestrictionDefault;
    /**
     * @generated from protobuf field: repeated fixed64 activity_joining_restricted_guild_ids = 15
     */
    activityJoiningRestrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: repeated fixed64 message_request_restricted_guild_ids = 16
     */
    messageRequestRestrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue default_message_request_restricted = 17
     */
    defaultMessageRequestRestricted?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue drops_opted_out = 18
     */
    dropsOptedOut?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue non_spam_retraining_opt_in = 19
     */
    nonSpamRetrainingOptIn?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue family_center_enabled = 20
     */
    familyCenterEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue family_center_enabled_v2 = 21
     */
    familyCenterEnabledV2?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue hide_legacy_username = 22
     */
    hideLegacyUsername?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue inappropriate_conversation_warnings = 23
     */
    inappropriateConversationWarnings?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue recent_games_enabled = 24
     */
    recentGamesEnabled?: BoolValue;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.GuildsLeaderboardOptOutDefault guilds_leaderboard_opt_out_default = 25
     */
    guildsLeaderboardOptOutDefault: PreloadedUserSettings_GuildsLeaderboardOptOutDefault;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_game_friend_dms_in_discord = 26
     */
    allowGameFriendDmsInDiscord?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue default_guilds_restricted_v2 = 27
     */
    defaultGuildsRestrictedV2?: BoolValue;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.SlayerSDKReceiveInGameDMs slayer_sdk_receive_dms_in_game = 28
     */
    slayerSdkReceiveDmsInGame: PreloadedUserSettings_SlayerSDKReceiveInGameDMs;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings
 */
export interface PreloadedUserSettings_DebugSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue rtc_panel_show_voice_states = 1
     */
    rtcPanelShowVoiceStates?: BoolValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings
 */
export interface PreloadedUserSettings_GameLibrarySettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue install_shortcut_desktop = 1
     */
    installShortcutDesktop?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue install_shortcut_start_menu = 2
     */
    installShortcutStartMenu?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue disable_games_tab = 3
     */
    disableGamesTab?: BoolValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus
 */
export interface PreloadedUserSettings_CustomStatus {
    /**
     * @generated from protobuf field: string text = 1
     */
    text: string;
    /**
     * @generated from protobuf field: fixed64 emoji_id = 2
     */
    emojiId: bigint;
    /**
     * @generated from protobuf field: string emoji_name = 3
     */
    emojiName: string;
    /**
     * @generated from protobuf field: fixed64 expires_at_ms = 4
     */
    expiresAtMs: bigint;
    /**
     * @generated from protobuf field: fixed64 created_at_ms = 5
     */
    createdAtMs: bigint;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue label = 6
     */
    label?: StringValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings
 */
export interface PreloadedUserSettings_StatusSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue status = 1
     */
    status?: StringValue;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus custom_status = 2
     */
    customStatus?: PreloadedUserSettings_CustomStatus;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue show_current_game = 3
     */
    showCurrentGame?: BoolValue;
    /**
     * @generated from protobuf field: fixed64 status_expires_at_ms = 4
     */
    statusExpiresAtMs: bigint;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings
 */
export interface PreloadedUserSettings_LocalizationSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue locale = 1
     */
    locale?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.Int32Value timezone_offset = 2
     */
    timezoneOffset?: Int32Value;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomUserThemeSettings
 */
export interface PreloadedUserSettings_CustomUserThemeSettings {
    /**
     * @generated from protobuf field: repeated string colors = 1 [packed = false]
     */
    colors: string[];
    /**
     * @generated from protobuf field: repeated float gradient_color_stops = 2
     */
    gradientColorStops: number[];
    /**
     * @generated from protobuf field: int32 gradient_angle = 3
     */
    gradientAngle: number;
    /**
     * @generated from protobuf field: int32 base_mix = 4
     */
    baseMix: number;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings
 */
export interface PreloadedUserSettings_ClientThemeSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value background_gradient_preset_id = 2
     */
    backgroundGradientPresetId?: UInt32Value;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomUserThemeSettings custom_user_theme_settings = 4
     */
    customUserThemeSettings?: PreloadedUserSettings_CustomUserThemeSettings;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings
 */
export interface PreloadedUserSettings_AppearanceSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.Theme theme = 1
     */
    theme: PreloadedUserSettings_Theme;
    /**
     * @generated from protobuf field: bool developer_mode = 2
     */
    developerMode: boolean;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings client_theme_settings = 3
     */
    clientThemeSettings?: PreloadedUserSettings_ClientThemeSettings;
    /**
     * @generated from protobuf field: bool mobile_redesign_disabled = 4
     */
    mobileRedesignDisabled: boolean;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue channel_list_layout = 6
     */
    channelListLayout?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue message_previews = 7
     */
    messagePreviews?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue search_result_exact_count_enabled = 8
     */
    searchResultExactCountEnabled?: BoolValue;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.TimestampHourCycle timestamp_hour_cycle = 9
     */
    timestampHourCycle: PreloadedUserSettings_TimestampHourCycle;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue happening_now_cards_disabled = 10
     */
    happeningNowCardsDisabled?: BoolValue;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.LaunchPadMode launch_pad_mode = 11
     */
    launchPadMode: PreloadedUserSettings_LaunchPadMode;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.UIDensity ui_density = 12
     */
    uiDensity: PreloadedUserSettings_UIDensity;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.SwipeRightToLeftMode swipe_right_to_left_mode = 13
     */
    swipeRightToLeftMode: PreloadedUserSettings_SwipeRightToLeftMode;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder
 */
export interface PreloadedUserSettings_GuildFolder {
    /**
     * @generated from protobuf field: repeated fixed64 guild_ids = 1
     */
    guildIds: bigint[];
    /**
     * @generated from protobuf field: optional google.protobuf.Int64Value id = 2
     */
    id?: Int64Value;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue name = 3
     */
    name?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value color = 4
     */
    color?: UInt64Value;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders
 */
export interface PreloadedUserSettings_GuildFolders {
    /**
     * @generated from protobuf field: repeated discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder folders = 1
     */
    folders: PreloadedUserSettings_GuildFolder[];
    /**
     * @generated from protobuf field: repeated fixed64 guild_positions = 2
     */
    guildPositions: bigint[];
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel
 */
export interface PreloadedUserSettings_FavoriteChannel {
    /**
     * @generated from protobuf field: string nickname = 1
     */
    nickname: string;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannelType type = 2
     */
    type: PreloadedUserSettings_FavoriteChannelType;
    /**
     * @generated from protobuf field: uint32 position = 3
     */
    position: number;
    /**
     * @generated from protobuf field: fixed64 parent_id = 4
     */
    parentId: bigint;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Favorites
 */
export interface PreloadedUserSettings_Favorites {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel> favorite_channels = 1
     */
    favoriteChannels: {
        [key: string]: PreloadedUserSettings_FavoriteChannel;
    };
    /**
     * @generated from protobuf field: bool muted = 2
     */
    muted: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting
 */
export interface PreloadedUserSettings_AudioContextSetting {
    /**
     * @generated from protobuf field: bool muted = 1
     */
    muted: boolean;
    /**
     * @generated from protobuf field: float volume = 2
     */
    volume: number;
    /**
     * @generated from protobuf field: fixed64 modified_at = 3
     */
    modifiedAt: bigint;
    /**
     * @generated from protobuf field: bool soundboard_muted = 4
     */
    soundboardMuted: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings
 */
export interface PreloadedUserSettings_AudioSettings {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting> user = 1
     */
    user: {
        [key: string]: PreloadedUserSettings_AudioContextSetting;
    };
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting> stream = 2
     */
    stream: {
        [key: string]: PreloadedUserSettings_AudioContextSetting;
    };
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings
 */
export interface PreloadedUserSettings_CommunitiesSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue disable_home_auto_nav = 1
     */
    disableHomeAutoNav?: BoolValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings
 */
export interface PreloadedUserSettings_BroadcastSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_friends = 1
     */
    allowFriends?: BoolValue;
    /**
     * @generated from protobuf field: repeated fixed64 allowed_guild_ids = 2
     */
    allowedGuildIds: bigint[];
    /**
     * @generated from protobuf field: repeated fixed64 allowed_user_ids = 3
     */
    allowedUserIds: bigint[];
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue auto_broadcast = 4
     */
    autoBroadcast?: BoolValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings
 */
export interface PreloadedUserSettings_ClipsSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_voice_recording = 1
     */
    allowVoiceRecording?: BoolValue;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings
 */
export interface PreloadedUserSettings_ForLaterSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterTab current_tab = 1
     */
    currentTab: PreloadedUserSettings_ForLaterTab;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings
 */
export interface PreloadedUserSettings_SafetySettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsPresetType safety_settings_preset = 1
     */
    safetySettingsPreset: PreloadedUserSettings_SafetySettingsPresetType;
    /**
     * @generated from protobuf field: bool ignore_profile_speedbump_disabled = 2
     */
    ignoreProfileSpeedbumpDisabled: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings
 */
export interface PreloadedUserSettings_ICYMISettings {
    /**
     * @generated from protobuf field: fixed64 feed_generated_at = 1
     */
    feedGeneratedAt: bigint;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationDMSettings
 */
export interface PreloadedUserSettings_ApplicationDMSettings {
    /**
     * @generated from protobuf field: bool allow_mobile_push = 2
     */
    allowMobilePush: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationSharingSettings
 */
export interface PreloadedUserSettings_ApplicationSharingSettings {
    /**
     * @generated from protobuf field: bool disable_application_activity_sharing = 1
     */
    disableApplicationActivitySharing: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationSettings
 */
export interface PreloadedUserSettings_ApplicationSettings {
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationDMSettings app_dm_settings = 1
     */
    appDmSettings?: PreloadedUserSettings_ApplicationDMSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationSharingSettings app_sharing_settings = 2
     */
    appSharingSettings?: PreloadedUserSettings_ApplicationSharingSettings;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AllApplicationSettings
 */
export interface PreloadedUserSettings_AllApplicationSettings {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationSettings> app_settings = 1
     */
    appSettings: {
        [key: string]: PreloadedUserSettings_ApplicationSettings;
    };
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AdsSettings
 */
export interface PreloadedUserSettings_AdsSettings {
    /**
     * @generated from protobuf field: bool always_deliver = 1
     */
    alwaysDeliver: boolean;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InAppFeedbackState
 */
export interface PreloadedUserSettings_InAppFeedbackState {
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value last_impression_time = 1
     */
    lastImpressionTime?: UInt64Value;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value opt_out_expiry_time = 2
     */
    optOutExpiryTime?: UInt64Value;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InAppFeedbackSettings
 */
export interface PreloadedUserSettings_InAppFeedbackSettings {
    /**
     * @generated from protobuf field: map<int32, discord_protos.discord_users.v1.PreloadedUserSettings.InAppFeedbackState> in_app_feedback_states = 1
     */
    inAppFeedbackStates: {
        [key: number]: PreloadedUserSettings_InAppFeedbackState;
    };
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.InboxTab
 */
export declare enum PreloadedUserSettings_InboxTab {
    /**
     * @generated from protobuf enum value: INBOX_TAB_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: INBOX_TAB_MENTIONS = 1;
     */
    MENTIONS = 1,
    /**
     * @generated from protobuf enum value: INBOX_TAB_UNREADS = 2;
     */
    UNREADS = 2,
    /**
     * @generated from protobuf enum value: INBOX_TAB_TODOS = 3;
     */
    TODOS = 3,
    /**
     * @generated from protobuf enum value: INBOX_TAB_FOR_YOU = 4;
     */
    FOR_YOU = 4,
    /**
     * @generated from protobuf enum value: INBOX_TAB_GAME_INVITES = 5;
     */
    GAME_INVITES = 5,
    /**
     * @generated from protobuf enum value: INBOX_TAB_BOOKMARKS = 6;
     */
    BOOKMARKS = 6,
    /**
     * @generated from protobuf enum value: INBOX_TAB_SCHEDULED = 7;
     */
    SCHEDULED = 7
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.DmSpamFilterV2
 */
export declare enum PreloadedUserSettings_DmSpamFilterV2 {
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_DEFAULT_UNSET = 0;
     */
    DEFAULT_UNSET = 0,
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_DISABLED = 1;
     */
    DISABLED = 1,
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_NON_FRIENDS = 2;
     */
    NON_FRIENDS = 2,
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_FRIENDS_AND_NON_FRIENDS = 3;
     */
    FRIENDS_AND_NON_FRIENDS = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction
 */
export declare enum PreloadedUserSettings_ExplicitContentRedaction {
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_UNSET_EXPLICIT_CONTENT_REDACTION = 0;
     */
    UNSET_EXPLICIT_CONTENT_REDACTION = 0,
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_SHOW = 1;
     */
    SHOW = 1,
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_BLUR = 2;
     */
    BLUR = 2,
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_BLOCK = 3;
     */
    BLOCK = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.ReactionNotificationType
 */
export declare enum PreloadedUserSettings_ReactionNotificationType {
    /**
     * @generated from protobuf enum value: REACTION_NOTIFICATION_TYPE_NOTIFICATIONS_ENABLED = 0;
     */
    NOTIFICATIONS_ENABLED = 0,
    /**
     * @generated from protobuf enum value: REACTION_NOTIFICATION_TYPE_ONLY_DMS = 1;
     */
    ONLY_DMS = 1,
    /**
     * @generated from protobuf enum value: REACTION_NOTIFICATION_TYPE_NOTIFICATIONS_DISABLED = 2;
     */
    NOTIFICATIONS_DISABLED = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.GameActivityNotificationType
 */
export declare enum PreloadedUserSettings_GameActivityNotificationType {
    /**
     * @generated from protobuf enum value: GAME_ACTIVITY_NOTIFICATION_TYPE_ACTIVITY_NOTIFICATIONS_UNSET = 0;
     */
    ACTIVITY_NOTIFICATIONS_UNSET = 0,
    /**
     * @generated from protobuf enum value: GAME_ACTIVITY_NOTIFICATION_TYPE_ACTIVITY_NOTIFICATIONS_DISABLED = 1;
     */
    ACTIVITY_NOTIFICATIONS_DISABLED = 1,
    /**
     * @generated from protobuf enum value: GAME_ACTIVITY_NOTIFICATION_TYPE_ACTIVITY_NOTIFICATIONS_ENABLED = 2;
     */
    ACTIVITY_NOTIFICATIONS_ENABLED = 2,
    /**
     * @generated from protobuf enum value: GAME_ACTIVITY_NOTIFICATION_TYPE_ONLY_GAMES_PLAYED = 3;
     */
    ONLY_GAMES_PLAYED = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatusPushNotificationType
 */
export declare enum PreloadedUserSettings_CustomStatusPushNotificationType {
    /**
     * @generated from protobuf enum value: CUSTOM_STATUS_PUSH_NOTIFICATION_TYPE_STATUS_PUSH_UNSET = 0;
     */
    STATUS_PUSH_UNSET = 0,
    /**
     * @generated from protobuf enum value: CUSTOM_STATUS_PUSH_NOTIFICATION_TYPE_STATUS_PUSH_ENABLED = 1;
     */
    STATUS_PUSH_ENABLED = 1,
    /**
     * @generated from protobuf enum value: CUSTOM_STATUS_PUSH_NOTIFICATION_TYPE_STATUS_PUSH_DISABLED = 2;
     */
    STATUS_PUSH_DISABLED = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.GuildActivityStatusRestrictionDefault
 */
export declare enum PreloadedUserSettings_GuildActivityStatusRestrictionDefault {
    /**
     * @generated from protobuf enum value: GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_OFF = 0;
     */
    OFF = 0,
    /**
     * @generated from protobuf enum value: GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_ON_FOR_LARGE_GUILDS = 1;
     */
    ON_FOR_LARGE_GUILDS = 1,
    /**
     * @generated from protobuf enum value: GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_ON = 2;
     */
    ON = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.GuildsLeaderboardOptOutDefault
 */
export declare enum PreloadedUserSettings_GuildsLeaderboardOptOutDefault {
    /**
     * @generated from protobuf enum value: GUILDS_LEADERBOARD_OPT_OUT_DEFAULT_OFF_FOR_NEW_GUILDS = 0;
     */
    OFF_FOR_NEW_GUILDS = 0,
    /**
     * @generated from protobuf enum value: GUILDS_LEADERBOARD_OPT_OUT_DEFAULT_ON_FOR_NEW_GUILDS = 1;
     */
    ON_FOR_NEW_GUILDS = 1
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.SlayerSDKReceiveInGameDMs
 */
export declare enum PreloadedUserSettings_SlayerSDKReceiveInGameDMs {
    /**
     * @generated from protobuf enum value: SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = 0;
     */
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = 0,
    /**
     * @generated from protobuf enum value: SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = 1;
     */
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = 1,
    /**
     * @generated from protobuf enum value: SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME = 2;
     */
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME = 2,
    /**
     * @generated from protobuf enum value: SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE = 3;
     */
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.Theme
 */
export declare enum PreloadedUserSettings_Theme {
    /**
     * @generated from protobuf enum value: THEME_UNSET = 0;
     */
    UNSET = 0,
    /**
     * @generated from protobuf enum value: THEME_DARK = 1;
     */
    DARK = 1,
    /**
     * @generated from protobuf enum value: THEME_LIGHT = 2;
     */
    LIGHT = 2,
    /**
     * @generated from protobuf enum value: THEME_DARKER = 3;
     */
    DARKER = 3,
    /**
     * @generated from protobuf enum value: THEME_MIDNIGHT = 4;
     */
    MIDNIGHT = 4
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.TimestampHourCycle
 */
export declare enum PreloadedUserSettings_TimestampHourCycle {
    /**
     * @generated from protobuf enum value: TIMESTAMP_HOUR_CYCLE_AUTO = 0;
     */
    AUTO = 0,
    /**
     * @generated from protobuf enum value: TIMESTAMP_HOUR_CYCLE_H12 = 1;
     */
    H12 = 1,
    /**
     * @generated from protobuf enum value: TIMESTAMP_HOUR_CYCLE_H23 = 2;
     */
    H23 = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.LaunchPadMode
 */
export declare enum PreloadedUserSettings_LaunchPadMode {
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_DISABLED = 0;
     */
    LAUNCH_PAD_DISABLED = 0,
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_GESTURE_FULL_SCREEN = 1;
     */
    LAUNCH_PAD_GESTURE_FULL_SCREEN = 1,
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2;
     */
    LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2,
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_PULL_TAB = 3;
     */
    LAUNCH_PAD_PULL_TAB = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.UIDensity
 */
export declare enum PreloadedUserSettings_UIDensity {
    /**
     * @generated from protobuf enum value: UI_DENSITY_UNSET_UI_DENSITY = 0;
     */
    UI_DENSITY_UNSET_UI_DENSITY = 0,
    /**
     * @generated from protobuf enum value: UI_DENSITY_COMPACT = 1;
     */
    UI_DENSITY_COMPACT = 1,
    /**
     * @generated from protobuf enum value: UI_DENSITY_COZY = 2;
     */
    UI_DENSITY_COZY = 2,
    /**
     * @generated from protobuf enum value: UI_DENSITY_RESPONSIVE = 3;
     */
    UI_DENSITY_RESPONSIVE = 3,
    /**
     * @generated from protobuf enum value: UI_DENSITY_DEFAULT = 4;
     */
    UI_DENSITY_DEFAULT = 4
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.SwipeRightToLeftMode
 */
export declare enum PreloadedUserSettings_SwipeRightToLeftMode {
    /**
     * @generated from protobuf enum value: SWIPE_RIGHT_TO_LEFT_MODE_SWIPE_RIGHT_TO_LEFT_UNSET = 0;
     */
    SWIPE_RIGHT_TO_LEFT_UNSET = 0,
    /**
     * @generated from protobuf enum value: SWIPE_RIGHT_TO_LEFT_MODE_SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS = 1;
     */
    SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS = 1,
    /**
     * @generated from protobuf enum value: SWIPE_RIGHT_TO_LEFT_MODE_SWIPE_RIGHT_TO_LEFT_REPLY = 2;
     */
    SWIPE_RIGHT_TO_LEFT_REPLY = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannelType
 */
export declare enum PreloadedUserSettings_FavoriteChannelType {
    /**
     * @generated from protobuf enum value: FAVORITE_CHANNEL_TYPE_UNSET_FAVORITE_CHANNEL_TYPE = 0;
     */
    UNSET_FAVORITE_CHANNEL_TYPE = 0,
    /**
     * @generated from protobuf enum value: FAVORITE_CHANNEL_TYPE_REFERENCE_ORIGINAL = 1;
     */
    REFERENCE_ORIGINAL = 1,
    /**
     * @generated from protobuf enum value: FAVORITE_CHANNEL_TYPE_CATEGORY = 2;
     */
    CATEGORY = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterTab
 */
export declare enum PreloadedUserSettings_ForLaterTab {
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_ALL = 1;
     */
    ALL = 1,
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_BOOKMARKS = 2;
     */
    BOOKMARKS = 2,
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_REMINDERS = 3;
     */
    REMINDERS = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsPresetType
 */
export declare enum PreloadedUserSettings_SafetySettingsPresetType {
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_UNSET_SAFETY_SETTINGS_PRESET = 0;
     */
    UNSET_SAFETY_SETTINGS_PRESET = 0,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_BALANCED = 1;
     */
    BALANCED = 1,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_STRICT = 2;
     */
    STRICT = 2,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_RELAXED = 3;
     */
    RELAXED = 3,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_CUSTOM = 4;
     */
    CUSTOM = 4
}
declare class PreloadedUserSettings$Type extends MessageType<PreloadedUserSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings>): PreloadedUserSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings): PreloadedUserSettings;
    internalBinaryWrite(message: PreloadedUserSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings
 */
export declare const PreloadedUserSettings: PreloadedUserSettings$Type;
declare class PreloadedUserSettings_Versions$Type extends MessageType<PreloadedUserSettings_Versions> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_Versions>): PreloadedUserSettings_Versions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_Versions): PreloadedUserSettings_Versions;
    internalBinaryWrite(message: PreloadedUserSettings_Versions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Versions
 */
export declare const PreloadedUserSettings_Versions: PreloadedUserSettings_Versions$Type;
declare class PreloadedUserSettings_InboxSettings$Type extends MessageType<PreloadedUserSettings_InboxSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_InboxSettings>): PreloadedUserSettings_InboxSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_InboxSettings): PreloadedUserSettings_InboxSettings;
    internalBinaryWrite(message: PreloadedUserSettings_InboxSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings
 */
export declare const PreloadedUserSettings_InboxSettings: PreloadedUserSettings_InboxSettings$Type;
declare class PreloadedUserSettings_ChannelIconEmoji$Type extends MessageType<PreloadedUserSettings_ChannelIconEmoji> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ChannelIconEmoji>): PreloadedUserSettings_ChannelIconEmoji;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ChannelIconEmoji): PreloadedUserSettings_ChannelIconEmoji;
    internalBinaryWrite(message: PreloadedUserSettings_ChannelIconEmoji, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji
 */
export declare const PreloadedUserSettings_ChannelIconEmoji: PreloadedUserSettings_ChannelIconEmoji$Type;
declare class PreloadedUserSettings_CustomNotificationSoundConfig$Type extends MessageType<PreloadedUserSettings_CustomNotificationSoundConfig> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CustomNotificationSoundConfig>): PreloadedUserSettings_CustomNotificationSoundConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CustomNotificationSoundConfig): PreloadedUserSettings_CustomNotificationSoundConfig;
    internalBinaryWrite(message: PreloadedUserSettings_CustomNotificationSoundConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig
 */
export declare const PreloadedUserSettings_CustomNotificationSoundConfig: PreloadedUserSettings_CustomNotificationSoundConfig$Type;
declare class PreloadedUserSettings_ChannelSettings$Type extends MessageType<PreloadedUserSettings_ChannelSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ChannelSettings>): PreloadedUserSettings_ChannelSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ChannelSettings): PreloadedUserSettings_ChannelSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ChannelSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings
 */
export declare const PreloadedUserSettings_ChannelSettings: PreloadedUserSettings_ChannelSettings$Type;
declare class PreloadedUserSettings_CustomCallSound$Type extends MessageType<PreloadedUserSettings_CustomCallSound> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CustomCallSound>): PreloadedUserSettings_CustomCallSound;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CustomCallSound): PreloadedUserSettings_CustomCallSound;
    internalBinaryWrite(message: PreloadedUserSettings_CustomCallSound, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound
 */
export declare const PreloadedUserSettings_CustomCallSound: PreloadedUserSettings_CustomCallSound$Type;
declare class PreloadedUserSettings_ChannelListSettings$Type extends MessageType<PreloadedUserSettings_ChannelListSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ChannelListSettings>): PreloadedUserSettings_ChannelListSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ChannelListSettings): PreloadedUserSettings_ChannelListSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ChannelListSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings
 */
export declare const PreloadedUserSettings_ChannelListSettings: PreloadedUserSettings_ChannelListSettings$Type;
declare class PreloadedUserSettings_GuildSettings$Type extends MessageType<PreloadedUserSettings_GuildSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GuildSettings>): PreloadedUserSettings_GuildSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GuildSettings): PreloadedUserSettings_GuildSettings;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_GuildSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings
 */
export declare const PreloadedUserSettings_GuildSettings: PreloadedUserSettings_GuildSettings$Type;
declare class PreloadedUserSettings_AllGuildSettings$Type extends MessageType<PreloadedUserSettings_AllGuildSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AllGuildSettings>): PreloadedUserSettings_AllGuildSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AllGuildSettings): PreloadedUserSettings_AllGuildSettings;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_AllGuildSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings
 */
export declare const PreloadedUserSettings_AllGuildSettings: PreloadedUserSettings_AllGuildSettings$Type;
declare class PreloadedUserSettings_RecurringDismissibleContentState$Type extends MessageType<PreloadedUserSettings_RecurringDismissibleContentState> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_RecurringDismissibleContentState>): PreloadedUserSettings_RecurringDismissibleContentState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_RecurringDismissibleContentState): PreloadedUserSettings_RecurringDismissibleContentState;
    internalBinaryWrite(message: PreloadedUserSettings_RecurringDismissibleContentState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState
 */
export declare const PreloadedUserSettings_RecurringDismissibleContentState: PreloadedUserSettings_RecurringDismissibleContentState$Type;
declare class PreloadedUserSettings_UserContentSettings$Type extends MessageType<PreloadedUserSettings_UserContentSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_UserContentSettings>): PreloadedUserSettings_UserContentSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_UserContentSettings): PreloadedUserSettings_UserContentSettings;
    private binaryReadMap7;
    internalBinaryWrite(message: PreloadedUserSettings_UserContentSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings
 */
export declare const PreloadedUserSettings_UserContentSettings: PreloadedUserSettings_UserContentSettings$Type;
declare class PreloadedUserSettings_VideoFilterBackgroundBlur$Type extends MessageType<PreloadedUserSettings_VideoFilterBackgroundBlur> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_VideoFilterBackgroundBlur>): PreloadedUserSettings_VideoFilterBackgroundBlur;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_VideoFilterBackgroundBlur): PreloadedUserSettings_VideoFilterBackgroundBlur;
    internalBinaryWrite(message: PreloadedUserSettings_VideoFilterBackgroundBlur, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur
 */
export declare const PreloadedUserSettings_VideoFilterBackgroundBlur: PreloadedUserSettings_VideoFilterBackgroundBlur$Type;
declare class PreloadedUserSettings_VideoFilterAsset$Type extends MessageType<PreloadedUserSettings_VideoFilterAsset> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_VideoFilterAsset>): PreloadedUserSettings_VideoFilterAsset;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_VideoFilterAsset): PreloadedUserSettings_VideoFilterAsset;
    internalBinaryWrite(message: PreloadedUserSettings_VideoFilterAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset
 */
export declare const PreloadedUserSettings_VideoFilterAsset: PreloadedUserSettings_VideoFilterAsset$Type;
declare class PreloadedUserSettings_SoundboardSettings$Type extends MessageType<PreloadedUserSettings_SoundboardSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_SoundboardSettings>): PreloadedUserSettings_SoundboardSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_SoundboardSettings): PreloadedUserSettings_SoundboardSettings;
    internalBinaryWrite(message: PreloadedUserSettings_SoundboardSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings
 */
export declare const PreloadedUserSettings_SoundboardSettings: PreloadedUserSettings_SoundboardSettings$Type;
declare class PreloadedUserSettings_VoiceAndVideoSettings$Type extends MessageType<PreloadedUserSettings_VoiceAndVideoSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_VoiceAndVideoSettings>): PreloadedUserSettings_VoiceAndVideoSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_VoiceAndVideoSettings): PreloadedUserSettings_VoiceAndVideoSettings;
    internalBinaryWrite(message: PreloadedUserSettings_VoiceAndVideoSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings
 */
export declare const PreloadedUserSettings_VoiceAndVideoSettings: PreloadedUserSettings_VoiceAndVideoSettings$Type;
declare class PreloadedUserSettings_ExplicitContentSettings$Type extends MessageType<PreloadedUserSettings_ExplicitContentSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ExplicitContentSettings>): PreloadedUserSettings_ExplicitContentSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ExplicitContentSettings): PreloadedUserSettings_ExplicitContentSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ExplicitContentSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings
 */
export declare const PreloadedUserSettings_ExplicitContentSettings: PreloadedUserSettings_ExplicitContentSettings$Type;
declare class PreloadedUserSettings_KeywordFilterSettings$Type extends MessageType<PreloadedUserSettings_KeywordFilterSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_KeywordFilterSettings>): PreloadedUserSettings_KeywordFilterSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_KeywordFilterSettings): PreloadedUserSettings_KeywordFilterSettings;
    internalBinaryWrite(message: PreloadedUserSettings_KeywordFilterSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings
 */
export declare const PreloadedUserSettings_KeywordFilterSettings: PreloadedUserSettings_KeywordFilterSettings$Type;
declare class PreloadedUserSettings_GoreContentSettings$Type extends MessageType<PreloadedUserSettings_GoreContentSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GoreContentSettings>): PreloadedUserSettings_GoreContentSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GoreContentSettings): PreloadedUserSettings_GoreContentSettings;
    internalBinaryWrite(message: PreloadedUserSettings_GoreContentSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GoreContentSettings
 */
export declare const PreloadedUserSettings_GoreContentSettings: PreloadedUserSettings_GoreContentSettings$Type;
declare class PreloadedUserSettings_TextAndImagesSettings$Type extends MessageType<PreloadedUserSettings_TextAndImagesSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_TextAndImagesSettings>): PreloadedUserSettings_TextAndImagesSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_TextAndImagesSettings): PreloadedUserSettings_TextAndImagesSettings;
    internalBinaryWrite(message: PreloadedUserSettings_TextAndImagesSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings
 */
export declare const PreloadedUserSettings_TextAndImagesSettings: PreloadedUserSettings_TextAndImagesSettings$Type;
declare class PreloadedUserSettings_NotificationSettings$Type extends MessageType<PreloadedUserSettings_NotificationSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_NotificationSettings>): PreloadedUserSettings_NotificationSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_NotificationSettings): PreloadedUserSettings_NotificationSettings;
    internalBinaryWrite(message: PreloadedUserSettings_NotificationSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings
 */
export declare const PreloadedUserSettings_NotificationSettings: PreloadedUserSettings_NotificationSettings$Type;
declare class PreloadedUserSettings_PrivacySettings$Type extends MessageType<PreloadedUserSettings_PrivacySettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_PrivacySettings>): PreloadedUserSettings_PrivacySettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_PrivacySettings): PreloadedUserSettings_PrivacySettings;
    internalBinaryWrite(message: PreloadedUserSettings_PrivacySettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings
 */
export declare const PreloadedUserSettings_PrivacySettings: PreloadedUserSettings_PrivacySettings$Type;
declare class PreloadedUserSettings_DebugSettings$Type extends MessageType<PreloadedUserSettings_DebugSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_DebugSettings>): PreloadedUserSettings_DebugSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_DebugSettings): PreloadedUserSettings_DebugSettings;
    internalBinaryWrite(message: PreloadedUserSettings_DebugSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings
 */
export declare const PreloadedUserSettings_DebugSettings: PreloadedUserSettings_DebugSettings$Type;
declare class PreloadedUserSettings_GameLibrarySettings$Type extends MessageType<PreloadedUserSettings_GameLibrarySettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GameLibrarySettings>): PreloadedUserSettings_GameLibrarySettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GameLibrarySettings): PreloadedUserSettings_GameLibrarySettings;
    internalBinaryWrite(message: PreloadedUserSettings_GameLibrarySettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings
 */
export declare const PreloadedUserSettings_GameLibrarySettings: PreloadedUserSettings_GameLibrarySettings$Type;
declare class PreloadedUserSettings_CustomStatus$Type extends MessageType<PreloadedUserSettings_CustomStatus> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CustomStatus>): PreloadedUserSettings_CustomStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CustomStatus): PreloadedUserSettings_CustomStatus;
    internalBinaryWrite(message: PreloadedUserSettings_CustomStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus
 */
export declare const PreloadedUserSettings_CustomStatus: PreloadedUserSettings_CustomStatus$Type;
declare class PreloadedUserSettings_StatusSettings$Type extends MessageType<PreloadedUserSettings_StatusSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_StatusSettings>): PreloadedUserSettings_StatusSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_StatusSettings): PreloadedUserSettings_StatusSettings;
    internalBinaryWrite(message: PreloadedUserSettings_StatusSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings
 */
export declare const PreloadedUserSettings_StatusSettings: PreloadedUserSettings_StatusSettings$Type;
declare class PreloadedUserSettings_LocalizationSettings$Type extends MessageType<PreloadedUserSettings_LocalizationSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_LocalizationSettings>): PreloadedUserSettings_LocalizationSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_LocalizationSettings): PreloadedUserSettings_LocalizationSettings;
    internalBinaryWrite(message: PreloadedUserSettings_LocalizationSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings
 */
export declare const PreloadedUserSettings_LocalizationSettings: PreloadedUserSettings_LocalizationSettings$Type;
declare class PreloadedUserSettings_CustomUserThemeSettings$Type extends MessageType<PreloadedUserSettings_CustomUserThemeSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CustomUserThemeSettings>): PreloadedUserSettings_CustomUserThemeSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CustomUserThemeSettings): PreloadedUserSettings_CustomUserThemeSettings;
    internalBinaryWrite(message: PreloadedUserSettings_CustomUserThemeSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomUserThemeSettings
 */
export declare const PreloadedUserSettings_CustomUserThemeSettings: PreloadedUserSettings_CustomUserThemeSettings$Type;
declare class PreloadedUserSettings_ClientThemeSettings$Type extends MessageType<PreloadedUserSettings_ClientThemeSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ClientThemeSettings>): PreloadedUserSettings_ClientThemeSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ClientThemeSettings): PreloadedUserSettings_ClientThemeSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ClientThemeSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings
 */
export declare const PreloadedUserSettings_ClientThemeSettings: PreloadedUserSettings_ClientThemeSettings$Type;
declare class PreloadedUserSettings_AppearanceSettings$Type extends MessageType<PreloadedUserSettings_AppearanceSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AppearanceSettings>): PreloadedUserSettings_AppearanceSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AppearanceSettings): PreloadedUserSettings_AppearanceSettings;
    internalBinaryWrite(message: PreloadedUserSettings_AppearanceSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings
 */
export declare const PreloadedUserSettings_AppearanceSettings: PreloadedUserSettings_AppearanceSettings$Type;
declare class PreloadedUserSettings_GuildFolder$Type extends MessageType<PreloadedUserSettings_GuildFolder> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GuildFolder>): PreloadedUserSettings_GuildFolder;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GuildFolder): PreloadedUserSettings_GuildFolder;
    internalBinaryWrite(message: PreloadedUserSettings_GuildFolder, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder
 */
export declare const PreloadedUserSettings_GuildFolder: PreloadedUserSettings_GuildFolder$Type;
declare class PreloadedUserSettings_GuildFolders$Type extends MessageType<PreloadedUserSettings_GuildFolders> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GuildFolders>): PreloadedUserSettings_GuildFolders;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GuildFolders): PreloadedUserSettings_GuildFolders;
    internalBinaryWrite(message: PreloadedUserSettings_GuildFolders, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders
 */
export declare const PreloadedUserSettings_GuildFolders: PreloadedUserSettings_GuildFolders$Type;
declare class PreloadedUserSettings_FavoriteChannel$Type extends MessageType<PreloadedUserSettings_FavoriteChannel> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_FavoriteChannel>): PreloadedUserSettings_FavoriteChannel;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_FavoriteChannel): PreloadedUserSettings_FavoriteChannel;
    internalBinaryWrite(message: PreloadedUserSettings_FavoriteChannel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel
 */
export declare const PreloadedUserSettings_FavoriteChannel: PreloadedUserSettings_FavoriteChannel$Type;
declare class PreloadedUserSettings_Favorites$Type extends MessageType<PreloadedUserSettings_Favorites> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_Favorites>): PreloadedUserSettings_Favorites;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_Favorites): PreloadedUserSettings_Favorites;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_Favorites, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Favorites
 */
export declare const PreloadedUserSettings_Favorites: PreloadedUserSettings_Favorites$Type;
declare class PreloadedUserSettings_AudioContextSetting$Type extends MessageType<PreloadedUserSettings_AudioContextSetting> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AudioContextSetting>): PreloadedUserSettings_AudioContextSetting;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AudioContextSetting): PreloadedUserSettings_AudioContextSetting;
    internalBinaryWrite(message: PreloadedUserSettings_AudioContextSetting, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting
 */
export declare const PreloadedUserSettings_AudioContextSetting: PreloadedUserSettings_AudioContextSetting$Type;
declare class PreloadedUserSettings_AudioSettings$Type extends MessageType<PreloadedUserSettings_AudioSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AudioSettings>): PreloadedUserSettings_AudioSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AudioSettings): PreloadedUserSettings_AudioSettings;
    private binaryReadMap1;
    private binaryReadMap2;
    internalBinaryWrite(message: PreloadedUserSettings_AudioSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings
 */
export declare const PreloadedUserSettings_AudioSettings: PreloadedUserSettings_AudioSettings$Type;
declare class PreloadedUserSettings_CommunitiesSettings$Type extends MessageType<PreloadedUserSettings_CommunitiesSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CommunitiesSettings>): PreloadedUserSettings_CommunitiesSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CommunitiesSettings): PreloadedUserSettings_CommunitiesSettings;
    internalBinaryWrite(message: PreloadedUserSettings_CommunitiesSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings
 */
export declare const PreloadedUserSettings_CommunitiesSettings: PreloadedUserSettings_CommunitiesSettings$Type;
declare class PreloadedUserSettings_BroadcastSettings$Type extends MessageType<PreloadedUserSettings_BroadcastSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_BroadcastSettings>): PreloadedUserSettings_BroadcastSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_BroadcastSettings): PreloadedUserSettings_BroadcastSettings;
    internalBinaryWrite(message: PreloadedUserSettings_BroadcastSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings
 */
export declare const PreloadedUserSettings_BroadcastSettings: PreloadedUserSettings_BroadcastSettings$Type;
declare class PreloadedUserSettings_ClipsSettings$Type extends MessageType<PreloadedUserSettings_ClipsSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ClipsSettings>): PreloadedUserSettings_ClipsSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ClipsSettings): PreloadedUserSettings_ClipsSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ClipsSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings
 */
export declare const PreloadedUserSettings_ClipsSettings: PreloadedUserSettings_ClipsSettings$Type;
declare class PreloadedUserSettings_ForLaterSettings$Type extends MessageType<PreloadedUserSettings_ForLaterSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ForLaterSettings>): PreloadedUserSettings_ForLaterSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ForLaterSettings): PreloadedUserSettings_ForLaterSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ForLaterSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings
 */
export declare const PreloadedUserSettings_ForLaterSettings: PreloadedUserSettings_ForLaterSettings$Type;
declare class PreloadedUserSettings_SafetySettings$Type extends MessageType<PreloadedUserSettings_SafetySettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_SafetySettings>): PreloadedUserSettings_SafetySettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_SafetySettings): PreloadedUserSettings_SafetySettings;
    internalBinaryWrite(message: PreloadedUserSettings_SafetySettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings
 */
export declare const PreloadedUserSettings_SafetySettings: PreloadedUserSettings_SafetySettings$Type;
declare class PreloadedUserSettings_ICYMISettings$Type extends MessageType<PreloadedUserSettings_ICYMISettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ICYMISettings>): PreloadedUserSettings_ICYMISettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ICYMISettings): PreloadedUserSettings_ICYMISettings;
    internalBinaryWrite(message: PreloadedUserSettings_ICYMISettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings
 */
export declare const PreloadedUserSettings_ICYMISettings: PreloadedUserSettings_ICYMISettings$Type;
declare class PreloadedUserSettings_ApplicationDMSettings$Type extends MessageType<PreloadedUserSettings_ApplicationDMSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ApplicationDMSettings>): PreloadedUserSettings_ApplicationDMSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ApplicationDMSettings): PreloadedUserSettings_ApplicationDMSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ApplicationDMSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationDMSettings
 */
export declare const PreloadedUserSettings_ApplicationDMSettings: PreloadedUserSettings_ApplicationDMSettings$Type;
declare class PreloadedUserSettings_ApplicationSharingSettings$Type extends MessageType<PreloadedUserSettings_ApplicationSharingSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ApplicationSharingSettings>): PreloadedUserSettings_ApplicationSharingSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ApplicationSharingSettings): PreloadedUserSettings_ApplicationSharingSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ApplicationSharingSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationSharingSettings
 */
export declare const PreloadedUserSettings_ApplicationSharingSettings: PreloadedUserSettings_ApplicationSharingSettings$Type;
declare class PreloadedUserSettings_ApplicationSettings$Type extends MessageType<PreloadedUserSettings_ApplicationSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ApplicationSettings>): PreloadedUserSettings_ApplicationSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ApplicationSettings): PreloadedUserSettings_ApplicationSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ApplicationSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ApplicationSettings
 */
export declare const PreloadedUserSettings_ApplicationSettings: PreloadedUserSettings_ApplicationSettings$Type;
declare class PreloadedUserSettings_AllApplicationSettings$Type extends MessageType<PreloadedUserSettings_AllApplicationSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AllApplicationSettings>): PreloadedUserSettings_AllApplicationSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AllApplicationSettings): PreloadedUserSettings_AllApplicationSettings;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_AllApplicationSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AllApplicationSettings
 */
export declare const PreloadedUserSettings_AllApplicationSettings: PreloadedUserSettings_AllApplicationSettings$Type;
declare class PreloadedUserSettings_AdsSettings$Type extends MessageType<PreloadedUserSettings_AdsSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AdsSettings>): PreloadedUserSettings_AdsSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AdsSettings): PreloadedUserSettings_AdsSettings;
    internalBinaryWrite(message: PreloadedUserSettings_AdsSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AdsSettings
 */
export declare const PreloadedUserSettings_AdsSettings: PreloadedUserSettings_AdsSettings$Type;
declare class PreloadedUserSettings_InAppFeedbackState$Type extends MessageType<PreloadedUserSettings_InAppFeedbackState> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_InAppFeedbackState>): PreloadedUserSettings_InAppFeedbackState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_InAppFeedbackState): PreloadedUserSettings_InAppFeedbackState;
    internalBinaryWrite(message: PreloadedUserSettings_InAppFeedbackState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InAppFeedbackState
 */
export declare const PreloadedUserSettings_InAppFeedbackState: PreloadedUserSettings_InAppFeedbackState$Type;
declare class PreloadedUserSettings_InAppFeedbackSettings$Type extends MessageType<PreloadedUserSettings_InAppFeedbackSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_InAppFeedbackSettings>): PreloadedUserSettings_InAppFeedbackSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_InAppFeedbackSettings): PreloadedUserSettings_InAppFeedbackSettings;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_InAppFeedbackSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InAppFeedbackSettings
 */
export declare const PreloadedUserSettings_InAppFeedbackSettings: PreloadedUserSettings_InAppFeedbackSettings$Type;
export {};
