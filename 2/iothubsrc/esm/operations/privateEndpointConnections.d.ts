import { PrivateEndpointConnections } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import { IotHubClientContext } from "../iotHubClientContext";
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import { PrivateEndpointConnectionsListResponse, PrivateEndpointConnectionsGetResponse, PrivateEndpointConnection, PrivateEndpointConnectionsUpdateResponse, PrivateEndpointConnectionsDeleteResponse } from "../models";
/** Class representing a PrivateEndpointConnections. */
export declare class PrivateEndpointConnectionsImpl implements PrivateEndpointConnections {
    private readonly client;
    /**
     * Initialize a new instance of the class PrivateEndpointConnections class.
     * @param client Reference to the service client
     */
    constructor(client: IotHubClientContext);
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
    private getOperationOptions;
}
//# sourceMappingURL=privateEndpointConnections.d.ts.map