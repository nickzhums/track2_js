import { __assign, __awaiter, __generator, __rest } from "tslib";
import { LROSYM } from "./models";
export function createLocationStrategy(initialOperation, sendOperationFn) {
    var _this = this;
    var lroData = initialOperation.result._response[LROSYM];
    if (!lroData) {
        throw new Error("Expected lroData to be defined for Azure-AsyncOperation strategy");
    }
    var currentOperation = initialOperation;
    var lastKnownPollingUrl = lroData.location;
    return {
        isTerminal: function () {
            var currentResult = currentOperation.result._response[LROSYM];
            if (!currentResult) {
                throw new Error("Expected lroData to determine terminal status");
            }
            if (currentOperation === initialOperation) {
                return false;
            }
            if (currentResult.statusCode === 202) {
                return false;
            }
            return true;
        },
        sendFinalRequest: function () { return Promise.resolve(currentOperation); },
        poll: function () { return __awaiter(_this, void 0, void 0, function () {
            var pollingArgs, _a, requestBody, restSpec, pollingSpec, result;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!lastKnownPollingUrl) {
                            throw new Error("Unable to determine polling url");
                        }
                        pollingArgs = currentOperation.args;
                        _a = currentOperation.spec, requestBody = _a.requestBody, restSpec = __rest(_a, ["requestBody"]);
                        pollingSpec = __assign(__assign({}, restSpec), { httpMethod: "GET", path: lastKnownPollingUrl });
                        return [4 /*yield*/, sendOperationFn(pollingArgs, pollingSpec)];
                    case 1:
                        result = _c.sent();
                        // Update latest polling url
                        lastKnownPollingUrl =
                            ((_b = result._response[LROSYM]) === null || _b === void 0 ? void 0 : _b.location) || lastKnownPollingUrl;
                        // Update lastOperation result
                        currentOperation = {
                            args: pollingArgs,
                            spec: pollingSpec,
                            result: result
                        };
                        return [2 /*return*/, currentOperation];
                }
            });
        }); }
    };
}
//# sourceMappingURL=locationStrategy.js.map