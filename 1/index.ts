import IoTHub, {
  IotHubResourceCreateOrUpdateBodyParam,
  IotHubResourceCreateOrUpdate200Response,
  IotHubResourceCreateOrUpdate201Response,
  IotHubResourceCreateOrUpdatedefaultResponse,
} from "iotHubClient";
import { DefaultAzureCredential } from "@azure/identity";

async function main() {
  const subscriptionId = "7fd08dcc-a653-4b0f-8f8c-4dac889fdda4";
  const credential = new DefaultAzureCredential();
  const client = IoTHub(credential);

  const iothubcreateParameter: IotHubResourceCreateOrUpdateBodyParam = {
    body: {
      sku: {
        name: "S1",
        capacity: 1,
      },
      location: "centraluseuap",
    },
  };

  const result0:
    | IotHubResourceCreateOrUpdate200Response
    | IotHubResourceCreateOrUpdate201Response
    | IotHubResourceCreateOrUpdatedefaultResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
      subscriptionId,
      "renhework",
      "renhetest1"
    )
    .put(iothubcreateParameter);
  console.log(result0.body);

  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs",
      subscriptionId
    )
    .get();

  if (result.status !== "200") {
    throw result.body;
  }
  console.log("started");
  console.log(result.body.value?.map((hub) => hub.name).join("\n"));

  const result2 = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs",
      subscriptionId,
      "renhework"
    )
    .get();
  if (result2.status !== "200") {
    throw result2.body;
  }
  console.log(result.body.value);
}

main().catch(console.error);
