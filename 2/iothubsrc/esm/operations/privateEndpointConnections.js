import { __assign, __awaiter, __generator } from "tslib";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LROPoller, shouldDeserializeLRO } from "../lro";
/** Class representing a PrivateEndpointConnections. */
var PrivateEndpointConnectionsImpl = /** @class */ (function () {
    /**
     * Initialize a new instance of the class PrivateEndpointConnections class.
     * @param client Reference to the service client
     */
    function PrivateEndpointConnectionsImpl(client) {
        this.client = client;
    }
    /**
     * List private endpoint connection properties
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    PrivateEndpointConnectionsImpl.prototype.list = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listOperationSpec);
    };
    /**
     * Get private endpoint connection properties
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param privateEndpointConnectionName The name of the private endpoint connection
     * @param options The options parameters.
     */
    PrivateEndpointConnectionsImpl.prototype.get = function (resourceGroupName, resourceName, privateEndpointConnectionName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            privateEndpointConnectionName: privateEndpointConnectionName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getOperationSpec);
    };
    /**
     * Update the status of a private endpoint connection with the specified name
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param privateEndpointConnectionName The name of the private endpoint connection
     * @param privateEndpointConnection The private endpoint connection with updated properties
     * @param options The options parameters.
     */
    PrivateEndpointConnectionsImpl.prototype.update = function (resourceGroupName, resourceName, privateEndpointConnectionName, privateEndpointConnection, options) {
        return __awaiter(this, void 0, void 0, function () {
            var operationArguments, sendOperation, initialOperationResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operationArguments = {
                            resourceGroupName: resourceGroupName,
                            resourceName: resourceName,
                            privateEndpointConnectionName: privateEndpointConnectionName,
                            privateEndpointConnection: privateEndpointConnection,
                            options: this.getOperationOptions(options, "undefined")
                        };
                        sendOperation = function (args, spec) {
                            return _this.client.sendOperationRequest(args, spec);
                        };
                        return [4 /*yield*/, sendOperation(operationArguments, updateOperationSpec)];
                    case 1:
                        initialOperationResult = _a.sent();
                        return [2 /*return*/, new LROPoller({
                                initialOperationArguments: operationArguments,
                                initialOperationSpec: updateOperationSpec,
                                initialOperationResult: initialOperationResult,
                                sendOperation: sendOperation
                            })];
                }
            });
        });
    };
    /**
     * Delete private endpoint connection with the specified name
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param privateEndpointConnectionName The name of the private endpoint connection
     * @param options The options parameters.
     */
    PrivateEndpointConnectionsImpl.prototype.delete = function (resourceGroupName, resourceName, privateEndpointConnectionName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var operationArguments, sendOperation, initialOperationResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operationArguments = {
                            resourceGroupName: resourceGroupName,
                            resourceName: resourceName,
                            privateEndpointConnectionName: privateEndpointConnectionName,
                            options: this.getOperationOptions(options, "undefined")
                        };
                        sendOperation = function (args, spec) {
                            return _this.client.sendOperationRequest(args, spec);
                        };
                        return [4 /*yield*/, sendOperation(operationArguments, deleteOperationSpec)];
                    case 1:
                        initialOperationResult = _a.sent();
                        return [2 /*return*/, new LROPoller({
                                initialOperationArguments: operationArguments,
                                initialOperationSpec: deleteOperationSpec,
                                initialOperationResult: initialOperationResult,
                                sendOperation: sendOperation
                            })];
                }
            });
        });
    };
    PrivateEndpointConnectionsImpl.prototype.getOperationOptions = function (options, finalStateVia) {
        var operationOptions = options || {};
        operationOptions.requestOptions = __assign(__assign({}, operationOptions.requestOptions), { shouldDeserialize: shouldDeserializeLRO(finalStateVia) });
        return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
    };
    return PrivateEndpointConnectionsImpl;
}());
export { PrivateEndpointConnectionsImpl };
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var listOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: { name: "Composite", className: "PrivateEndpointConnection" }
                    }
                }
            }
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PrivateEndpointConnection
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
        Parameters.privateEndpointConnectionName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var updateOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.PrivateEndpointConnection
        },
        201: {
            bodyMapper: Mappers.PrivateEndpointConnection
        },
        202: {
            bodyMapper: Mappers.PrivateEndpointConnection
        },
        204: {
            bodyMapper: Mappers.PrivateEndpointConnection
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.privateEndpointConnection,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.privateEndpointConnectionName
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer: serializer
};
var deleteOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: Mappers.PrivateEndpointConnection
        },
        201: {
            bodyMapper: Mappers.PrivateEndpointConnection
        },
        202: {
            bodyMapper: Mappers.PrivateEndpointConnection
        },
        204: {
            bodyMapper: Mappers.PrivateEndpointConnection
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
        Parameters.privateEndpointConnectionName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
//# sourceMappingURL=privateEndpointConnections.js.map