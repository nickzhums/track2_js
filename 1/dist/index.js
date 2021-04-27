"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const iotHubClient_1 = require("iotHubClient");
const identity_1 = require("@azure/identity");
function main() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const subscriptionId = "7fd08dcc-a653-4b0f-8f8c-4dac889fdda4";
        const credential = new identity_1.DefaultAzureCredential();
        const client = iotHubClient_1.default(credential);
        const iothubcreateParameter = {
            body: {
                sku: {
                    name: "S1",
                    capacity: 1,
                },
                location: "centraluseuap",
            },
        };
        const result0 = yield client
            .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}", subscriptionId, "renhework", "renhetest1")
            .put(iothubcreateParameter);
        console.log(result0.body);
        const result = yield client
            .path("/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs", subscriptionId)
            .get();
        if (result.status !== "200") {
            throw result.body;
        }
        console.log("started");
        console.log((_a = result.body.value) === null || _a === void 0 ? void 0 : _a.map((hub) => hub.name).join("\n"));
        const result2 = yield client
            .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs", subscriptionId, "renhework")
            .get();
        if (result2.status !== "200") {
            throw result2.body;
        }
        console.log(result.body.value);
    });
}
main().catch(console.error);
//# sourceMappingURL=index.js.map