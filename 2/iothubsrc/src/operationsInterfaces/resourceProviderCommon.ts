import * as coreHttp from "@azure/core-http";
import { ResourceProviderCommonGetSubscriptionQuotaResponse } from "../models";

/** Interface representing a ResourceProviderCommon. */
export interface ResourceProviderCommon {
  /**
   * Get the number of free and paid iot hubs in the subscription
   * @param options The options parameters.
   */
  getSubscriptionQuota(
    options?: coreHttp.OperationOptions
  ): Promise<ResourceProviderCommonGetSubscriptionQuotaResponse>;
}
