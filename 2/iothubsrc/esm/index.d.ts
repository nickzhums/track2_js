import * as coreHttp from '@azure/core-http';
import { HttpMethods } from '@azure/core-http';
import { HttpOperationResponse } from '@azure/core-http';
import { OperationArguments } from '@azure/core-http';
import { OperationSpec } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';
import { RestResponse } from '@azure/core-http';

/** Defines values for AccessRights. */
export declare type AccessRights = "RegistryRead" | "RegistryWrite" | "ServiceConnect" | "DeviceConnect" | "RegistryRead, RegistryWrite" | "RegistryRead, ServiceConnect" | "RegistryRead, DeviceConnect" | "RegistryWrite, ServiceConnect" | "RegistryWrite, DeviceConnect" | "ServiceConnect, DeviceConnect" | "RegistryRead, RegistryWrite, ServiceConnect" | "RegistryRead, RegistryWrite, DeviceConnect" | "RegistryRead, ServiceConnect, DeviceConnect" | "RegistryWrite, ServiceConnect, DeviceConnect" | "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect";

export declare interface ArmIdentity {
    /**
     * Principal Id
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * Tenant Id
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. */
    type?: ResourceIdentityType;
    /** Dictionary of <ArmUserIdentity> */
    userAssignedIdentities?: {
        [propertyName: string]: ArmUserIdentity;
    };
}

export declare interface ArmUserIdentity {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly principalId?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly clientId?: string;
}

/**
 * Defines values for AuthenticationType. \
 * {@link KnownAuthenticationType} can be used interchangeably with AuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **keyBased** \
 * **identityBased**
 */
export declare type AuthenticationType = string;

declare interface BaseResult extends RestResponse {
    /**
     * The underlying HTTP response containing both raw and deserialized response data.
     */
    _response: LROOperationResponse;
}

/**
 * Defines values for Capabilities. \
 * {@link KnownCapabilities} can be used interchangeably with Capabilities,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **None** \
 * **DeviceManagement**
 */
export declare type Capabilities = string;

/** The JSON-serialized X509 Certificate. */
export declare interface CertificateBodyDescription {
    /** base-64 representation of the X509 leaf certificate .cer file or just .pem file content. */
    certificate?: string;
}

/** The X509 Certificate. */
export declare interface CertificateDescription {
    /** The description of an X509 CA Certificate. */
    properties?: CertificateProperties;
    /**
     * The resource identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The entity tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/** The JSON-serialized array of Certificate objects. */
export declare interface CertificateListDescription {
    /** The array of Certificate objects. */
    value?: CertificateDescription[];
}

/** The description of an X509 CA Certificate. */
export declare interface CertificateProperties {
    /**
     * The certificate's subject name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subject?: string;
    /**
     * The certificate's expiration date and time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expiry?: Date;
    /**
     * The certificate's thumbprint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
    /**
     * Determines whether certificate has been verified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isVerified?: boolean;
    /**
     * The certificate's create date and time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly created?: Date;
    /**
     * The certificate's last update date and time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly updated?: Date;
    /** The certificate content */
    certificate?: string;
}

/** The description of an X509 CA Certificate including the challenge nonce issued for the Proof-Of-Possession flow. */
export declare interface CertificatePropertiesWithNonce {
    /**
     * The certificate's subject name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subject?: string;
    /**
     * The certificate's expiration date and time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expiry?: Date;
    /**
     * The certificate's thumbprint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
    /**
     * Determines whether certificate has been verified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isVerified?: boolean;
    /**
     * The certificate's create date and time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly created?: Date;
    /**
     * The certificate's last update date and time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly updated?: Date;
    /**
     * The certificate's verification code that will be used for proof of possession.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly verificationCode?: string;
    /**
     * The certificate content
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly certificate?: string;
}

/** Interface representing a Certificates. */
declare interface Certificates {
    /**
     * Returns the list of certificates.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listByIotHub(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<CertificatesListByIotHubResponse>;
    /**
     * Returns the certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param options The options parameters.
     */
    get(resourceGroupName: string, resourceName: string, certificateName: string, options?: coreHttp.OperationOptions): Promise<CertificatesGetResponse>;
    /**
     * Adds new or replaces existing certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param certificateDescription The certificate body.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, resourceName: string, certificateName: string, certificateDescription: CertificateDescription, options?: CertificatesCreateOrUpdateOptionalParams): Promise<CertificatesCreateOrUpdateResponse>;
    /**
     * Deletes an existing X509 certificate or does nothing if it does not exist.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, resourceName: string, certificateName: string, ifMatch: string, options?: coreHttp.OperationOptions): Promise<coreHttp.RestResponse>;
    /**
     * Generates verification code for proof of possession flow. The verification code will be used to
     * generate a leaf certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param options The options parameters.
     */
    generateVerificationCode(resourceGroupName: string, resourceName: string, certificateName: string, ifMatch: string, options?: coreHttp.OperationOptions): Promise<CertificatesGenerateVerificationCodeResponse>;
    /**
     * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying
     * pre uploaded certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param certificateVerificationBody The name of the certificate
     * @param options The options parameters.
     */
    verify(resourceGroupName: string, resourceName: string, certificateName: string, ifMatch: string, certificateVerificationBody: CertificateVerificationDescription, options?: coreHttp.OperationOptions): Promise<CertificatesVerifyResponse>;
}

/** Optional parameters. */
export declare interface CertificatesCreateOrUpdateOptionalParams extends coreHttp.OperationOptions {
    /** ETag of the Certificate. Do not specify for creating a brand new certificate. Required to update an existing certificate. */
    ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type CertificatesCreateOrUpdateResponse = CertificateDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: CertificateDescription;
    };
};

/** Contains response data for the generateVerificationCode operation. */
export declare type CertificatesGenerateVerificationCodeResponse = CertificateWithNonceDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: CertificateWithNonceDescription;
    };
};

/** Contains response data for the get operation. */
export declare type CertificatesGetResponse = CertificateDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: CertificateDescription;
    };
};

/** Contains response data for the listByIotHub operation. */
export declare type CertificatesListByIotHubResponse = CertificateListDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: CertificateListDescription;
    };
};

/** Contains response data for the verify operation. */
export declare type CertificatesVerifyResponse = CertificateDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: CertificateDescription;
    };
};

/** The JSON-serialized leaf certificate */
export declare interface CertificateVerificationDescription {
    /** base-64 representation of X509 certificate .cer file or just .pem file content. */
    certificate?: string;
}

/** The X509 Certificate. */
export declare interface CertificateWithNonceDescription {
    /** The description of an X509 CA Certificate including the challenge nonce issued for the Proof-Of-Possession flow. */
    properties?: CertificatePropertiesWithNonce;
    /**
     * The resource identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The entity tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/** The IoT hub cloud-to-device messaging properties. */
export declare interface CloudToDeviceProperties {
    /** The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    maxDeliveryCount?: number;
    /** The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    defaultTtlAsIso8601?: string;
    /** The properties of the feedback queue for cloud-to-device messages. */
    feedback?: FeedbackProperties;
}

/**
 * Defines values for DefaultAction. \
 * {@link KnownDefaultAction} can be used interchangeably with DefaultAction,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Deny** \
 * **Allow**
 */
export declare type DefaultAction = string;

/** The encryption properties for the IoT hub. */
export declare interface EncryptionPropertiesDescription {
    /** The source of the key. */
    keySource?: string;
    /** The properties of the KeyVault key. */
    keyVaultProperties?: KeyVaultKeyProperties[];
}

/** The health data for an endpoint */
export declare interface EndpointHealthData {
    /** Id of the endpoint */
    endpointId?: string;
    /** Health statuses have following meanings. The 'healthy' status shows that the endpoint is accepting messages as expected. The 'unhealthy' status shows that the endpoint is not accepting messages as expected and IoT Hub is retrying to send data to this endpoint. The status of an unhealthy endpoint will be updated to healthy when IoT Hub has established an eventually consistent state of health. The 'dead' status shows that the endpoint is not accepting messages, after IoT Hub retried sending messages for the retrial period. See IoT Hub metrics to identify errors and monitor issues with endpoints. The 'unknown' status shows that the IoT Hub has not established a connection with the endpoint. No messages have been delivered to or rejected from this endpoint */
    healthStatus?: EndpointHealthStatus;
    /** Last error obtained when a message failed to be delivered to iot hub */
    lastKnownError?: string;
    /** Time at which the last known error occurred */
    lastKnownErrorTime?: Date;
    /** Last time iot hub successfully sent a message to the endpoint */
    lastSuccessfulSendAttemptTime?: Date;
    /** Last time iot hub tried to send a message to the endpoint */
    lastSendAttemptTime?: Date;
}

/** The JSON-serialized array of EndpointHealthData objects with a next link. */
export declare interface EndpointHealthDataListResult {
    /** JSON-serialized array of Endpoint health data */
    value?: EndpointHealthData[];
    /**
     * Link to more results
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for EndpointHealthStatus. \
 * {@link KnownEndpointHealthStatus} can be used interchangeably with EndpointHealthStatus,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **unknown** \
 * **healthy** \
 * **degraded** \
 * **unhealthy** \
 * **dead**
 */
export declare type EndpointHealthStatus = string;

/** The properties of an enrichment that your IoT hub applies to messages delivered to endpoints. */
export declare interface EnrichmentProperties {
    /** The key or name for the enrichment property. */
    key: string;
    /** The value for the enrichment property. */
    value: string;
    /** The list of endpoints for which the enrichment is applied to the message. */
    endpointNames: string[];
}

/** Error details. */
export declare interface ErrorDetails {
    /**
     * The error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: string;
    /**
     * The HTTP status code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly httpStatusCode?: string;
    /**
     * The error message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
    /**
     * The error details.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly details?: string;
}

/** The EventHub consumer group. */
export declare interface EventHubConsumerGroupBodyDescription {
    /** The EventHub consumer group name. */
    properties?: EventHubConsumerGroupName;
}

/** The properties of the EventHubConsumerGroupInfo object. */
export declare interface EventHubConsumerGroupInfo {
    /** The tags. */
    properties?: {
        [propertyName: string]: string;
    };
    /**
     * The Event Hub-compatible consumer group identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The Event Hub-compatible consumer group name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * the resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The etag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
}

/** The EventHub consumer group name. */
export declare interface EventHubConsumerGroupName {
    /** EventHub consumer group name */
    name?: string;
}

/** The JSON-serialized array of Event Hub-compatible consumer group names with a next link. */
export declare interface EventHubConsumerGroupsListResult {
    /** List of consumer groups objects */
    value?: EventHubConsumerGroupInfo[];
    /**
     * The next link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub. */
export declare interface EventHubProperties {
    /** The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages */
    retentionTimeInDays?: number;
    /** The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages. */
    partitionCount?: number;
    /**
     * The partition ids in the Event Hub-compatible endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partitionIds?: string[];
    /**
     * The Event Hub-compatible name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly path?: string;
    /**
     * The Event Hub-compatible endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endpoint?: string;
}

/** Use to provide parameters when requesting an export of all devices in the IoT hub. */
export declare interface ExportDevicesRequest {
    /** The export blob container URI. */
    exportBlobContainerUri: string;
    /** The value indicating whether keys should be excluded during export. */
    excludeKeys: boolean;
    /** The name of the blob that will be created in the provided output blob container. This blob will contain the exported device registry information for the IoT Hub. */
    exportBlobName?: string;
    /** Specifies authentication type being used for connecting to the storage account. */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of storage endpoint for export devices. */
    identity?: ManagedIdentity;
}

/** Use to provide failover region when requesting manual Failover for a hub. */
export declare interface FailoverInput {
    /** Region the hub will be failed over to */
    failoverRegion: string;
}

/** The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint. */
export declare interface FallbackRouteProperties {
    /** The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. */
    name?: string;
    /** The source to which the routing rule is to be applied to. For example, DeviceMessages */
    source: RoutingSource;
    /** The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
    condition?: string;
    /** The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed. */
    endpointNames: string[];
    /** Used to specify whether the fallback route is enabled. */
    isEnabled: boolean;
}

/** The properties of the feedback queue for cloud-to-device messages. */
export declare interface FeedbackProperties {
    /** The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    lockDurationAsIso8601?: string;
    /** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    ttlAsIso8601?: string;
    /** The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    maxDeliveryCount?: number;
}

declare type FinalStateVia = "azure-async-operation" | "location" | "original-uri";

/** The group information for creating a private endpoint on an IotHub */
export declare interface GroupIdInformation {
    /**
     * The resource identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The properties for a group information object */
    properties: GroupIdInformationProperties;
}

/** The properties for a group information object */
export declare interface GroupIdInformationProperties {
    /** The group id */
    groupId?: string;
    /** The required members for a specific group id */
    requiredMembers?: string[];
    /** The required DNS zones for a specific group id */
    requiredZoneNames?: string[];
}

/** Use to provide parameters when requesting an import of all devices in the hub. */
export declare interface ImportDevicesRequest {
    /** The input blob container URI. */
    inputBlobContainerUri: string;
    /** The output blob container URI. */
    outputBlobContainerUri: string;
    /** The blob name to be used when importing from the provided input blob container. */
    inputBlobName?: string;
    /** The blob name to use for storing the status of the import job. */
    outputBlobName?: string;
    /** Specifies authentication type being used for connecting to the storage account. */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of storage endpoint for import devices. */
    identity?: ManagedIdentity;
}

/** Interface representing a IotHub. */
declare interface IotHub {
    /**
     * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see
     * https://aka.ms/manualfailover
     * @param iotHubName Name of the IoT hub to failover
     * @param resourceGroupName Name of the resource group containing the IoT hub resource
     * @param failoverInput Region to failover to. Must be the Azure paired region. Get the value from the
     *                      secondary location in the locations property. To learn more, see
     *                      https://aka.ms/manualfailover/region
     * @param options The options parameters.
     */
    manualFailover(iotHubName: string, resourceGroupName: string, failoverInput: FailoverInput, options?: coreHttp.OperationOptions): Promise<PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>>;
}

/** IoT Hub capacity information. */
export declare interface IotHubCapacity {
    /**
     * The minimum number of units.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minimum?: number;
    /**
     * The maximum number of units.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximum?: number;
    /**
     * The default number of units.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly default?: number;
    /**
     * The type of the scaling enabled.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scaleType?: IotHubScaleType;
}

export declare class IotHubClient extends IotHubClientContext {
    /**
     * Initializes a new instance of the IotHubClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription identifier.
     * @param options The parameter options
     */
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: IotHubClientOptionalParams);
    operations: Operations;
    iotHubResource: IotHubResource;
    resourceProviderCommon: ResourceProviderCommon;
    certificates: Certificates;
    iotHub: IotHub;
    privateLinkResources: PrivateLinkResources_2;
    privateEndpointConnections: PrivateEndpointConnections;
}

export declare class IotHubClientContext extends coreHttp.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the IotHubClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription identifier.
     * @param options The parameter options
     */
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: IotHubClientOptionalParams);
}

/** Optional parameters. */
export declare interface IotHubClientOptionalParams extends coreHttp.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** The description of the IoT hub. */
export declare type IotHubDescription = Resource & {
    /** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
    etag?: string;
    /** IotHub properties */
    properties?: IotHubProperties;
    /** IotHub SKU info */
    sku: IotHubSkuInfo;
    /** The managed identities for the IotHub. */
    identity?: ArmIdentity;
};

/** The JSON-serialized array of IotHubDescription objects with a next link. */
export declare interface IotHubDescriptionListResult {
    /** The array of IotHubDescription objects. */
    value?: IotHubDescription[];
    /**
     * The next link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Public representation of one of the locations where a resource is provisioned. */
export declare interface IotHubLocationDescription {
    /** The name of the Azure region */
    location?: string;
    /** The role of the region, can be either primary or secondary. The primary region is where the IoT hub is currently provisioned. The secondary region is the Azure disaster recovery (DR) paired region and also the region where the IoT hub can failover to. */
    role?: IotHubReplicaRoleType;
}

/** The properties indicating whether a given IoT hub name is available. */
export declare interface IotHubNameAvailabilityInfo {
    /**
     * The value which indicates whether the provided name is available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nameAvailable?: boolean;
    /**
     * The reason for unavailability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reason?: IotHubNameUnavailabilityReason;
    /** The detailed reason message. */
    message?: string;
}

/** Defines values for IotHubNameUnavailabilityReason. */
export declare type IotHubNameUnavailabilityReason = "Invalid" | "AlreadyExists";

/** The properties of an IoT hub. */
export declare interface IotHubProperties {
    /** The shared access policies you can use to secure a connection to the IoT hub. */
    authorizationPolicies?: SharedAccessSignatureAuthorizationRule[];
    /** Whether requests from Public Network are allowed */
    publicNetworkAccess?: PublicNetworkAccess;
    /** The IP filter rules. */
    ipFilterRules?: IpFilterRule[];
    /** Network Rule Set Properties of IotHub */
    networkRuleSets?: NetworkRuleSetProperties;
    /** Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected. */
    minTlsVersion?: string;
    /** Private endpoint connections created on this IotHub */
    privateEndpointConnections?: PrivateEndpointConnection[];
    /**
     * The provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The hub state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /**
     * The name of the host.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostName?: string;
    /** The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub. */
    eventHubEndpoints?: {
        [propertyName: string]: EventHubProperties;
    };
    /** The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging */
    routing?: RoutingProperties;
    /** The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown. */
    storageEndpoints?: {
        [propertyName: string]: StorageEndpointProperties;
    };
    /** The messaging endpoint properties for the file upload notification queue. */
    messagingEndpoints?: {
        [propertyName: string]: MessagingEndpointProperties;
    };
    /** If True, file upload notifications are enabled. */
    enableFileUploadNotifications?: boolean;
    /** The IoT hub cloud-to-device messaging properties. */
    cloudToDevice?: CloudToDeviceProperties;
    /** IoT hub comments. */
    comments?: string;
    /** The device streams properties of iothub. */
    deviceStreams?: IotHubPropertiesDeviceStreams;
    /** The capabilities and features enabled for the IoT hub. */
    features?: Capabilities;
    /** The encryption properties for the IoT hub. */
    encryption?: EncryptionPropertiesDescription;
    /**
     * Primary and secondary location for iot hub
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly locations?: IotHubLocationDescription[];
}

/** The device streams properties of iothub. */
export declare interface IotHubPropertiesDeviceStreams {
    /** List of Device Streams Endpoints. */
    streamingEndpoints?: string[];
}

/** Quota metrics properties. */
export declare interface IotHubQuotaMetricInfo {
    /**
     * The name of the quota metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The current value for the quota metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * The maximum value of the quota metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxValue?: number;
}

/** The JSON-serialized array of IotHubQuotaMetricInfo objects with a next link. */
export declare interface IotHubQuotaMetricInfoListResult {
    /** The array of quota metrics objects. */
    value?: IotHubQuotaMetricInfo[];
    /**
     * The next link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for IotHubReplicaRoleType. \
 * {@link KnownIotHubReplicaRoleType} can be used interchangeably with IotHubReplicaRoleType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **primary** \
 * **secondary**
 */
export declare type IotHubReplicaRoleType = string;

/** Interface representing a IotHubResource. */
declare interface IotHubResource {
    /**
     * Get all the IoT hubs in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubDescription>;
    /**
     * Get all the IoT hubs in a resource group.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubDescription>;
    /**
     * Get the list of valid SKUs for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listValidSkus(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubSkuDescription>;
    /**
     * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
     * hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
     * @param options The options parameters.
     */
    listEventHubConsumerGroups(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<EventHubConsumerGroupInfo>;
    /**
     * Get a list of all the jobs in an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listJobs(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<JobResponse>;
    /**
     * Get the quota metrics for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listQuotaMetrics(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubQuotaMetricInfo>;
    /**
     * Get the health for routing endpoints.
     * @param resourceGroupName
     * @param iotHubName
     * @param options The options parameters.
     */
    listEndpointHealth(resourceGroupName: string, iotHubName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<EndpointHealthData>;
    /**
     * Get the security metadata for an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listKeys(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<SharedAccessSignatureAuthorizationRule>;
    /**
     * Get the non-security related metadata of an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<IotHubResourceGetResponse>;
    /**
     * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve
     * the IoT hub metadata and security metadata, and then combine them with the modified values in a new
     * body to update the IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param iotHubDescription The IoT hub metadata and security metadata.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, resourceName: string, iotHubDescription: IotHubDescription, options?: IotHubResourceCreateOrUpdateOptionalParams): Promise<PollerLike<LROOperationState<IotHubResourceCreateOrUpdateResponse>, IotHubResourceCreateOrUpdateResponse>>;
    /**
     * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
     * @param resourceGroupName Resource group identifier.
     * @param resourceName Name of iot hub to update.
     * @param iotHubTags Updated tag information to set into the iot hub instance.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, resourceName: string, iotHubTags: TagsResource, options?: coreHttp.OperationOptions): Promise<PollerLike<LROOperationState<IotHubResourceUpdateResponse>, IotHubResourceUpdateResponse>>;
    /**
     * Delete an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<PollerLike<LROOperationState<IotHubResourceDeleteResponse>, IotHubResourceDeleteResponse>>;
    /**
     * Get the statistics from an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    getStats(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<IotHubResourceGetStatsResponse>;
    /**
     * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
     * @param name The name of the consumer group to retrieve.
     * @param options The options parameters.
     */
    getEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, options?: coreHttp.OperationOptions): Promise<IotHubResourceGetEventHubConsumerGroupResponse>;
    /**
     * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
     * @param name The name of the consumer group to add.
     * @param consumerGroupBody The consumer group to add.
     * @param options The options parameters.
     */
    createEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, consumerGroupBody: EventHubConsumerGroupBodyDescription, options?: coreHttp.OperationOptions): Promise<IotHubResourceCreateEventHubConsumerGroupResponse>;
    /**
     * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
     * @param name The name of the consumer group to delete.
     * @param options The options parameters.
     */
    deleteEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, options?: coreHttp.OperationOptions): Promise<coreHttp.RestResponse>;
    /**
     * Get the details of a job from an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param jobId The job identifier.
     * @param options The options parameters.
     */
    getJob(resourceGroupName: string, resourceName: string, jobId: string, options?: coreHttp.OperationOptions): Promise<IotHubResourceGetJobResponse>;
    /**
     * Check if an IoT hub name is available.
     * @param operationInputs Set the name parameter in the OperationInputs structure to the name of the
     *                        IoT hub to check.
     * @param options The options parameters.
     */
    checkNameAvailability(operationInputs: OperationInputs, options?: coreHttp.OperationOptions): Promise<IotHubResourceCheckNameAvailabilityResponse>;
    /**
     * Test all routes configured in this Iot Hub
     * @param iotHubName IotHub to be tested
     * @param resourceGroupName resource group which Iot Hub belongs to
     * @param input Input for testing all routes
     * @param options The options parameters.
     */
    testAllRoutes(iotHubName: string, resourceGroupName: string, input: TestAllRoutesInput, options?: coreHttp.OperationOptions): Promise<IotHubResourceTestAllRoutesResponse>;
    /**
     * Test the new route for this Iot Hub
     * @param iotHubName IotHub to be tested
     * @param resourceGroupName resource group which Iot Hub belongs to
     * @param input Route that needs to be tested
     * @param options The options parameters.
     */
    testRoute(iotHubName: string, resourceGroupName: string, input: TestRouteInput, options?: coreHttp.OperationOptions): Promise<IotHubResourceTestRouteResponse>;
    /**
     * Get a shared access policy by name from an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param keyName The name of the shared access policy.
     * @param options The options parameters.
     */
    getKeysForKeyName(resourceGroupName: string, resourceName: string, keyName: string, options?: coreHttp.OperationOptions): Promise<IotHubResourceGetKeysForKeyNameResponse>;
    /**
     * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob
     * container. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param exportDevicesParameters The parameters that specify the export devices operation.
     * @param options The options parameters.
     */
    exportDevices(resourceGroupName: string, resourceName: string, exportDevicesParameters: ExportDevicesRequest, options?: coreHttp.OperationOptions): Promise<IotHubResourceExportDevicesResponse>;
    /**
     * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more
     * information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param importDevicesParameters The parameters that specify the import devices operation.
     * @param options The options parameters.
     */
    importDevices(resourceGroupName: string, resourceName: string, importDevicesParameters: ImportDevicesRequest, options?: coreHttp.OperationOptions): Promise<IotHubResourceImportDevicesResponse>;
}

/** Contains response data for the checkNameAvailability operation. */
export declare type IotHubResourceCheckNameAvailabilityResponse = IotHubNameAvailabilityInfo & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubNameAvailabilityInfo;
    };
};

/** Contains response data for the createEventHubConsumerGroup operation. */
export declare type IotHubResourceCreateEventHubConsumerGroupResponse = EventHubConsumerGroupInfo & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: EventHubConsumerGroupInfo;
    };
};

/** Optional parameters. */
export declare interface IotHubResourceCreateOrUpdateOptionalParams extends coreHttp.OperationOptions {
    /** ETag of the IoT Hub. Do not specify for creating a brand new IoT Hub. Required to update an existing IoT Hub. */
    ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type IotHubResourceCreateOrUpdateResponse = IotHubDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescription;
        /** The parsed HTTP response headers. */
        [LROSYM]: LROResponseInfo;
    };
};

/** Contains response data for the delete operation. */
export declare type IotHubResourceDeleteResponse = IotHubDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescription;
        /** The parsed HTTP response headers. */
        [LROSYM]: LROResponseInfo;
    };
};

/** Contains response data for the exportDevices operation. */
export declare type IotHubResourceExportDevicesResponse = JobResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: JobResponse;
    };
};

/** Contains response data for the getEndpointHealthNext operation. */
export declare type IotHubResourceGetEndpointHealthNextResponse = EndpointHealthDataListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: EndpointHealthDataListResult;
    };
};

/** Contains response data for the getEndpointHealth operation. */
export declare type IotHubResourceGetEndpointHealthResponse = EndpointHealthDataListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: EndpointHealthDataListResult;
    };
};

/** Contains response data for the getEventHubConsumerGroup operation. */
export declare type IotHubResourceGetEventHubConsumerGroupResponse = EventHubConsumerGroupInfo & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: EventHubConsumerGroupInfo;
    };
};

/** Contains response data for the getJob operation. */
export declare type IotHubResourceGetJobResponse = JobResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: JobResponse;
    };
};

/** Contains response data for the getKeysForKeyName operation. */
export declare type IotHubResourceGetKeysForKeyNameResponse = SharedAccessSignatureAuthorizationRule & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: SharedAccessSignatureAuthorizationRule;
    };
};

/** Contains response data for the getQuotaMetricsNext operation. */
export declare type IotHubResourceGetQuotaMetricsNextResponse = IotHubQuotaMetricInfoListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubQuotaMetricInfoListResult;
    };
};

/** Contains response data for the getQuotaMetrics operation. */
export declare type IotHubResourceGetQuotaMetricsResponse = IotHubQuotaMetricInfoListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubQuotaMetricInfoListResult;
    };
};

/** Contains response data for the get operation. */
export declare type IotHubResourceGetResponse = IotHubDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescription;
    };
};

/** Contains response data for the getStats operation. */
export declare type IotHubResourceGetStatsResponse = RegistryStatistics & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: RegistryStatistics;
    };
};

/** Contains response data for the getValidSkusNext operation. */
export declare type IotHubResourceGetValidSkusNextResponse = IotHubSkuDescriptionListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubSkuDescriptionListResult;
    };
};

/** Contains response data for the getValidSkus operation. */
export declare type IotHubResourceGetValidSkusResponse = IotHubSkuDescriptionListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubSkuDescriptionListResult;
    };
};

/** Contains response data for the importDevices operation. */
export declare type IotHubResourceImportDevicesResponse = JobResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: JobResponse;
    };
};

/** Contains response data for the listByResourceGroupNext operation. */
export declare type IotHubResourceListByResourceGroupNextResponse = IotHubDescriptionListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescriptionListResult;
    };
};

/** Contains response data for the listByResourceGroup operation. */
export declare type IotHubResourceListByResourceGroupResponse = IotHubDescriptionListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescriptionListResult;
    };
};

/** Contains response data for the listBySubscriptionNext operation. */
export declare type IotHubResourceListBySubscriptionNextResponse = IotHubDescriptionListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescriptionListResult;
    };
};

/** Contains response data for the listBySubscription operation. */
export declare type IotHubResourceListBySubscriptionResponse = IotHubDescriptionListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescriptionListResult;
    };
};

/** Contains response data for the listEventHubConsumerGroupsNext operation. */
export declare type IotHubResourceListEventHubConsumerGroupsNextResponse = EventHubConsumerGroupsListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: EventHubConsumerGroupsListResult;
    };
};

/** Contains response data for the listEventHubConsumerGroups operation. */
export declare type IotHubResourceListEventHubConsumerGroupsResponse = EventHubConsumerGroupsListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: EventHubConsumerGroupsListResult;
    };
};

/** Contains response data for the listJobsNext operation. */
export declare type IotHubResourceListJobsNextResponse = JobResponseListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: JobResponseListResult;
    };
};

/** Contains response data for the listJobs operation. */
export declare type IotHubResourceListJobsResponse = JobResponseListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: JobResponseListResult;
    };
};

/** Contains response data for the listKeysNext operation. */
export declare type IotHubResourceListKeysNextResponse = SharedAccessSignatureAuthorizationRuleListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: SharedAccessSignatureAuthorizationRuleListResult;
    };
};

/** Contains response data for the listKeys operation. */
export declare type IotHubResourceListKeysResponse = SharedAccessSignatureAuthorizationRuleListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: SharedAccessSignatureAuthorizationRuleListResult;
    };
};

/** Contains response data for the testAllRoutes operation. */
export declare type IotHubResourceTestAllRoutesResponse = TestAllRoutesResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: TestAllRoutesResult;
    };
};

/** Contains response data for the testRoute operation. */
export declare type IotHubResourceTestRouteResponse = TestRouteResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: TestRouteResult;
    };
};

/** Contains response data for the update operation. */
export declare type IotHubResourceUpdateResponse = IotHubDescription & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: IotHubDescription;
        /** The parsed HTTP response headers. */
        [LROSYM]: LROResponseInfo;
    };
};

/** Defines values for IotHubScaleType. */
export declare type IotHubScaleType = "Automatic" | "Manual" | "None";

/**
 * Defines values for IotHubSku. \
 * {@link KnownIotHubSku} can be used interchangeably with IotHubSku,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **F1** \
 * **S1** \
 * **S2** \
 * **S3** \
 * **B1** \
 * **B2** \
 * **B3**
 */
export declare type IotHubSku = string;

/** SKU properties. */
export declare interface IotHubSkuDescription {
    /**
     * The type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceType?: string;
    /** The type of the resource. */
    sku: IotHubSkuInfo;
    /** IotHub capacity */
    capacity: IotHubCapacity;
}

/** The JSON-serialized array of IotHubSkuDescription objects with a next link. */
export declare interface IotHubSkuDescriptionListResult {
    /** The array of IotHubSkuDescription. */
    value?: IotHubSkuDescription[];
    /**
     * The next link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Information about the SKU of the IoT hub. */
export declare interface IotHubSkuInfo {
    /** The name of the SKU. */
    name: IotHubSku;
    /**
     * The billing tier for the IoT hub.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tier?: IotHubSkuTier;
    /** The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits. */
    capacity?: number;
}

/** Defines values for IotHubSkuTier. */
export declare type IotHubSkuTier = "Free" | "Standard" | "Basic";

/** Defines values for IpFilterActionType. */
export declare type IpFilterActionType = "Accept" | "Reject";

/** The IP filter rules for the IoT hub. */
export declare interface IpFilterRule {
    /** The name of the IP filter rule. */
    filterName: string;
    /** The desired action for requests captured by this rule. */
    action: IpFilterActionType;
    /** A string that contains the IP address range in CIDR notation for the rule. */
    ipMask: string;
}

/** The properties of the Job Response object. */
export declare interface JobResponse {
    /**
     * The job identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly jobId?: string;
    /**
     * The start time of the job.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTimeUtc?: Date;
    /**
     * The time the job stopped processing.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTimeUtc?: Date;
    /**
     * The type of the job.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: JobType;
    /**
     * The status of the job.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: JobStatus;
    /**
     * If status == failed, this string containing the reason for the failure.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failureReason?: string;
    /**
     * The status message for the job.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusMessage?: string;
    /**
     * The job identifier of the parent job, if any.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly parentJobId?: string;
}

/** The JSON-serialized array of JobResponse objects with a next link. */
export declare interface JobResponseListResult {
    /** The array of JobResponse objects. */
    value?: JobResponse[];
    /**
     * The next link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for JobStatus. */
export declare type JobStatus = "unknown" | "enqueued" | "running" | "completed" | "failed" | "cancelled";

/**
 * Defines values for JobType. \
 * {@link KnownJobType} can be used interchangeably with JobType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **unknown** \
 * **export** \
 * **import** \
 * **backup** \
 * **readDeviceProperties** \
 * **writeDeviceProperties** \
 * **updateDeviceConfiguration** \
 * **rebootDevice** \
 * **factoryResetDevice** \
 * **firmwareUpdate**
 */
export declare type JobType = string;

/** The properties of the KeyVault key. */
export declare interface KeyVaultKeyProperties {
    /** The identifier of the key. */
    keyIdentifier?: string;
    /** Managed identity properties of KeyVault Key. */
    identity?: ManagedIdentity;
}

/** Known values of {@link AuthenticationType} that the service accepts. */
export declare const enum KnownAuthenticationType {
    KeyBased = "keyBased",
    IdentityBased = "identityBased"
}

/** Known values of {@link Capabilities} that the service accepts. */
export declare const enum KnownCapabilities {
    None = "None",
    DeviceManagement = "DeviceManagement"
}

/** Known values of {@link DefaultAction} that the service accepts. */
export declare const enum KnownDefaultAction {
    Deny = "Deny",
    Allow = "Allow"
}

/** Known values of {@link EndpointHealthStatus} that the service accepts. */
export declare const enum KnownEndpointHealthStatus {
    Unknown = "unknown",
    Healthy = "healthy",
    Degraded = "degraded",
    Unhealthy = "unhealthy",
    Dead = "dead"
}

/** Known values of {@link IotHubReplicaRoleType} that the service accepts. */
export declare const enum KnownIotHubReplicaRoleType {
    Primary = "primary",
    Secondary = "secondary"
}

/** Known values of {@link IotHubSku} that the service accepts. */
export declare const enum KnownIotHubSku {
    F1 = "F1",
    S1 = "S1",
    S2 = "S2",
    S3 = "S3",
    B1 = "B1",
    B2 = "B2",
    B3 = "B3"
}

/** Known values of {@link JobType} that the service accepts. */
export declare const enum KnownJobType {
    Unknown = "unknown",
    Export = "export",
    Import = "import",
    Backup = "backup",
    ReadDeviceProperties = "readDeviceProperties",
    WriteDeviceProperties = "writeDeviceProperties",
    UpdateDeviceConfiguration = "updateDeviceConfiguration",
    RebootDevice = "rebootDevice",
    FactoryResetDevice = "factoryResetDevice",
    FirmwareUpdate = "firmwareUpdate"
}

/** Known values of {@link NetworkRuleIPAction} that the service accepts. */
export declare const enum KnownNetworkRuleIPAction {
    Allow = "Allow"
}

/** Known values of {@link PrivateLinkServiceConnectionStatus} that the service accepts. */
export declare const enum KnownPrivateLinkServiceConnectionStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
    Disconnected = "Disconnected"
}

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export declare const enum KnownPublicNetworkAccess {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link RouteErrorSeverity} that the service accepts. */
export declare const enum KnownRouteErrorSeverity {
    Error = "error",
    Warning = "warning"
}

/** Known values of {@link RoutingSource} that the service accepts. */
export declare const enum KnownRoutingSource {
    Invalid = "Invalid",
    DeviceMessages = "DeviceMessages",
    TwinChangeEvents = "TwinChangeEvents",
    DeviceLifecycleEvents = "DeviceLifecycleEvents",
    DeviceJobLifecycleEvents = "DeviceJobLifecycleEvents",
    DigitalTwinChangeEvents = "DigitalTwinChangeEvents",
    DeviceConnectionStateEvents = "DeviceConnectionStateEvents"
}

/** Known values of {@link RoutingStorageContainerPropertiesEncoding} that the service accepts. */
export declare const enum KnownRoutingStorageContainerPropertiesEncoding {
    Avro = "Avro",
    AvroDeflate = "AvroDeflate",
    Json = "JSON"
}

/** Known values of {@link TestResultStatus} that the service accepts. */
export declare const enum KnownTestResultStatus {
    Undefined = "undefined",
    False = "false",
    True = "true"
}

/**
 * Extended operation response for LROs
 */
declare type LROOperationResponse = HttpOperationResponse & {
    /**
     * Symbol that contains LRO details
     */
    [LROSYM]?: LROResponseInfo;
};

export declare interface LROOperationState<TResult extends BaseResult> extends PollOperationState<TResult> {
    lastOperation: LROOperationStep<TResult>;
    initialOperation: LROOperationStep<TResult>;
    pollingStrategy: LROStrategy<TResult>;
    finalStateVia?: FinalStateVia;
}

declare interface LROOperationStep<TResult extends BaseResult> {
    args: OperationArguments;
    spec: OperationSpec;
    result: TResult;
}

declare interface LROResponseInfo {
    requestMethod: HttpMethods;
    statusCode: number;
    isInitialRequest?: boolean;
    azureAsyncOperation?: string;
    operationLocation?: string;
    location?: string;
    provisioningState?: string;
    status?: string;
}

declare interface LROStrategy<TResult extends BaseResult> {
    isTerminal: () => boolean;
    sendFinalRequest: () => Promise<LROOperationStep<TResult>>;
    poll: () => Promise<LROOperationStep<TResult>>;
}

declare const LROSYM: unique symbol;

/** The properties of the Managed identity. */
export declare interface ManagedIdentity {
    /** The user assigned identity. */
    userAssignedIdentity?: string;
}

/** Routes that matched */
export declare interface MatchedRoute {
    /** Properties of routes that matched */
    properties?: RouteProperties;
}

/** The properties of the messaging endpoints used by this IoT hub. */
export declare interface MessagingEndpointProperties {
    /** The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
    lockDurationAsIso8601?: string;
    /** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
    ttlAsIso8601?: string;
    /** The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
    maxDeliveryCount?: number;
}

/** Name of Iot Hub type */
export declare interface Name {
    /** IotHub type */
    value?: string;
    /** Localized value of name */
    localizedValue?: string;
}

/**
 * Defines values for NetworkRuleIPAction. \
 * {@link KnownNetworkRuleIPAction} can be used interchangeably with NetworkRuleIPAction,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Allow**
 */
export declare type NetworkRuleIPAction = string;

/** IP Rule to be applied as part of Network Rule Set */
export declare interface NetworkRuleSetIpRule {
    /** Name of the IP filter rule. */
    filterName: string;
    /** IP Filter Action */
    action?: NetworkRuleIPAction;
    /** A string that contains the IP address range in CIDR notation for the rule. */
    ipMask: string;
}

/** Network Rule Set Properties of IotHub */
export declare interface NetworkRuleSetProperties {
    /** Default Action for Network Rule Set */
    defaultAction?: DefaultAction;
    /** If True, then Network Rule Set is also applied to BuiltIn EventHub EndPoint of IotHub */
    applyToBuiltInEventHubEndpoint: boolean;
    /** List of IP Rules */
    ipRules: NetworkRuleSetIpRule[];
}

/** IoT Hub REST API operation */
export declare interface Operation {
    /**
     * Operation name: {provider}/{resource}/{read | write | action | delete}
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /**
     * Service provider: Microsoft Devices
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provider?: string;
    /**
     * Resource Type: IotHubs
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resource?: string;
    /**
     * Name of the operation
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * Description of the operation
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
}

/** Input values. */
export declare interface OperationInputs {
    /** The name of the IoT hub to check. */
    name: string;
}

/** Result of the request to list IoT Hub operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /**
     * List of IoT Hub operations supported by the Microsoft.Devices resource provider.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Operation[];
    /**
     * URL to get the next set of operation list results if there are any.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a Operations. */
declare interface Operations {
    /**
     * Lists all of the available IoT Hub REST API operations.
     * @param options The options parameters.
     */
    list(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<Operation>;
}

/** Contains response data for the listNext operation. */
export declare type OperationsListNextResponse = OperationListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: OperationListResult;
    };
};

/** Contains response data for the list operation. */
export declare type OperationsListResponse = OperationListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: OperationListResult;
    };
};

/** The private endpoint property of a private endpoint connection */
export declare interface PrivateEndpoint {
    /**
     * The resource identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

/** The private endpoint connection of an IotHub */
export declare interface PrivateEndpointConnection {
    /**
     * The resource identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The properties of a private endpoint connection */
    properties: PrivateEndpointConnectionProperties;
}

/** The properties of a private endpoint connection */
export declare interface PrivateEndpointConnectionProperties {
    /** The private endpoint property of a private endpoint connection */
    privateEndpoint?: PrivateEndpoint;
    /** The current state of a private endpoint connection */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/** Interface representing a PrivateEndpointConnections. */
declare interface PrivateEndpointConnections {
    /**
     * List private endpoint connection properties
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<PrivateEndpointConnectionsListResponse>;
    /**
     * Get private endpoint connection properties
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param privateEndpointConnectionName The name of the private endpoint connection
     * @param options The options parameters.
     */
    get(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: coreHttp.OperationOptions): Promise<PrivateEndpointConnectionsGetResponse>;
    /**
     * Update the status of a private endpoint connection with the specified name
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param privateEndpointConnectionName The name of the private endpoint connection
     * @param privateEndpointConnection The private endpoint connection with updated properties
     * @param options The options parameters.
     */
    update(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, privateEndpointConnection: PrivateEndpointConnection, options?: coreHttp.OperationOptions): Promise<PollerLike<LROOperationState<PrivateEndpointConnectionsUpdateResponse>, PrivateEndpointConnectionsUpdateResponse>>;
    /**
     * Delete private endpoint connection with the specified name
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param privateEndpointConnectionName The name of the private endpoint connection
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: coreHttp.OperationOptions): Promise<PollerLike<LROOperationState<PrivateEndpointConnectionsDeleteResponse>, PrivateEndpointConnectionsDeleteResponse>>;
}

/** Contains response data for the delete operation. */
export declare type PrivateEndpointConnectionsDeleteResponse = PrivateEndpointConnection & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: PrivateEndpointConnection;
        /** The parsed HTTP response headers. */
        [LROSYM]: LROResponseInfo;
    };
};

/** Contains response data for the get operation. */
export declare type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: PrivateEndpointConnection;
    };
};

/** Contains response data for the list operation. */
export declare type PrivateEndpointConnectionsListResponse = PrivateEndpointConnection[] & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: PrivateEndpointConnection[];
    };
};

/** Contains response data for the update operation. */
export declare type PrivateEndpointConnectionsUpdateResponse = PrivateEndpointConnection & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: PrivateEndpointConnection;
        /** The parsed HTTP response headers. */
        [LROSYM]: LROResponseInfo;
    };
};

/** The available private link resources for an IotHub */
export declare interface PrivateLinkResources {
    /** The list of available private link resources for an IotHub */
    value?: GroupIdInformation[];
}

/** Interface representing a PrivateLinkResources. */
declare interface PrivateLinkResources_2 {
    /**
     * List private link resources for the given IotHub
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<PrivateLinkResourcesListResponse>;
    /**
     * Get the specified private link resource for the given IotHub
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param groupId The name of the private link resource
     * @param options The options parameters.
     */
    get(resourceGroupName: string, resourceName: string, groupId: string, options?: coreHttp.OperationOptions): Promise<PrivateLinkResourcesGetResponse>;
}

/** Contains response data for the get operation. */
export declare type PrivateLinkResourcesGetResponse = GroupIdInformation & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: GroupIdInformation;
    };
};

/** Contains response data for the list operation. */
export declare type PrivateLinkResourcesListResponse = PrivateLinkResources & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: PrivateLinkResources;
    };
};

/** The current state of a private endpoint connection */
export declare interface PrivateLinkServiceConnectionState {
    /** The status of a private endpoint connection */
    status: PrivateLinkServiceConnectionStatus;
    /** The description for the current state of a private endpoint connection */
    description: string;
    /** Actions required for a private endpoint connection */
    actionsRequired?: string;
}

/**
 * Defines values for PrivateLinkServiceConnectionStatus. \
 * {@link KnownPrivateLinkServiceConnectionStatus} can be used interchangeably with PrivateLinkServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export declare type PrivateLinkServiceConnectionStatus = string;

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type PublicNetworkAccess = string;

/** Identity registry statistics. */
export declare interface RegistryStatistics {
    /**
     * The total count of devices in the identity registry.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly totalDeviceCount?: number;
    /**
     * The count of enabled devices in the identity registry.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly enabledDeviceCount?: number;
    /**
     * The count of disabled devices in the identity registry.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly disabledDeviceCount?: number;
}

/** The common properties of an Azure resource. */
export declare interface Resource {
    /**
     * The resource identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The resource location. */
    location: string;
    /** The resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Defines values for ResourceIdentityType. */
export declare type ResourceIdentityType = "SystemAssigned" | "UserAssigned" | "SystemAssigned,UserAssigned" | "None";

/** Interface representing a ResourceProviderCommon. */
declare interface ResourceProviderCommon {
    /**
     * Get the number of free and paid iot hubs in the subscription
     * @param options The options parameters.
     */
    getSubscriptionQuota(options?: coreHttp.OperationOptions): Promise<ResourceProviderCommonGetSubscriptionQuotaResponse>;
}

/** Contains response data for the getSubscriptionQuota operation. */
export declare type ResourceProviderCommonGetSubscriptionQuotaResponse = UserSubscriptionQuotaListResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
        /** The response body as text (string format) */
        bodyAsText: string;
        /** The response body as parsed JSON or XML */
        parsedBody: UserSubscriptionQuotaListResult;
    };
};

/** Compilation error when evaluating route */
export declare interface RouteCompilationError {
    /** Route error message */
    message?: string;
    /** Severity of the route error */
    severity?: RouteErrorSeverity;
    /** Location where the route error happened */
    location?: RouteErrorRange;
}

/** Position where the route error happened */
export declare interface RouteErrorPosition {
    /** Line where the route error happened */
    line?: number;
    /** Column where the route error happened */
    column?: number;
}

/** Range of route errors */
export declare interface RouteErrorRange {
    /** Start where the route error happened */
    start?: RouteErrorPosition;
    /** End where the route error happened */
    end?: RouteErrorPosition;
}

/**
 * Defines values for RouteErrorSeverity. \
 * {@link KnownRouteErrorSeverity} can be used interchangeably with RouteErrorSeverity,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **error** \
 * **warning**
 */
export declare type RouteErrorSeverity = string;

/** The properties of a routing rule that your IoT hub uses to route messages to endpoints. */
export declare interface RouteProperties {
    /** The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. */
    name: string;
    /** The source that the routing rule is to be applied to, such as DeviceMessages. */
    source: RoutingSource;
    /** The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
    condition?: string;
    /** The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed. */
    endpointNames: string[];
    /** Used to specify whether a route is enabled. */
    isEnabled: boolean;
}

/** The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. */
export declare interface RoutingEndpoints {
    /** The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules. */
    serviceBusQueues?: RoutingServiceBusQueueEndpointProperties[];
    /** The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules. */
    serviceBusTopics?: RoutingServiceBusTopicEndpointProperties[];
    /** The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint. */
    eventHubs?: RoutingEventHubProperties[];
    /** The list of storage container endpoints that IoT hub routes messages to, based on the routing rules. */
    storageContainers?: RoutingStorageContainerProperties[];
}

/** The properties related to an event hub endpoint. */
export declare interface RoutingEventHubProperties {
    /** Id of the event hub endpoint */
    id?: string;
    /** The connection string of the event hub endpoint. */
    connectionString?: string;
    /** The url of the event hub endpoint. It must include the protocol sb:// */
    endpointUri?: string;
    /** Event hub name on the event hub namespace */
    entityPath?: string;
    /** Method used to authenticate against the event hub endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing event hub endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. */
    name: string;
    /** The subscription identifier of the event hub endpoint. */
    subscriptionId?: string;
    /** The name of the resource group of the event hub endpoint. */
    resourceGroup?: string;
}

/** Routing message */
export declare interface RoutingMessage {
    /** Body of routing message */
    body?: string;
    /** App properties */
    appProperties?: {
        [propertyName: string]: string;
    };
    /** System properties */
    systemProperties?: {
        [propertyName: string]: string;
    };
}

/** The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging */
export declare interface RoutingProperties {
    /** The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. */
    endpoints?: RoutingEndpoints;
    /** The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs. */
    routes?: RouteProperties[];
    /** The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint. */
    fallbackRoute?: FallbackRouteProperties;
    /** The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid */
    enrichments?: EnrichmentProperties[];
}

/** The properties related to service bus queue endpoint types. */
export declare interface RoutingServiceBusQueueEndpointProperties {
    /** Id of the service bus queue endpoint */
    id?: string;
    /** The connection string of the service bus queue endpoint. */
    connectionString?: string;
    /** The url of the service bus queue endpoint. It must include the protocol sb:// */
    endpointUri?: string;
    /** Queue name on the service bus namespace */
    entityPath?: string;
    /** Method used to authenticate against the service bus queue endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing service bus queue endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name. */
    name: string;
    /** The subscription identifier of the service bus queue endpoint. */
    subscriptionId?: string;
    /** The name of the resource group of the service bus queue endpoint. */
    resourceGroup?: string;
}

/** The properties related to service bus topic endpoint types. */
export declare interface RoutingServiceBusTopicEndpointProperties {
    /** Id of the service bus topic endpoint */
    id?: string;
    /** The connection string of the service bus topic endpoint. */
    connectionString?: string;
    /** The url of the service bus topic endpoint. It must include the protocol sb:// */
    endpointUri?: string;
    /** Queue name on the service bus topic */
    entityPath?: string;
    /** Method used to authenticate against the service bus topic endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing service bus topic endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name. */
    name: string;
    /** The subscription identifier of the service bus topic endpoint. */
    subscriptionId?: string;
    /** The name of the resource group of the service bus topic endpoint. */
    resourceGroup?: string;
}

/**
 * Defines values for RoutingSource. \
 * {@link KnownRoutingSource} can be used interchangeably with RoutingSource,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Invalid** \
 * **DeviceMessages** \
 * **TwinChangeEvents** \
 * **DeviceLifecycleEvents** \
 * **DeviceJobLifecycleEvents** \
 * **DigitalTwinChangeEvents** \
 * **DeviceConnectionStateEvents**
 */
export declare type RoutingSource = string;

/** The properties related to a storage container endpoint. */
export declare interface RoutingStorageContainerProperties {
    /** Id of the storage container endpoint */
    id?: string;
    /** The connection string of the storage account. */
    connectionString?: string;
    /** The url of the storage endpoint. It must include the protocol https:// */
    endpointUri?: string;
    /** Method used to authenticate against the storage endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing storage endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. */
    name: string;
    /** The subscription identifier of the storage account. */
    subscriptionId?: string;
    /** The name of the resource group of the storage account. */
    resourceGroup?: string;
    /** The name of storage container in the storage account. */
    containerName: string;
    /** File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered. */
    fileNameFormat?: string;
    /** Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds. */
    batchFrequencyInSeconds?: number;
    /** Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB). */
    maxChunkSizeInBytes?: number;
    /** Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'. */
    encoding?: RoutingStorageContainerPropertiesEncoding;
}

/**
 * Defines values for RoutingStorageContainerPropertiesEncoding. \
 * {@link KnownRoutingStorageContainerPropertiesEncoding} can be used interchangeably with RoutingStorageContainerPropertiesEncoding,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Avro** \
 * **AvroDeflate** \
 * **JSON**
 */
export declare type RoutingStorageContainerPropertiesEncoding = string;

/** Twin reference input parameter. This is an optional parameter */
export declare interface RoutingTwin {
    /** Twin Tags */
    tags?: any;
    properties?: RoutingTwinProperties;
}

export declare interface RoutingTwinProperties {
    /** Twin desired properties */
    desired?: any;
    /** Twin desired properties */
    reported?: any;
}

/** The properties of an IoT hub shared access policy. */
export declare interface SharedAccessSignatureAuthorizationRule {
    /** The name of the shared access policy. */
    keyName: string;
    /** The primary key. */
    primaryKey?: string;
    /** The secondary key. */
    secondaryKey?: string;
    /** The permissions assigned to the shared access policy. */
    rights: AccessRights;
}

/** The list of shared access policies with a next link. */
export declare interface SharedAccessSignatureAuthorizationRuleListResult {
    /** The list of shared access policies. */
    value?: SharedAccessSignatureAuthorizationRule[];
    /**
     * The next link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The properties of the Azure Storage endpoint for file upload. */
export declare interface StorageEndpointProperties {
    /** The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options. */
    sasTtlAsIso8601?: string;
    /** The connection string for the Azure Storage account to which files are uploaded. */
    connectionString: string;
    /** The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified. */
    containerName: string;
    /** Specifies authentication type being used for connecting to the storage account. */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of storage endpoint for file upload. */
    identity?: ManagedIdentity;
}

/** A container holding only the Tags for a resource, allowing the user to update the tags on an IoT Hub instance. */
export declare interface TagsResource {
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Input for testing all routes */
export declare interface TestAllRoutesInput {
    /** Routing source */
    routingSource?: RoutingSource;
    /** Routing message */
    message?: RoutingMessage;
    /** Routing Twin Reference */
    twin?: RoutingTwin;
}

/** Result of testing all routes */
export declare interface TestAllRoutesResult {
    /** JSON-serialized array of matched routes */
    routes?: MatchedRoute[];
}

/**
 * Defines values for TestResultStatus. \
 * {@link KnownTestResultStatus} can be used interchangeably with TestResultStatus,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **undefined** \
 * **false** \
 * **true**
 */
export declare type TestResultStatus = string;

/** Input for testing route */
export declare interface TestRouteInput {
    /** Routing message */
    message?: RoutingMessage;
    /** Route properties */
    route: RouteProperties;
    /** Routing Twin Reference */
    twin?: RoutingTwin;
}

/** Result of testing one route */
export declare interface TestRouteResult {
    /** Result of testing route */
    result?: TestResultStatus;
    /** Detailed result of testing route */
    details?: TestRouteResultDetails;
}

/** Detailed result of testing a route */
export declare interface TestRouteResultDetails {
    /** JSON-serialized list of route compilation errors */
    compilationErrors?: RouteCompilationError[];
}

/** User subscription quota response */
export declare interface UserSubscriptionQuota {
    /** IotHub type id */
    id?: string;
    /** Response type */
    type?: string;
    /** Unit of IotHub type */
    unit?: string;
    /** Current number of IotHub type */
    currentValue?: number;
    /** Numerical limit on IotHub type */
    limit?: number;
    /** IotHub type */
    name?: Name;
}

/** Json-serialized array of User subscription quota response */
export declare interface UserSubscriptionQuotaListResult {
    value?: UserSubscriptionQuota[];
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly nextLink?: string;
}

export { }
