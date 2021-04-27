import { __awaiter, __extends, __generator } from "tslib";
import { BaseRequestPolicy } from "@azure/core-http";
import { LROSYM } from "./models";
import { getLROData } from "./requestUtils";
export function lroPolicy() {
    return {
        create: function (nextPolicy, options) {
            return new LROPolicy(nextPolicy, options);
        }
    };
}
var LROPolicy = /** @class */ (function (_super) {
    __extends(LROPolicy, _super);
    function LROPolicy(nextPolicy, options) {
        return _super.call(this, nextPolicy, options) || this;
    }
    LROPolicy.prototype.sendRequest = function (webResource) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _lroData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._nextPolicy.sendRequest(webResource)];
                    case 1:
                        result = _a.sent();
                        _lroData = getLROData(result);
                        result[LROSYM] = _lroData;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return LROPolicy;
}(BaseRequestPolicy));
//# sourceMappingURL=lroPolicy.js.map