import { __assign, __awaiter, __generator, __rest } from "tslib";
import { LROSYM } from "./models";
import { terminalStates } from "./constants";
export function createAzureAsyncOperationStrategy(initialOperation, sendOperationFn, finalStateVia) {
    var _this = this;
    var lroData = initialOperation.result._response[LROSYM];
    if (!lroData) {
        throw new Error("Expected lroData to be defined for Azure-AsyncOperation strategy");
    }
    var currentOperation = initialOperation;
    var lastKnownPollingUrl = lroData.azureAsyncOperation || lroData.operationLocation;
    return {
        isTerminal: function () {
            var currentResult = currentOperation.result._response[LROSYM];
            if (!currentResult) {
                throw new Error("Expected lroData to determine terminal status");
            }
            if (currentOperation === initialOperation) {
                // Azure-AsyncOperations don't need to check for terminal state
                // on originalOperation result, always need to poll
                return false;
            }
            var _a = currentResult.status, status = _a === void 0 ? "succeeded" : _a;
            return terminalStates.includes(status.toLowerCase());
        },
        sendFinalRequest: function () { return __awaiter(_this, void 0, void 0, function () {
            var initialOperationResult, currentOperationResult, _a, location_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!initialOperation.result._response[LROSYM]) {
                            throw new Error("Expected lroData to determine terminal status");
                        }
                        if (!currentOperation.result._response[LROSYM]) {
                            throw new Error("Expected lroData to determine terminal status");
                        }
                        initialOperationResult = initialOperation.result._response[LROSYM];
                        currentOperationResult = currentOperation.result._response[LROSYM];
                        if (!shouldPerformFinalGet(initialOperationResult, currentOperationResult)) {
                            return [2 /*return*/, currentOperation];
                        }
                        if (!((initialOperationResult === null || initialOperationResult === void 0 ? void 0 : initialOperationResult.requestMethod) === "PUT")) return [3 /*break*/, 2];
                        return [4 /*yield*/, sendFinalGet(initialOperation, sendOperationFn)];
                    case 1:
                        currentOperation = _b.sent();
                        return [2 /*return*/, currentOperation];
                    case 2:
                        if (!(initialOperationResult === null || initialOperationResult === void 0 ? void 0 : initialOperationResult.location)) return [3 /*break*/, 8];
                        _a = finalStateVia;
                        switch (_a) {
                            case "original-uri": return [3 /*break*/, 3];
                            case "azure-async-operation": return [3 /*break*/, 5];
                            case "location": return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, sendFinalGet(initialOperation, sendOperationFn)];
                    case 4:
                        currentOperation = _b.sent();
                        return [2 /*return*/, currentOperation];
                    case 5: return [2 /*return*/, currentOperation];
                    case 6:
                        location_1 = initialOperationResult.location || (currentOperationResult === null || currentOperationResult === void 0 ? void 0 : currentOperationResult.location);
                        if (!location_1) {
                            throw new Error("Couldn't determine final GET URL from location");
                        }
                        return [4 /*yield*/, sendFinalGet(initialOperation, sendOperationFn, location_1)];
                    case 7: return [2 /*return*/, _b.sent()];
                    case 8: 
                    // All other cases return the last operation
                    return [2 /*return*/, currentOperation];
                }
            });
        }); },
        poll: function () { return __awaiter(_this, void 0, void 0, function () {
            var pollingArgs, _a, requestBody, responses, restSpec, pollingSpec, result;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!lastKnownPollingUrl) {
                            throw new Error("Unable to determine polling url");
                        }
                        pollingArgs = currentOperation.args;
                        _a = currentOperation.spec, requestBody = _a.requestBody, responses = _a.responses, restSpec = __rest(_a, ["requestBody", "responses"]);
                        pollingSpec = __assign(__assign({}, restSpec), { responses: getCompositeMappers(responses), httpMethod: "GET", path: lastKnownPollingUrl });
                        return [4 /*yield*/, sendOperationFn(pollingArgs, pollingSpec)];
                    case 1:
                        result = _d.sent();
                        // Update latest polling url
                        lastKnownPollingUrl =
                            ((_b = result._response[LROSYM]) === null || _b === void 0 ? void 0 : _b.azureAsyncOperation) || ((_c = result._response[LROSYM]) === null || _c === void 0 ? void 0 : _c.operationLocation) ||
                                lastKnownPollingUrl;
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
/**
 * Polling calls will always return a status object i.e. {"status": "success"}
 * these intermediate responses are not described in the swagger so we need to
 * pass custom mappers at runtime.
 * This function replaces all the existing mappers to be able to deserialize a status object
 * @param responses Original set of responses defined in the operation
 */
function getCompositeMappers(responses) {
    return Object.keys(responses).reduce(function (acc, statusCode) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[statusCode] = __assign(__assign({}, responses[statusCode]), { bodyMapper: {
                type: {
                    name: "Composite",
                    modelProperties: {
                        status: {
                            serializedName: "status",
                            type: {
                                name: "String"
                            }
                        }
                    }
                }
            } }), _a));
    }, {});
}
function shouldPerformFinalGet(initialResult, currentResult) {
    var status = (currentResult || {}).status;
    var _a = initialResult || {}, initialRequestMethod = _a.requestMethod, location = _a.location;
    if (status && status.toLowerCase() !== "succeeded") {
        return false;
    }
    if (initialRequestMethod === "DELETE") {
        return false;
    }
    if (initialRequestMethod !== "PUT" && !location) {
        return false;
    }
    return true;
}
function sendFinalGet(initialOperation, sendOperationFn, path) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, requestBody, restSpec, finalGetSpec, spec, operationArgs, finalResult;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = initialOperation.spec, requestBody = _a.requestBody, restSpec = __rest(_a, ["requestBody"]);
                    finalGetSpec = __assign(__assign({}, restSpec), { httpMethod: "GET" });
                    spec = __assign(__assign({}, finalGetSpec), (path && { path: path }));
                    operationArgs = initialOperation.args;
                    if (operationArgs.options) {
                        operationArgs.options.shouldDeserialize = true;
                    }
                    return [4 /*yield*/, sendOperationFn(initialOperation.args, spec)];
                case 1:
                    finalResult = _b.sent();
                    return [2 /*return*/, {
                            args: initialOperation.args,
                            spec: spec,
                            result: finalResult
                        }];
            }
        });
    });
}
//# sourceMappingURL=azureAsyncOperationStrategy.js.map