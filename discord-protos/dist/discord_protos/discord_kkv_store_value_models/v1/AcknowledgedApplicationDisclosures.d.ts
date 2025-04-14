import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * @generated from protobuf message discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures
 */
export interface AcknowledgedApplicationDisclosures {
    /**
     * @generated from protobuf field: repeated discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures.AcknowledgedApplicationDisclosure acked_disclosures = 1;
     */
    ackedDisclosures: AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure[];
}
/**
 * @generated from protobuf message discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures.AcknowledgedApplicationDisclosure
 */
export interface AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure {
    /**
     * @generated from protobuf field: discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures.ApplicationDisclosureType disclosure_type = 1;
     */
    disclosureType: AcknowledgedApplicationDisclosures_ApplicationDisclosureType;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp acked_at = 2;
     */
    ackedAt?: Timestamp;
}
/**
 * @generated from protobuf enum discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures.ApplicationDisclosureType
 */
export declare enum AcknowledgedApplicationDisclosures_ApplicationDisclosureType {
    /**
     * @generated from protobuf enum value: APPLICATION_DISCLOSURE_TYPE_UNSPECIFIED_DISCLOSURE = 0;
     */
    UNSPECIFIED_DISCLOSURE = 0,
    /**
     * @generated from protobuf enum value: APPLICATION_DISCLOSURE_TYPE_IP_LOCATION = 1;
     */
    IP_LOCATION = 1,
    /**
     * @generated from protobuf enum value: APPLICATION_DISCLOSURE_TYPE_DISPLAYS_ADVERTISEMENTS = 2;
     */
    DISPLAYS_ADVERTISEMENTS = 2,
    /**
     * @generated from protobuf enum value: APPLICATION_DISCLOSURE_TYPE_PARTNER_SDK_DATA_SHARING_MESSAGE = 3;
     */
    PARTNER_SDK_DATA_SHARING_MESSAGE = 3
}
declare class AcknowledgedApplicationDisclosures$Type extends MessageType<AcknowledgedApplicationDisclosures> {
    constructor();
    create(value?: PartialMessage<AcknowledgedApplicationDisclosures>): AcknowledgedApplicationDisclosures;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AcknowledgedApplicationDisclosures): AcknowledgedApplicationDisclosures;
    internalBinaryWrite(message: AcknowledgedApplicationDisclosures, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures
 */
export declare const AcknowledgedApplicationDisclosures: AcknowledgedApplicationDisclosures$Type;
declare class AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure$Type extends MessageType<AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure> {
    constructor();
    create(value?: PartialMessage<AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure>): AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure): AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure;
    internalBinaryWrite(message: AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures.AcknowledgedApplicationDisclosure
 */
export declare const AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure: AcknowledgedApplicationDisclosures_AcknowledgedApplicationDisclosure$Type;
export {};
