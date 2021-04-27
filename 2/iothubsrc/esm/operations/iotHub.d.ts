import { IotHub } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import { IotHubClientContext } from "../iotHubClientContext";
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import { FailoverInput } from "../models";
/** Class representing a IotHub. */
export declare class IotHubImpl implements IotHub {
    private readonly client;
    /**
     * Initialize a new instance of the class IotHub class.
     * @param client Reference to the service client
     */
    constructor(client: IotHubClientContext);
    /**
     * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see
     * https://aka.ms/manualfailover
     * @param iotHubName Name of the IoT hub to failover
     * @param resourceGroupName Name of the resource group containing the IoT hub resource
     * @param failoverInput Region to failover to. Must be the Azure paired region. Get the value from the
     *                      secondary location in the locations property. To learn more, see
     *                      https://aka.ms/manualfailover/region
     * @param options The options parameters.
     */
    manualFailover(iotHubName: string, resourceGroupName: string, failoverInput: FailoverInput, options?: coreHttp.OperationOptions): Promise<PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>>;
    private getOperationOptions;
}
//# sourceMappingURL=iotHub.d.ts.map