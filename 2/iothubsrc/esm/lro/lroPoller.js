import { __extends } from "tslib";
import { Poller } from "@azure/core-lro";
import { delay, RestError } from "@azure/core-http";
import { LROSYM } from "./models";
import { makeOperation } from "./operation";
import { createBodyPollingStrategy } from "./bodyPollingStrategy";
import { createAzureAsyncOperationStrategy } from "./azureAsyncOperationStrategy";
import { createLocationStrategy } from "./locationStrategy";
import { createPassthroughStrategy } from "./passthroughStrategy";
var LROPoller = /** @class */ (function (_super) {
    __extends(LROPoller, _super);
    function LROPoller(_a) {
        var initialOperationArguments = _a.initialOperationArguments, initialOperationResult = _a.initialOperationResult, initialOperationSpec = _a.initialOperationSpec, sendOperation = _a.sendOperation, finalStateVia = _a.finalStateVia, _b = _a.intervalInMs, intervalInMs = _b === void 0 ? 2000 : _b;
        var _this = this;
        var initialOperation = {
            args: initialOperationArguments,
            spec: initialOperationSpec,
            result: initialOperationResult
        };
        var pollingStrategy = getPollingStrategy(initialOperation, sendOperation, finalStateVia);
        var state = {
            // Initial operation will become the last operation
            initialOperation: initialOperation,
            lastOperation: initialOperation,
            pollingStrategy: pollingStrategy,
            finalStateVia: finalStateVia
        };
        var operation = makeOperation(state);
        _this = _super.call(this, operation) || this;
        _this.intervalInMs = intervalInMs;
        return _this;
    }
    /**
     * The method used by the poller to wait before attempting to update its operation.
     */
    LROPoller.prototype.delay = function () {
        return delay(this.intervalInMs);
    };
    return LROPoller;
}(Poller));
export { LROPoller };
/**
 * This function determines which strategy to use based on the response from
 * the last operation executed, this last operation can be an initial operation
 * or a polling operation. The 3 possible strategies are described below:
 *
 * A) Azure-AsyncOperation or Operation-Location
 * B) Location
 * C) BodyPolling (provisioningState)
 *  - This strategy is used when:
 *    - Response doesn't contain any of the following headers Location, Azure-AsyncOperation or Operation-Location
 *    - Last operation method is PUT
 */
function getPollingStrategy(initialOperation, sendOperationFn, finalStateVia) {
    var lroData = initialOperation.result._response[LROSYM];
    if (!lroData) {
        var error = new RestError("Service response doesn't include the required LRO data to continue polling");
        error.statusCode = initialOperation.result._response.status;
        error.response = initialOperation.result._response;
        throw error;
    }
    if (lroData.azureAsyncOperation || lroData.operationLocation) {
        return createAzureAsyncOperationStrategy(initialOperation, sendOperationFn, finalStateVia);
    }
    if (lroData.location) {
        return createLocationStrategy(initialOperation, sendOperationFn);
    }
    if (["PUT", "PATCH"].includes(lroData.requestMethod || "")) {
        return createBodyPollingStrategy(initialOperation, sendOperationFn);
    }
    // Default strategy is just a passthrough returning the initial operation
    return createPassthroughStrategy(initialOperation);
}
//# sourceMappingURL=lroPoller.js.map