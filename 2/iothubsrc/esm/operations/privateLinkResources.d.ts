import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import { IotHubClientContext } from "../iotHubClientContext";
import { PrivateLinkResourcesListResponse, PrivateLinkResourcesGetResponse } from "../models";
/** Class representing a PrivateLinkResources. */
export declare class PrivateLinkResourcesImpl implements PrivateLinkResources {
    private readonly client;
    /**
     * Initialize a new instance of the class PrivateLinkResources class.
     * @param client Reference to the service client
     */
    constructor(client: IotHubClientContext);
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
//# sourceMappingURL=privateLinkResources.d.ts.map