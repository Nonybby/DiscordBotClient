import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties
 */
export interface PremiumMarketingComponentProperties {
    /**
     * @generated from protobuf field: string content_identifier = 3
     */
    contentIdentifier: string;
    /**
     * @generated from protobuf oneof: properties
     */
    properties: {
        oneofKind: "placeholder";
        /**
         * @generated from protobuf field: string placeholder = 1
         */
        placeholder: string;
    } | {
        oneofKind: "announcementModalVariant1";
        /**
         * @generated from protobuf field: discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties announcement_modal_variant_1 = 2
         */
        announcementModalVariant1: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard
 */
export interface PremiumMarketingComponentProperties_FeatureCard {
    /**
     * @generated from protobuf field: string header = 1
     */
    header: string;
    /**
     * @generated from protobuf field: string pill = 2
     */
    pill: string;
    /**
     * @generated from protobuf field: string body = 3
     */
    body: string;
    /**
     * @generated from protobuf field: string image_link = 4
     */
    imageLink: string;
    /**
     * @generated from protobuf field: string image_link_light_theme = 5
     */
    imageLinkLightTheme: string;
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton
 */
export interface PremiumMarketingComponentProperties_SubscriptionButton {
    /**
     * @generated from protobuf field: string copy = 1
     */
    copy: string;
    /**
     * @generated from protobuf field: discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.ButtonAction button_action = 2
     */
    buttonAction: PremiumMarketingComponentProperties_ButtonAction;
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle
 */
export interface PremiumMarketingComponentProperties_Subtitle {
    /**
     * @generated from protobuf field: string link = 1
     */
    link: string;
    /**
     * @generated from protobuf field: string locale = 2
     */
    locale: string;
    /**
     * @generated from protobuf field: bool is_default = 3
     */
    isDefault: boolean;
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage
 */
export interface PremiumMarketingComponentProperties_Variant1Storage {
    /**
     * @generated from protobuf field: map<string, string> hero_art_localized_video_links_dark_theme = 1
     */
    heroArtLocalizedVideoLinksDarkTheme: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: map<string, string> hero_art_localized_video_links_light_theme = 2
     */
    heroArtLocalizedVideoLinksLightTheme: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: map<string, string> hero_art_video_subtitle_links = 3
     */
    heroArtVideoSubtitleLinks: {
        [key: string]: string;
    };
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties
 */
export interface PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties {
    /**
     * @generated from protobuf field: string header = 1
     */
    header: string;
    /**
     * @generated from protobuf field: string subheader = 2
     */
    subheader: string;
    /**
     * @generated from protobuf field: string video_link = 3
     */
    videoLink: string;
    /**
     * @generated from protobuf field: string help_article_id = 4
     */
    helpArticleId: string;
    /**
     * @generated from protobuf field: repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard feature_cards = 5
     */
    featureCards: PremiumMarketingComponentProperties_FeatureCard[];
    /**
     * @generated from protobuf field: optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton button = 6
     */
    button?: PremiumMarketingComponentProperties_SubscriptionButton;
    /**
     * @generated from protobuf field: string dismiss_key = 7
     */
    dismissKey: string;
    /**
     * @generated from protobuf field: string hero_art_video_link_light_theme = 8
     */
    heroArtVideoLinkLightTheme: string;
    /**
     * @generated from protobuf field: string hero_art_image_link_dark_theme = 9
     */
    heroArtImageLinkDarkTheme: string;
    /**
     * @generated from protobuf field: string hero_art_image_link_light_theme = 10
     */
    heroArtImageLinkLightTheme: string;
    /**
     * @generated from protobuf field: string modal_top_pill = 11
     */
    modalTopPill: string;
    /**
     * @generated from protobuf field: string body = 12
     */
    body: string;
    /**
     * @generated from protobuf field: repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle hero_art_video_subtitles = 13
     */
    heroArtVideoSubtitles: PremiumMarketingComponentProperties_Subtitle[];
    /**
     * @generated from protobuf field: optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage storage = 14
     */
    storage?: PremiumMarketingComponentProperties_Variant1Storage;
}
/**
 * @generated from protobuf enum discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.ButtonAction
 */
export declare enum PremiumMarketingComponentProperties_ButtonAction {
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_MARKETING_PAGE = 1;
     */
    OPEN_MARKETING_PAGE = 1,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_TIER_2_PAYMENT_MODAL = 2;
     */
    OPEN_TIER_2_PAYMENT_MODAL = 2,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_TIER_1_PAYMENT_MODAL = 3;
     */
    OPEN_TIER_1_PAYMENT_MODAL = 3,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4;
     */
    OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4
}
declare class PremiumMarketingComponentProperties$Type extends MessageType<PremiumMarketingComponentProperties> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties>): PremiumMarketingComponentProperties;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties): PremiumMarketingComponentProperties;
    internalBinaryWrite(message: PremiumMarketingComponentProperties, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties
 */
export declare const PremiumMarketingComponentProperties: PremiumMarketingComponentProperties$Type;
declare class PremiumMarketingComponentProperties_FeatureCard$Type extends MessageType<PremiumMarketingComponentProperties_FeatureCard> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_FeatureCard>): PremiumMarketingComponentProperties_FeatureCard;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_FeatureCard): PremiumMarketingComponentProperties_FeatureCard;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_FeatureCard, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard
 */
export declare const PremiumMarketingComponentProperties_FeatureCard: PremiumMarketingComponentProperties_FeatureCard$Type;
declare class PremiumMarketingComponentProperties_SubscriptionButton$Type extends MessageType<PremiumMarketingComponentProperties_SubscriptionButton> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_SubscriptionButton>): PremiumMarketingComponentProperties_SubscriptionButton;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_SubscriptionButton): PremiumMarketingComponentProperties_SubscriptionButton;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_SubscriptionButton, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton
 */
export declare const PremiumMarketingComponentProperties_SubscriptionButton: PremiumMarketingComponentProperties_SubscriptionButton$Type;
declare class PremiumMarketingComponentProperties_Subtitle$Type extends MessageType<PremiumMarketingComponentProperties_Subtitle> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_Subtitle>): PremiumMarketingComponentProperties_Subtitle;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_Subtitle): PremiumMarketingComponentProperties_Subtitle;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_Subtitle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle
 */
export declare const PremiumMarketingComponentProperties_Subtitle: PremiumMarketingComponentProperties_Subtitle$Type;
declare class PremiumMarketingComponentProperties_Variant1Storage$Type extends MessageType<PremiumMarketingComponentProperties_Variant1Storage> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_Variant1Storage>): PremiumMarketingComponentProperties_Variant1Storage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_Variant1Storage): PremiumMarketingComponentProperties_Variant1Storage;
    private binaryReadMap1;
    private binaryReadMap2;
    private binaryReadMap3;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_Variant1Storage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage
 */
export declare const PremiumMarketingComponentProperties_Variant1Storage: PremiumMarketingComponentProperties_Variant1Storage$Type;
declare class PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type extends MessageType<PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties>): PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties): PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties
 */
export declare const PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type;
export {};
