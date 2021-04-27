import { __asyncDelegator, __asyncGenerator, __asyncValues, __await, __generator, __values } from "tslib";
import "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/// <reference lib="esnext.asynciterable" />
/** Class representing a Operations. */
var OperationsImpl = /** @class */ (function () {
    /**
     * Initialize a new instance of the class Operations class.
     * @param client Reference to the service client
     */
    function OperationsImpl(client) {
        this.client = client;
    }
    /**
     * Lists all of the available IoT Hub REST API operations.
     * @param options The options parameters.
     */
    OperationsImpl.prototype.list = function (options) {
        var _a;
        var _this = this;
        var iter = this.listPagingAll(options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.listPagingPage(options);
            },
            _a;
    };
    OperationsImpl.prototype.listPagingPage = function (options) {
        return __asyncGenerator(this, arguments, function listPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._list(options))];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, __await(result.value || [])];
                    case 2: return [4 /*yield*/, _a.sent()];
                    case 3:
                        _a.sent();
                        continuationToken = result.nextLink;
                        _a.label = 4;
                    case 4:
                        if (!continuationToken) return [3 /*break*/, 8];
                        return [4 /*yield*/, __await(this._listNext(continuationToken, options))];
                    case 5:
                        result = _a.sent();
                        continuationToken = result.nextLink;
                        return [4 /*yield*/, __await(result.value || [])];
                    case 6: return [4 /*yield*/, _a.sent()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    OperationsImpl.prototype.listPagingAll = function (options) {
        return __asyncGenerator(this, arguments, function listPagingAll_1() {
            var _a, _b, page, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.listPagingPage(options));
                        _d.label = 1;
                    case 1: return [4 /*yield*/, __await(_a.next())];
                    case 2:
                        if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                        page = _b.value;
                        return [5 /*yield**/, __values(__asyncDelegator(__asyncValues(page)))];
                    case 3: return [4 /*yield*/, __await.apply(void 0, [_d.sent()])];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _d.trys.push([8, , 11, 12]);
                        if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_c.call(_a))];
                    case 9:
                        _d.sent();
                        _d.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lists all of the available IoT Hub REST API operations.
     * @param options The options parameters.
     */
    OperationsImpl.prototype._list = function (options) {
        var operationArguments = {
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listOperationSpec);
    };
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    OperationsImpl.prototype._listNext = function (nextLink, options) {
        var operationArguments = {
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listNextOperationSpec);
    };
    return OperationsImpl;
}());
export { OperationsImpl };
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var listOperationSpec = {
    path: "/providers/Microsoft.Devices/operations",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.OperationListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var listNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.OperationListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host, Parameters.nextLink],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
//# sourceMappingURL=operations.js.map