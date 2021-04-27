import * as coreHttp from "@azure/core-http";
import { Operations, IotHubResource, ResourceProviderCommon, Certificates, IotHub, PrivateLinkResources, PrivateEndpointConnections } from "./operationsInterfaces";
import { IotHubClientContext } from "./iotHubClientContext";
import { IotHubClientOptionalParams } from "./models";
export declare class IotHubClient extends IotHubClientContext {
    /**
     * Initializes a new instance of the IotHubClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription identifier.
     * @param options The parameter options
     */
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: IotHubClientOptionalParams);
    operations: Operations;
    iotHubResource: IotHubResource;
    resourceProviderCommon: ResourceProviderCommon;
    certificates: Certificates;
    iotHub: IotHub;
    privateLinkResources: PrivateLinkResources;
    privateEndpointConnections: PrivateEndpointConnections;
}
//# sourceMappingURL=iotHubClient.d.ts.map