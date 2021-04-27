import { IotHubClient, IotHubDescription } from '@azure/arm-iothub';
import { DefaultAzureCredential } from '@azure/identity';

async function main() {
  const subscriptionId = '';
  const credential = new DefaultAzureCredential();
  const iothubDescription: IotHubDescription = {
    sku: {
      name: 'S1',
      capacity: 1,
    },
    location: 'centraluseuap',
  };
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.createOrUpdate('centraluseuap', 'renheTest1', iothubDescription);
  console.log(result);
}
main().catch(console.error);
console.log('Hello world!');
