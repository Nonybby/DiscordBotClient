import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection
 */
export interface ApplicationUserRoleConnection {
    /**
     * @generated from protobuf field: map<string, string> metadata = 1
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: string platform_name = 2
     */
    platformName: string;
    /**
     * @generated from protobuf field: string platform_username = 3
     */
    platformUsername: string;
    /**
     * @generated from protobuf field: fixed64 version = 4
     */
    version: bigint;
}
declare class ApplicationUserRoleConnection$Type extends MessageType<ApplicationUserRoleConnection> {
    constructor();
    create(value?: PartialMessage<ApplicationUserRoleConnection>): ApplicationUserRoleConnection;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ApplicationUserRoleConnection): ApplicationUserRoleConnection;
    private binaryReadMap1;
    internalBinaryWrite(message: ApplicationUserRoleConnection, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection
 */
export declare const ApplicationUserRoleConnection: ApplicationUserRoleConnection$Type;
export {};
