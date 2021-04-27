import { LROSYM } from "../lro/models";
/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export var KnownPublicNetworkAccess;
(function (KnownPublicNetworkAccess) {
    KnownPublicNetworkAccess["Enabled"] = "Enabled";
    KnownPublicNetworkAccess["Disabled"] = "Disabled";
})(KnownPublicNetworkAccess || (KnownPublicNetworkAccess = {}));
/** Known values of {@link DefaultAction} that the service accepts. */
export var KnownDefaultAction;
(function (KnownDefaultAction) {
    KnownDefaultAction["Deny"] = "Deny";
    KnownDefaultAction["Allow"] = "Allow";
})(KnownDefaultAction || (KnownDefaultAction = {}));
/** Known values of {@link NetworkRuleIPAction} that the service accepts. */
export var KnownNetworkRuleIPAction;
(function (KnownNetworkRuleIPAction) {
    KnownNetworkRuleIPAction["Allow"] = "Allow";
})(KnownNetworkRuleIPAction || (KnownNetworkRuleIPAction = {}));
/** Known values of {@link PrivateLinkServiceConnectionStatus} that the service accepts. */
export var KnownPrivateLinkServiceConnectionStatus;
(function (KnownPrivateLinkServiceConnectionStatus) {
    KnownPrivateLinkServiceConnectionStatus["Pending"] = "Pending";
    KnownPrivateLinkServiceConnectionStatus["Approved"] = "Approved";
    KnownPrivateLinkServiceConnectionStatus["Rejected"] = "Rejected";
    KnownPrivateLinkServiceConnectionStatus["Disconnected"] = "Disconnected";
})(KnownPrivateLinkServiceConnectionStatus || (KnownPrivateLinkServiceConnectionStatus = {}));
/** Known values of {@link AuthenticationType} that the service accepts. */
export var KnownAuthenticationType;
(function (KnownAuthenticationType) {
    KnownAuthenticationType["KeyBased"] = "keyBased";
    KnownAuthenticationType["IdentityBased"] = "identityBased";
})(KnownAuthenticationType || (KnownAuthenticationType = {}));
/** Known values of {@link RoutingStorageContainerPropertiesEncoding} that the service accepts. */
export var KnownRoutingStorageContainerPropertiesEncoding;
(function (KnownRoutingStorageContainerPropertiesEncoding) {
    KnownRoutingStorageContainerPropertiesEncoding["Avro"] = "Avro";
    KnownRoutingStorageContainerPropertiesEncoding["AvroDeflate"] = "AvroDeflate";
    KnownRoutingStorageContainerPropertiesEncoding["Json"] = "JSON";
})(KnownRoutingStorageContainerPropertiesEncoding || (KnownRoutingStorageContainerPropertiesEncoding = {}));
/** Known values of {@link RoutingSource} that the service accepts. */
export var KnownRoutingSource;
(function (KnownRoutingSource) {
    KnownRoutingSource["Invalid"] = "Invalid";
    KnownRoutingSource["DeviceMessages"] = "DeviceMessages";
    KnownRoutingSource["TwinChangeEvents"] = "TwinChangeEvents";
    KnownRoutingSource["DeviceLifecycleEvents"] = "DeviceLifecycleEvents";
    KnownRoutingSource["DeviceJobLifecycleEvents"] = "DeviceJobLifecycleEvents";
    KnownRoutingSource["DigitalTwinChangeEvents"] = "DigitalTwinChangeEvents";
    KnownRoutingSource["DeviceConnectionStateEvents"] = "DeviceConnectionStateEvents";
})(KnownRoutingSource || (KnownRoutingSource = {}));
/** Known values of {@link Capabilities} that the service accepts. */
export var KnownCapabilities;
(function (KnownCapabilities) {
    KnownCapabilities["None"] = "None";
    KnownCapabilities["DeviceManagement"] = "DeviceManagement";
})(KnownCapabilities || (KnownCapabilities = {}));
/** Known values of {@link IotHubReplicaRoleType} that the service accepts. */
export var KnownIotHubReplicaRoleType;
(function (KnownIotHubReplicaRoleType) {
    KnownIotHubReplicaRoleType["Primary"] = "primary";
    KnownIotHubReplicaRoleType["Secondary"] = "secondary";
})(KnownIotHubReplicaRoleType || (KnownIotHubReplicaRoleType = {}));
/** Known values of {@link IotHubSku} that the service accepts. */
export var KnownIotHubSku;
(function (KnownIotHubSku) {
    KnownIotHubSku["F1"] = "F1";
    KnownIotHubSku["S1"] = "S1";
    KnownIotHubSku["S2"] = "S2";
    KnownIotHubSku["S3"] = "S3";
    KnownIotHubSku["B1"] = "B1";
    KnownIotHubSku["B2"] = "B2";
    KnownIotHubSku["B3"] = "B3";
})(KnownIotHubSku || (KnownIotHubSku = {}));
/** Known values of {@link JobType} that the service accepts. */
export var KnownJobType;
(function (KnownJobType) {
    KnownJobType["Unknown"] = "unknown";
    KnownJobType["Export"] = "export";
    KnownJobType["Import"] = "import";
    KnownJobType["Backup"] = "backup";
    KnownJobType["ReadDeviceProperties"] = "readDeviceProperties";
    KnownJobType["WriteDeviceProperties"] = "writeDeviceProperties";
    KnownJobType["UpdateDeviceConfiguration"] = "updateDeviceConfiguration";
    KnownJobType["RebootDevice"] = "rebootDevice";
    KnownJobType["FactoryResetDevice"] = "factoryResetDevice";
    KnownJobType["FirmwareUpdate"] = "firmwareUpdate";
})(KnownJobType || (KnownJobType = {}));
/** Known values of {@link EndpointHealthStatus} that the service accepts. */
export var KnownEndpointHealthStatus;
(function (KnownEndpointHealthStatus) {
    KnownEndpointHealthStatus["Unknown"] = "unknown";
    KnownEndpointHealthStatus["Healthy"] = "healthy";
    KnownEndpointHealthStatus["Degraded"] = "degraded";
    KnownEndpointHealthStatus["Unhealthy"] = "unhealthy";
    KnownEndpointHealthStatus["Dead"] = "dead";
})(KnownEndpointHealthStatus || (KnownEndpointHealthStatus = {}));
/** Known values of {@link TestResultStatus} that the service accepts. */
export var KnownTestResultStatus;
(function (KnownTestResultStatus) {
    KnownTestResultStatus["Undefined"] = "undefined";
    KnownTestResultStatus["False"] = "false";
    KnownTestResultStatus["True"] = "true";
})(KnownTestResultStatus || (KnownTestResultStatus = {}));
/** Known values of {@link RouteErrorSeverity} that the service accepts. */
export var KnownRouteErrorSeverity;
(function (KnownRouteErrorSeverity) {
    KnownRouteErrorSeverity["Error"] = "error";
    KnownRouteErrorSeverity["Warning"] = "warning";
})(KnownRouteErrorSeverity || (KnownRouteErrorSeverity = {}));
//# sourceMappingURL=index.js.map