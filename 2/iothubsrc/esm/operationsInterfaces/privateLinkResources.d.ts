import * as coreHttp from "@azure/core-http";
import { PrivateLinkResourcesListResponse, PrivateLinkResourcesGetResponse } from "../models";
/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
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