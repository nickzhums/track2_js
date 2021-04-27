import { __awaiter, __generator } from "tslib";
/**
 * Creates a polling strategy based on BodyPolling which uses the provisioning state
 * from the result to determine the current operation state
 */
export function createPassthroughStrategy(initialOperation) {
    var _this = this;
    return {
        isTerminal: function () {
            return true;
        },
        sendFinalRequest: function () {
            // BodyPolling doesn't require a final get so return the lastOperation
            return Promise.resolve(initialOperation);
        },
        poll: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Passthrough strategy should never poll");
            });
        }); }
    };
}
//# sourceMappingURL=passthroughStrategy.js.map