import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IotHubResource } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import { IotHubClientContext } from "../iotHubClientContext";
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import { IotHubDescription, IotHubSkuDescription, EventHubConsumerGroupInfo, JobResponse, IotHubQuotaMetricInfo, EndpointHealthData, SharedAccessSignatureAuthorizationRule, IotHubResourceGetResponse, IotHubResourceCreateOrUpdateOptionalParams, IotHubResourceCreateOrUpdateResponse, TagsResource, IotHubResourceUpdateResponse, IotHubResourceDeleteResponse, IotHubResourceGetStatsResponse, IotHubResourceGetEventHubConsumerGroupResponse, EventHubConsumerGroupBodyDescription, IotHubResourceCreateEventHubConsumerGroupResponse, IotHubResourceGetJobResponse, OperationInputs, IotHubResourceCheckNameAvailabilityResponse, TestAllRoutesInput, IotHubResourceTestAllRoutesResponse, TestRouteInput, IotHubResourceTestRouteResponse, IotHubResourceGetKeysForKeyNameResponse, ExportDevicesRequest, IotHubResourceExportDevicesResponse, ImportDevicesRequest, IotHubResourceImportDevicesResponse } from "../models";
/** Class representing a IotHubResource. */
export declare class IotHubResourceImpl implements IotHubResource {
    private readonly client;
    /**
     * Initialize a new instance of the class IotHubResource class.
     * @param client Reference to the service client
     */
    constructor(client: IotHubClientContext);
    /**
     * Get all the IoT hubs in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubDescription>;
    private listBySubscriptionPagingPage;
    private listBySubscriptionPagingAll;
    /**
     * Get all the IoT hubs in a resource group.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubDescription>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Get the list of valid SKUs for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listValidSkus(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubSkuDescription>;
    private getValidSkusPagingPage;
    private getValidSkusPagingAll;
    /**
     * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
     * hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
     * @param options The options parameters.
     */
    listEventHubConsumerGroups(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<EventHubConsumerGroupInfo>;
    private listEventHubConsumerGroupsPagingPage;
    private listEventHubConsumerGroupsPagingAll;
    /**
     * Get a list of all the jobs in an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listJobs(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<JobResponse>;
    private listJobsPagingPage;
    private listJobsPagingAll;
    /**
     * Get the quota metrics for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listQuotaMetrics(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<IotHubQuotaMetricInfo>;
    private getQuotaMetricsPagingPage;
    private getQuotaMetricsPagingAll;
    /**
     * Get the health for routing endpoints.
     * @param resourceGroupName
     * @param iotHubName
     * @param options The options parameters.
     */
    listEndpointHealth(resourceGroupName: string, iotHubName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<EndpointHealthData>;
    private getEndpointHealthPagingPage;
    private getEndpointHealthPagingAll;
    /**
     * Get the security metadata for an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listKeys(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<SharedAccessSignatureAuthorizationRule>;
    private listKeysPagingPage;
    private listKeysPagingAll;
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
     * Get all the IoT hubs in a subscription.
     * @param options The options parameters.
     */
    private _listBySubscription;
    /**
     * Get all the IoT hubs in a resource group.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Get the statistics from an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    getStats(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<IotHubResourceGetStatsResponse>;
    /**
     * Get the list of valid SKUs for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    private _getValidSkus;
    /**
     * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
     * hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
     * @param options The options parameters.
     */
    private _listEventHubConsumerGroups;
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
     * Get a list of all the jobs in an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    private _listJobs;
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
     * Get the quota metrics for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    private _getQuotaMetrics;
    /**
     * Get the health for routing endpoints.
     * @param resourceGroupName
     * @param iotHubName
     * @param options The options parameters.
     */
    private _getEndpointHealth;
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
     * Get the security metadata for an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    private _listKeys;
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
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    private _listBySubscriptionNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * GetValidSkusNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the GetValidSkus method.
     * @param options The options parameters.
     */
    private _getValidSkusNext;
    /**
     * ListEventHubConsumerGroupsNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
     * @param nextLink The nextLink from the previous successful call to the ListEventHubConsumerGroups
     *                 method.
     * @param options The options parameters.
     */
    private _listEventHubConsumerGroupsNext;
    /**
     * ListJobsNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the ListJobs method.
     * @param options The options parameters.
     */
    private _listJobsNext;
    /**
     * GetQuotaMetricsNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the GetQuotaMetrics method.
     * @param options The options parameters.
     */
    private _getQuotaMetricsNext;
    /**
     * GetEndpointHealthNext
     * @param resourceGroupName
     * @param iotHubName
     * @param nextLink The nextLink from the previous successful call to the GetEndpointHealth method.
     * @param options The options parameters.
     */
    private _getEndpointHealthNext;
    /**
     * ListKeysNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the ListKeys method.
     * @param options The options parameters.
     */
    private _listKeysNext;
    private getOperationOptions;
}
//# sourceMappingURL=iotHubResource.d.ts.map