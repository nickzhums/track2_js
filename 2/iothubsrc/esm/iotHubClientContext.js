import { __extends, __spreadArrays } from "tslib";
import * as coreHttp from "@azure/core-http";
import { lroPolicy } from "./lro";
var packageName = "@azure/arm-iothub";
var packageVersion = "1.0.0";
var IotHubClientContext = /** @class */ (function (_super) {
    __extends(IotHubClientContext, _super);
    /**
     * Initializes a new instance of the IotHubClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription identifier.
     * @param options The parameter options
     */
    function IotHubClientContext(credentials, subscriptionId, options) {
        var _this = this;
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        if (subscriptionId === undefined) {
            throw new Error("'subscriptionId' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            var defaultUserAgent = coreHttp.getDefaultUserAgentValue();
            options.userAgent = packageName + "/" + packageVersion + " " + defaultUserAgent;
        }
        // Building the request policy fatories based on the passed factories and the
        // any required factories needed by the client.
        if (Array.isArray(options.requestPolicyFactories)) {
            // When an array of factories is passed in, we'll just add the required factories,
            // in this case lroPolicy(). It is important to note that passing an array of factories
            // to a new client, bypasses core-http default factories. Just the pipelines provided will be run.
            options.requestPolicyFactories = __spreadArrays([
                lroPolicy()
            ], options.requestPolicyFactories);
        }
        else if (options.requestPolicyFactories) {
            // When we were passed a requestPolicyFactories as a function, we'll create a new one that adds the factories provided
            // in the options plus the required policies. When using this path, the pipelines passed to the client will be added to the
            // default policies added by core-http
            var optionsPolicies_1 = options.requestPolicyFactories([lroPolicy()]) || [
                lroPolicy()
            ];
            options.requestPolicyFactories = function (defaultFactories) { return __spreadArrays(optionsPolicies_1, defaultFactories); };
        }
        else {
            // In case no request policy factories were provided, we'll just need to create a function that will add
            // the lroPolicy to the default pipelines added by core-http
            options.requestPolicyFactories = function (defaultFactories) { return __spreadArrays([
                lroPolicy()
            ], defaultFactories); };
        }
        _this = _super.call(this, credentials, options) || this;
        _this.requestContentType = "application/json; charset=utf-8";
        _this.baseUri = options.endpoint || "https://management.azure.com";
        // Parameter assignments
        _this.subscriptionId = subscriptionId;
        // Assigning values to Constant parameters
        _this.$host = options.$host || "https://management.azure.com";
        _this.apiVersion = options.apiVersion || "2021-03-03-preview";
        return _this;
    }
    return IotHubClientContext;
}(coreHttp.ServiceClient));
export { IotHubClientContext };
//# sourceMappingURL=iotHubClientContext.js.map