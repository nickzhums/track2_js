import * as coreHttp from "@azure/core-http";
import {
  OperationsImpl,
  IotHubResourceImpl,
  ResourceProviderCommonImpl,
  CertificatesImpl,
  IotHubImpl,
  PrivateLinkResourcesImpl,
  PrivateEndpointConnectionsImpl
} from "./operations";
import {
  Operations,
  IotHubResource,
  ResourceProviderCommon,
  Certificates,
  IotHub,
  PrivateLinkResources,
  PrivateEndpointConnections
} from "./operationsInterfaces";
import { IotHubClientContext } from "./iotHubClientContext";
import { IotHubClientOptionalParams } from "./models";

export class IotHubClient extends IotHubClientContext {
  /**
   * Initializes a new instance of the IotHubClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: IotHubClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new OperationsImpl(this);
    this.iotHubResource = new IotHubResourceImpl(this);
    this.resourceProviderCommon = new ResourceProviderCommonImpl(this);
    this.certificates = new CertificatesImpl(this);
    this.iotHub = new IotHubImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
  }

  operations: Operations;
  iotHubResource: IotHubResource;
  resourceProviderCommon: ResourceProviderCommon;
  certificates: Certificates;
  iotHub: IotHub;
  privateLinkResources: PrivateLinkResources;
  privateEndpointConnections: PrivateEndpointConnections;
}
