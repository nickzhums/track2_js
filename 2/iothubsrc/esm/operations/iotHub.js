import { __assign, __awaiter, __generator } from "tslib";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LROPoller, shouldDeserializeLRO } from "../lro";
/** Class representing a IotHub. */
var IotHubImpl = /** @class */ (function () {
    /**
     * Initialize a new instance of the class IotHub class.
     * @param client Reference to the service client
     */
    function IotHubImpl(client) {
        this.client = client;
    }
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
    IotHubImpl.prototype.manualFailover = function (iotHubName, resourceGroupName, failoverInput, options) {
        return __awaiter(this, void 0, void 0, function () {
            var operationArguments, sendOperation, initialOperationResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operationArguments = {
                            iotHubName: iotHubName,
                            resourceGroupName: resourceGroupName,
                            failoverInput: failoverInput,
                            options: this.getOperationOptions(options, "undefined")
                        };
                        sendOperation = function (args, spec) {
                            return _this.client.sendOperationRequest(args, spec);
                        };
                        return [4 /*yield*/, sendOperation(operationArguments, manualFailoverOperationSpec)];
                    case 1:
                        initialOperationResult = _a.sent();
                        return [2 /*return*/, new LROPoller({
                                initialOperationArguments: operationArguments,
                                initialOperationSpec: manualFailoverOperationSpec,
                                initialOperationResult: initialOperationResult,
                                sendOperation: sendOperation
                            })];
                }
            });
        });
    };
    IotHubImpl.prototype.getOperationOptions = function (options, finalStateVia) {
        var operationOptions = options || {};
        operationOptions.requestOptions = __assign(__assign({}, operationOptions.requestOptions), { shouldDeserialize: shouldDeserializeLRO(finalStateVia) });
        return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
    };
    return IotHubImpl;
}());
export { IotHubImpl };
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var manualFailoverOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
    httpMethod: "POST",
    responses: {
        200: {},
        201: {},
        202: {},
        204: {},
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.failoverInput,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.iotHubName
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer: serializer
};
//# sourceMappingURL=iotHub.js.map