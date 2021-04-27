import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class representing a PrivateLinkResources. */
var PrivateLinkResourcesImpl = /** @class */ (function () {
    /**
     * Initialize a new instance of the class PrivateLinkResources class.
     * @param client Reference to the service client
     */
    function PrivateLinkResourcesImpl(client) {
        this.client = client;
    }
    /**
     * List private link resources for the given IotHub
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    PrivateLinkResourcesImpl.prototype.list = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listOperationSpec);
    };
    /**
     * Get the specified private link resource for the given IotHub
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param groupId The name of the private link resource
     * @param options The options parameters.
     */
    PrivateLinkResourcesImpl.prototype.get = function (resourceGroupName, resourceName, groupId, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            groupId: groupId,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getOperationSpec);
    };
    return PrivateLinkResourcesImpl;
}());
export { PrivateLinkResourcesImpl };
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var listOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PrivateLinkResources
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources/{groupId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.GroupIdInformation
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.groupId
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
//# sourceMappingURL=privateLinkResources.js.map