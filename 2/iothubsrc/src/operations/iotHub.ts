import { IotHub } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { IotHubClientContext } from "../iotHubClientContext";
import { LROPoller, shouldDeserializeLRO, LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import { FailoverInput } from "../models";

/** Class representing a IotHub. */
export class IotHubImpl implements IotHub {
  private readonly client: IotHubClientContext;

  /**
   * Initialize a new instance of the class IotHub class.
   * @param client Reference to the service client
   */
  constructor(client: IotHubClientContext) {
    this.client = client;
  }

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
  async manualFailover(
    iotHubName: string,
    resourceGroupName: string,
    failoverInput: FailoverInput,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      iotHubName,
      resourceGroupName,
      failoverInput,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      manualFailoverOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: manualFailoverOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const manualFailoverOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.failoverInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.iotHubName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
