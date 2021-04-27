import * as coreHttp from "@azure/core-http";
import { IotHubClientOptionalParams } from "./models";
export declare class IotHubClientContext extends coreHttp.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the IotHubClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription identifier.
     * @param options The parameter options
     */
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: IotHubClientOptionalParams);
}
//# sourceMappingURL=iotHubClientContext.d.ts.map