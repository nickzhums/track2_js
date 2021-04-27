import { ResourceProviderCommon } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import { IotHubClientContext } from "../iotHubClientContext";
import { ResourceProviderCommonGetSubscriptionQuotaResponse } from "../models";
/** Class representing a ResourceProviderCommon. */
export declare class ResourceProviderCommonImpl implements ResourceProviderCommon {
    private readonly client;
    /**
     * Initialize a new instance of the class ResourceProviderCommon class.
     * @param client Reference to the service client
     */
    constructor(client: IotHubClientContext);
    /**
     * Get the number of free and paid iot hubs in the subscription
     * @param options The options parameters.
     */
    getSubscriptionQuota(options?: coreHttp.OperationOptions): Promise<ResourceProviderCommonGetSubscriptionQuotaResponse>;
}
//# sourceMappingURL=resourceProviderCommon.d.ts.map