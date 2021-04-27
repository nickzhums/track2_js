import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class representing a ResourceProviderCommon. */
var ResourceProviderCommonImpl = /** @class */ (function () {
    /**
     * Initialize a new instance of the class ResourceProviderCommon class.
     * @param client Reference to the service client
     */
    function ResourceProviderCommonImpl(client) {
        this.client = client;
    }
    /**
     * Get the number of free and paid iot hubs in the subscription
     * @param options The options parameters.
     */
    ResourceProviderCommonImpl.prototype.getSubscriptionQuota = function (options) {
        var operationArguments = {
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getSubscriptionQuotaOperationSpec);
    };
    return ResourceProviderCommonImpl;
}());
export { ResourceProviderCommonImpl };
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var getSubscriptionQuotaOperationSpec = {
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/usages",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.UserSubscriptionQuotaListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host, Parameters.subscriptionId],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
//# sourceMappingURL=resourceProviderCommon.js.map