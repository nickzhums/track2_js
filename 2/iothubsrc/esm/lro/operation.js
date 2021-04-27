import { __assign, __awaiter, __generator } from "tslib";
import { LROSYM } from "./models";
/**
 * Creates a copy of the operation from a given State
 */
export function makeOperation(state) {
    return {
        state: __assign({}, state),
        update: update,
        cancel: cancel,
        toString: function () {
            return JSON.stringify(this.state);
        }
    };
}
/**
 * General update function for LROPoller, the general process is as follows
 * 1. Check initial operation result to determine the strategy to use
 *  - Strategies: Location, Azure-AsyncOperation, Original Uri
 * 2. Check if the operation result has a terminal state
 *  - Terminal state will be determined by each strategy
 *  2.1 If it is terminal state Check if a final GET request is required, if so
 *      send final GET request and return result from operation. If no final GET
 *      is required, just return the result from operation.
 *      - Determining what to call for final request is responsibility of each strategy
 *  2.2 If it is not terminal state, call the polling operation call it and go to step 1
 *      - Determining what to call for polling is responsibility of each strategy
 *      - Strategies will always use the latest URI for polling if provided otherwise
 *        the last known one
 */
function update() {
    return __awaiter(this, void 0, void 0, function () {
        var state, _a, sendFinalRequest, poll, isTerminal, currentResponse, currentLroData, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    state = this.state;
                    _a = state.pollingStrategy, sendFinalRequest = _a.sendFinalRequest, poll = _a.poll, isTerminal = _a.isTerminal;
                    currentResponse = state.lastOperation;
                    currentLroData = currentResponse.result._response[LROSYM];
                    if (!currentLroData) {
                        throw new Error("Expected lroData to be defined for updating LRO operation");
                    }
                    if (!isTerminal()) return [3 /*break*/, 2];
                    _b = state;
                    return [4 /*yield*/, sendFinalRequest()];
                case 1:
                    _b.lastOperation = _d.sent();
                    state.result = state.lastOperation.result;
                    state.isCompleted = true;
                    return [3 /*break*/, 4];
                case 2:
                    _c = state;
                    return [4 /*yield*/, poll()];
                case 3:
                    _c.lastOperation = _d.sent();
                    _d.label = 4;
                case 4: 
                // Return operation
                return [2 /*return*/, makeOperation(state)];
            }
        });
    });
}
/**
 * Swagger doesn't support defining a cancel operation, we'll just mark
 * the operation state as cancelled
 */
function cancel() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, makeOperation(__assign(__assign({}, this.state), { isCancelled: true }))];
        });
    });
}
//# sourceMappingURL=operation.js.map