import { __assign, __asyncDelegator, __asyncGenerator, __asyncValues, __await, __awaiter, __generator, __values } from "tslib";
import "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LROPoller, shouldDeserializeLRO } from "../lro";
/// <reference lib="esnext.asynciterable" />
/** Class representing a IotHubResource. */
var IotHubResourceImpl = /** @class */ (function () {
    /**
     * Initialize a new instance of the class IotHubResource class.
     * @param client Reference to the service client
     */
    function IotHubResourceImpl(client) {
        this.client = client;
    }
    /**
     * Get all the IoT hubs in a subscription.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listBySubscription = function (options) {
        var _a;
        var _this = this;
        var iter = this.listBySubscriptionPagingAll(options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.listBySubscriptionPagingPage(options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.listBySubscriptionPagingPage = function (options) {
        return __asyncGenerator(this, arguments, function listBySubscriptionPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._listBySubscription(options))];
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
                        return [4 /*yield*/, __await(this._listBySubscriptionNext(continuationToken, options))];
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
    IotHubResourceImpl.prototype.listBySubscriptionPagingAll = function (options) {
        return __asyncGenerator(this, arguments, function listBySubscriptionPagingAll_1() {
            var _a, _b, page, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.listBySubscriptionPagingPage(options));
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
     * Get all the IoT hubs in a resource group.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listByResourceGroup = function (resourceGroupName, options) {
        var _a;
        var _this = this;
        var iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.listByResourceGroupPagingPage(resourceGroupName, options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.listByResourceGroupPagingPage = function (resourceGroupName, options) {
        return __asyncGenerator(this, arguments, function listByResourceGroupPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._listByResourceGroup(resourceGroupName, options))];
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
                        return [4 /*yield*/, __await(this._listByResourceGroupNext(resourceGroupName, continuationToken, options))];
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
    IotHubResourceImpl.prototype.listByResourceGroupPagingAll = function (resourceGroupName, options) {
        return __asyncGenerator(this, arguments, function listByResourceGroupPagingAll_1() {
            var _a, _b, page, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.listByResourceGroupPagingPage(resourceGroupName, options));
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
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
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
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the list of valid SKUs for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listValidSkus = function (resourceGroupName, resourceName, options) {
        var _a;
        var _this = this;
        var iter = this.getValidSkusPagingAll(resourceGroupName, resourceName, options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.getValidSkusPagingPage(resourceGroupName, resourceName, options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.getValidSkusPagingPage = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function getValidSkusPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._getValidSkus(resourceGroupName, resourceName, options))];
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
                        return [4 /*yield*/, __await(this._getValidSkusNext(resourceGroupName, resourceName, continuationToken, options))];
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
    IotHubResourceImpl.prototype.getValidSkusPagingAll = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function getValidSkusPagingAll_1() {
            var _a, _b, page, e_3_1;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.getValidSkusPagingPage(resourceGroupName, resourceName, options));
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
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
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
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
     * hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listEventHubConsumerGroups = function (resourceGroupName, resourceName, eventHubEndpointName, options) {
        var _a;
        var _this = this;
        var iter = this.listEventHubConsumerGroupsPagingAll(resourceGroupName, resourceName, eventHubEndpointName, options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.listEventHubConsumerGroupsPagingPage(resourceGroupName, resourceName, eventHubEndpointName, options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.listEventHubConsumerGroupsPagingPage = function (resourceGroupName, resourceName, eventHubEndpointName, options) {
        return __asyncGenerator(this, arguments, function listEventHubConsumerGroupsPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._listEventHubConsumerGroups(resourceGroupName, resourceName, eventHubEndpointName, options))];
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
                        return [4 /*yield*/, __await(this._listEventHubConsumerGroupsNext(resourceGroupName, resourceName, eventHubEndpointName, continuationToken, options))];
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
    IotHubResourceImpl.prototype.listEventHubConsumerGroupsPagingAll = function (resourceGroupName, resourceName, eventHubEndpointName, options) {
        return __asyncGenerator(this, arguments, function listEventHubConsumerGroupsPagingAll_1() {
            var _a, _b, page, e_4_1;
            var e_4, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.listEventHubConsumerGroupsPagingPage(resourceGroupName, resourceName, eventHubEndpointName, options));
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
                        e_4_1 = _d.sent();
                        e_4 = { error: e_4_1 };
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
                        if (e_4) throw e_4.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get a list of all the jobs in an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listJobs = function (resourceGroupName, resourceName, options) {
        var _a;
        var _this = this;
        var iter = this.listJobsPagingAll(resourceGroupName, resourceName, options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.listJobsPagingPage(resourceGroupName, resourceName, options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.listJobsPagingPage = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function listJobsPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._listJobs(resourceGroupName, resourceName, options))];
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
                        return [4 /*yield*/, __await(this._listJobsNext(resourceGroupName, resourceName, continuationToken, options))];
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
    IotHubResourceImpl.prototype.listJobsPagingAll = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function listJobsPagingAll_1() {
            var _a, _b, page, e_5_1;
            var e_5, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.listJobsPagingPage(resourceGroupName, resourceName, options));
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
                        e_5_1 = _d.sent();
                        e_5 = { error: e_5_1 };
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
                        if (e_5) throw e_5.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the quota metrics for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listQuotaMetrics = function (resourceGroupName, resourceName, options) {
        var _a;
        var _this = this;
        var iter = this.getQuotaMetricsPagingAll(resourceGroupName, resourceName, options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.getQuotaMetricsPagingPage(resourceGroupName, resourceName, options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.getQuotaMetricsPagingPage = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function getQuotaMetricsPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._getQuotaMetrics(resourceGroupName, resourceName, options))];
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
                        return [4 /*yield*/, __await(this._getQuotaMetricsNext(resourceGroupName, resourceName, continuationToken, options))];
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
    IotHubResourceImpl.prototype.getQuotaMetricsPagingAll = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function getQuotaMetricsPagingAll_1() {
            var _a, _b, page, e_6_1;
            var e_6, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.getQuotaMetricsPagingPage(resourceGroupName, resourceName, options));
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
                        e_6_1 = _d.sent();
                        e_6 = { error: e_6_1 };
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
                        if (e_6) throw e_6.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the health for routing endpoints.
     * @param resourceGroupName
     * @param iotHubName
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listEndpointHealth = function (resourceGroupName, iotHubName, options) {
        var _a;
        var _this = this;
        var iter = this.getEndpointHealthPagingAll(resourceGroupName, iotHubName, options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.getEndpointHealthPagingPage(resourceGroupName, iotHubName, options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.getEndpointHealthPagingPage = function (resourceGroupName, iotHubName, options) {
        return __asyncGenerator(this, arguments, function getEndpointHealthPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._getEndpointHealth(resourceGroupName, iotHubName, options))];
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
                        return [4 /*yield*/, __await(this._getEndpointHealthNext(resourceGroupName, iotHubName, continuationToken, options))];
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
    IotHubResourceImpl.prototype.getEndpointHealthPagingAll = function (resourceGroupName, iotHubName, options) {
        return __asyncGenerator(this, arguments, function getEndpointHealthPagingAll_1() {
            var _a, _b, page, e_7_1;
            var e_7, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.getEndpointHealthPagingPage(resourceGroupName, iotHubName, options));
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
                        e_7_1 = _d.sent();
                        e_7 = { error: e_7_1 };
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
                        if (e_7) throw e_7.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the security metadata for an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.listKeys = function (resourceGroupName, resourceName, options) {
        var _a;
        var _this = this;
        var iter = this.listKeysPagingAll(resourceGroupName, resourceName, options);
        return _a = {
                next: function () {
                    return iter.next();
                }
            },
            _a[Symbol.asyncIterator] = function () {
                return this;
            },
            _a.byPage = function () {
                return _this.listKeysPagingPage(resourceGroupName, resourceName, options);
            },
            _a;
    };
    IotHubResourceImpl.prototype.listKeysPagingPage = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function listKeysPagingPage_1() {
            var result, continuationToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __await(this._listKeys(resourceGroupName, resourceName, options))];
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
                        return [4 /*yield*/, __await(this._listKeysNext(resourceGroupName, resourceName, continuationToken, options))];
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
    IotHubResourceImpl.prototype.listKeysPagingAll = function (resourceGroupName, resourceName, options) {
        return __asyncGenerator(this, arguments, function listKeysPagingAll_1() {
            var _a, _b, page, e_8_1;
            var e_8, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 13]);
                        _a = __asyncValues(this.listKeysPagingPage(resourceGroupName, resourceName, options));
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
                        e_8_1 = _d.sent();
                        e_8 = { error: e_8_1 };
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
                        if (e_8) throw e_8.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the non-security related metadata of an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.get = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getOperationSpec);
    };
    /**
     * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve
     * the IoT hub metadata and security metadata, and then combine them with the modified values in a new
     * body to update the IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param iotHubDescription The IoT hub metadata and security metadata.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.createOrUpdate = function (resourceGroupName, resourceName, iotHubDescription, options) {
        return __awaiter(this, void 0, void 0, function () {
            var operationArguments, sendOperation, initialOperationResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operationArguments = {
                            resourceGroupName: resourceGroupName,
                            resourceName: resourceName,
                            iotHubDescription: iotHubDescription,
                            options: this.getOperationOptions(options, "undefined")
                        };
                        sendOperation = function (args, spec) {
                            return _this.client.sendOperationRequest(args, spec);
                        };
                        return [4 /*yield*/, sendOperation(operationArguments, createOrUpdateOperationSpec)];
                    case 1:
                        initialOperationResult = _a.sent();
                        return [2 /*return*/, new LROPoller({
                                initialOperationArguments: operationArguments,
                                initialOperationSpec: createOrUpdateOperationSpec,
                                initialOperationResult: initialOperationResult,
                                sendOperation: sendOperation
                            })];
                }
            });
        });
    };
    /**
     * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
     * @param resourceGroupName Resource group identifier.
     * @param resourceName Name of iot hub to update.
     * @param iotHubTags Updated tag information to set into the iot hub instance.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.update = function (resourceGroupName, resourceName, iotHubTags, options) {
        return __awaiter(this, void 0, void 0, function () {
            var operationArguments, sendOperation, initialOperationResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operationArguments = {
                            resourceGroupName: resourceGroupName,
                            resourceName: resourceName,
                            iotHubTags: iotHubTags,
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
     * Delete an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.delete = function (resourceGroupName, resourceName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var operationArguments, sendOperation, initialOperationResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operationArguments = {
                            resourceGroupName: resourceGroupName,
                            resourceName: resourceName,
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
    /**
     * Get all the IoT hubs in a subscription.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listBySubscription = function (options) {
        var operationArguments = {
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listBySubscriptionOperationSpec);
    };
    /**
     * Get all the IoT hubs in a resource group.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listByResourceGroup = function (resourceGroupName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listByResourceGroupOperationSpec);
    };
    /**
     * Get the statistics from an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.getStats = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getStatsOperationSpec);
    };
    /**
     * Get the list of valid SKUs for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._getValidSkus = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getValidSkusOperationSpec);
    };
    /**
     * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
     * hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listEventHubConsumerGroups = function (resourceGroupName, resourceName, eventHubEndpointName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            eventHubEndpointName: eventHubEndpointName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listEventHubConsumerGroupsOperationSpec);
    };
    /**
     * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
     * @param name The name of the consumer group to retrieve.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.getEventHubConsumerGroup = function (resourceGroupName, resourceName, eventHubEndpointName, name, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            eventHubEndpointName: eventHubEndpointName,
            name: name,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getEventHubConsumerGroupOperationSpec);
    };
    /**
     * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
     * @param name The name of the consumer group to add.
     * @param consumerGroupBody The consumer group to add.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.createEventHubConsumerGroup = function (resourceGroupName, resourceName, eventHubEndpointName, name, consumerGroupBody, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            eventHubEndpointName: eventHubEndpointName,
            name: name,
            consumerGroupBody: consumerGroupBody,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, createEventHubConsumerGroupOperationSpec);
    };
    /**
     * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
     * @param name The name of the consumer group to delete.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.deleteEventHubConsumerGroup = function (resourceGroupName, resourceName, eventHubEndpointName, name, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            eventHubEndpointName: eventHubEndpointName,
            name: name,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, deleteEventHubConsumerGroupOperationSpec);
    };
    /**
     * Get a list of all the jobs in an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listJobs = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listJobsOperationSpec);
    };
    /**
     * Get the details of a job from an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param jobId The job identifier.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.getJob = function (resourceGroupName, resourceName, jobId, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            jobId: jobId,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getJobOperationSpec);
    };
    /**
     * Get the quota metrics for an IoT hub.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._getQuotaMetrics = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getQuotaMetricsOperationSpec);
    };
    /**
     * Get the health for routing endpoints.
     * @param resourceGroupName
     * @param iotHubName
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._getEndpointHealth = function (resourceGroupName, iotHubName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            iotHubName: iotHubName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getEndpointHealthOperationSpec);
    };
    /**
     * Check if an IoT hub name is available.
     * @param operationInputs Set the name parameter in the OperationInputs structure to the name of the
     *                        IoT hub to check.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.checkNameAvailability = function (operationInputs, options) {
        var operationArguments = {
            operationInputs: operationInputs,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, checkNameAvailabilityOperationSpec);
    };
    /**
     * Test all routes configured in this Iot Hub
     * @param iotHubName IotHub to be tested
     * @param resourceGroupName resource group which Iot Hub belongs to
     * @param input Input for testing all routes
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.testAllRoutes = function (iotHubName, resourceGroupName, input, options) {
        var operationArguments = {
            iotHubName: iotHubName,
            resourceGroupName: resourceGroupName,
            input: input,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, testAllRoutesOperationSpec);
    };
    /**
     * Test the new route for this Iot Hub
     * @param iotHubName IotHub to be tested
     * @param resourceGroupName resource group which Iot Hub belongs to
     * @param input Route that needs to be tested
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.testRoute = function (iotHubName, resourceGroupName, input, options) {
        var operationArguments = {
            iotHubName: iotHubName,
            resourceGroupName: resourceGroupName,
            input: input,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, testRouteOperationSpec);
    };
    /**
     * Get the security metadata for an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listKeys = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listKeysOperationSpec);
    };
    /**
     * Get a shared access policy by name from an IoT hub. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param keyName The name of the shared access policy.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.getKeysForKeyName = function (resourceGroupName, resourceName, keyName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            keyName: keyName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getKeysForKeyNameOperationSpec);
    };
    /**
     * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob
     * container. For more information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param exportDevicesParameters The parameters that specify the export devices operation.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.exportDevices = function (resourceGroupName, resourceName, exportDevicesParameters, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            exportDevicesParameters: exportDevicesParameters,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, exportDevicesOperationSpec);
    };
    /**
     * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more
     * information, see:
     * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param importDevicesParameters The parameters that specify the import devices operation.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype.importDevices = function (resourceGroupName, resourceName, importDevicesParameters, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            importDevicesParameters: importDevicesParameters,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, importDevicesOperationSpec);
    };
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listBySubscriptionNext = function (nextLink, options) {
        var operationArguments = {
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listBySubscriptionNextOperationSpec);
    };
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listByResourceGroupNext = function (resourceGroupName, nextLink, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listByResourceGroupNextOperationSpec);
    };
    /**
     * GetValidSkusNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the GetValidSkus method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._getValidSkusNext = function (resourceGroupName, resourceName, nextLink, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getValidSkusNextOperationSpec);
    };
    /**
     * ListEventHubConsumerGroupsNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
     * @param nextLink The nextLink from the previous successful call to the ListEventHubConsumerGroups
     *                 method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listEventHubConsumerGroupsNext = function (resourceGroupName, resourceName, eventHubEndpointName, nextLink, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            eventHubEndpointName: eventHubEndpointName,
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listEventHubConsumerGroupsNextOperationSpec);
    };
    /**
     * ListJobsNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the ListJobs method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listJobsNext = function (resourceGroupName, resourceName, nextLink, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listJobsNextOperationSpec);
    };
    /**
     * GetQuotaMetricsNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the GetQuotaMetrics method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._getQuotaMetricsNext = function (resourceGroupName, resourceName, nextLink, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getQuotaMetricsNextOperationSpec);
    };
    /**
     * GetEndpointHealthNext
     * @param resourceGroupName
     * @param iotHubName
     * @param nextLink The nextLink from the previous successful call to the GetEndpointHealth method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._getEndpointHealthNext = function (resourceGroupName, iotHubName, nextLink, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            iotHubName: iotHubName,
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getEndpointHealthNextOperationSpec);
    };
    /**
     * ListKeysNext
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param nextLink The nextLink from the previous successful call to the ListKeys method.
     * @param options The options parameters.
     */
    IotHubResourceImpl.prototype._listKeysNext = function (resourceGroupName, resourceName, nextLink, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            nextLink: nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listKeysNextOperationSpec);
    };
    IotHubResourceImpl.prototype.getOperationOptions = function (options, finalStateVia) {
        var operationOptions = options || {};
        operationOptions.requestOptions = __assign(__assign({}, operationOptions.requestOptions), { shouldDeserialize: shouldDeserializeLRO(finalStateVia) });
        return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
    };
    return IotHubResourceImpl;
}());
export { IotHubResourceImpl };
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var getOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescription
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
var createOrUpdateOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescription
        },
        201: {
            bodyMapper: Mappers.IotHubDescription
        },
        202: {
            bodyMapper: Mappers.IotHubDescription
        },
        204: {
            bodyMapper: Mappers.IotHubDescription
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.iotHubDescription,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [
        Parameters.accept,
        Parameters.contentType,
        Parameters.ifMatch
    ],
    mediaType: "json",
    serializer: serializer
};
var updateOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescription
        },
        201: {
            bodyMapper: Mappers.IotHubDescription
        },
        202: {
            bodyMapper: Mappers.IotHubDescription
        },
        204: {
            bodyMapper: Mappers.IotHubDescription
        }
    },
    requestBody: Parameters.iotHubTags,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer: serializer
};
var deleteOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescription
        },
        201: {
            bodyMapper: Mappers.IotHubDescription
        },
        202: {
            bodyMapper: Mappers.IotHubDescription
        },
        204: {
            bodyMapper: Mappers.IotHubDescription
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
var listBySubscriptionOperationSpec = {
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescriptionListResult
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
var listByResourceGroupOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescriptionListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getStatsOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.RegistryStatistics
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
var getValidSkusOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubSkuDescriptionListResult
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
var listEventHubConsumerGroupsOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.EventHubConsumerGroupsListResult
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
        Parameters.eventHubEndpointName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getEventHubConsumerGroupOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.EventHubConsumerGroupInfo
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
        Parameters.eventHubEndpointName,
        Parameters.name
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var createEventHubConsumerGroupOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.EventHubConsumerGroupInfo
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.consumerGroupBody,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.eventHubEndpointName,
        Parameters.name
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer: serializer
};
var deleteEventHubConsumerGroupOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
    httpMethod: "DELETE",
    responses: {
        200: {},
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
        Parameters.eventHubEndpointName,
        Parameters.name
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var listJobsOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.JobResponseListResult
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
var getJobOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.JobResponse
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
        Parameters.jobId
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getQuotaMetricsOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubQuotaMetricInfoListResult
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
var getEndpointHealthOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routingEndpointsHealth",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.EndpointHealthDataListResult
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
        Parameters.iotHubName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var checkNameAvailabilityOperationSpec = {
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubNameAvailabilityInfo
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.operationInputs,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host, Parameters.subscriptionId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer: serializer
};
var testAllRoutesOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testall",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.TestAllRoutesResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.input,
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
var testRouteOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testnew",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.TestRouteResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.input1,
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
var listKeysOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.SharedAccessSignatureAuthorizationRuleListResult
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
var getKeysForKeyNameOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.SharedAccessSignatureAuthorizationRule
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
        Parameters.keyName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var exportDevicesOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.JobResponse
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.exportDevicesParameters,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer: serializer
};
var importDevicesOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.JobResponse
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.importDevicesParameters,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer: serializer
};
var listBySubscriptionNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescriptionListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var listByResourceGroupNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubDescriptionListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId,
        Parameters.resourceGroupName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getValidSkusNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubSkuDescriptionListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var listEventHubConsumerGroupsNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.EventHubConsumerGroupsListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.eventHubEndpointName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var listJobsNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.JobResponseListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getQuotaMetricsNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.IotHubQuotaMetricInfoListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getEndpointHealthNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.EndpointHealthDataListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.iotHubName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var listKeysNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.SharedAccessSignatureAuthorizationRuleListResult
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.nextLink,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
//# sourceMappingURL=iotHubResource.js.map