import { __assign, __awaiter, __generator, __rest } from "tslib";
import { LROSYM } from "./models";
import { terminalStates } from "./constants";
/**
 * Creates a polling strategy based on BodyPolling which uses the provisioning state
 * from the result to determine the current operation state
 */
export function createBodyPollingStrategy(initialOperation, sendOperation) {
    var _this = this;
    if (!initialOperation.result._response[LROSYM]) {
        throw new Error("Expected lroData to be defined for BodyPolling strategy");
    }
    var currentOperation = initialOperation;
    return {
        isTerminal: function () {
            var currentResult = currentOperation.result._response[LROSYM];
            if (!currentResult) {
                throw new Error("Expected lroData to determine terminal status");
            }
            var _a = currentResult.provisioningState, provisioningState = _a === void 0 ? "succeeded" : _a;
            // If provisioning state is missing, default to Success
            return terminalStates.includes(provisioningState.toLowerCase());
        },
        sendFinalRequest: function () {
            // BodyPolling doesn't require a final get so return the lastOperation
            return Promise.resolve(currentOperation);
        },
        poll: function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, requestBody, restSpec, pollingSpec, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = initialOperation.spec, requestBody = _a.requestBody, restSpec = __rest(_a, ["requestBody"]);
                        pollingSpec = __assign(__assign({}, restSpec), { httpMethod: "GET" });
                        // Execute the polling operation
                        _b = initialOperation;
                        return [4 /*yield*/, sendOperation(initialOperation.args, pollingSpec)];
                    case 1:
                        // Execute the polling operation
                        _b.result = _c.sent();
                        return [2 /*return*/, initialOperation];
                }
            });
        }); }
    };
}
//# sourceMappingURL=bodyPollingStrategy.js.map