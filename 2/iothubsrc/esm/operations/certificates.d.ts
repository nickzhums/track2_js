import { Certificates } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import { IotHubClientContext } from "../iotHubClientContext";
import { CertificatesListByIotHubResponse, CertificatesGetResponse, CertificateDescription, CertificatesCreateOrUpdateOptionalParams, CertificatesCreateOrUpdateResponse, CertificatesGenerateVerificationCodeResponse, CertificateVerificationDescription, CertificatesVerifyResponse } from "../models";
/** Class representing a Certificates. */
export declare class CertificatesImpl implements Certificates {
    private readonly client;
    /**
     * Initialize a new instance of the class Certificates class.
     * @param client Reference to the service client
     */
    constructor(client: IotHubClientContext);
    /**
     * Returns the list of certificates.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    listByIotHub(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<CertificatesListByIotHubResponse>;
    /**
     * Returns the certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param options The options parameters.
     */
    get(resourceGroupName: string, resourceName: string, certificateName: string, options?: coreHttp.OperationOptions): Promise<CertificatesGetResponse>;
    /**
     * Adds new or replaces existing certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param certificateDescription The certificate body.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, resourceName: string, certificateName: string, certificateDescription: CertificateDescription, options?: CertificatesCreateOrUpdateOptionalParams): Promise<CertificatesCreateOrUpdateResponse>;
    /**
     * Deletes an existing X509 certificate or does nothing if it does not exist.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, resourceName: string, certificateName: string, ifMatch: string, options?: coreHttp.OperationOptions): Promise<coreHttp.RestResponse>;
    /**
     * Generates verification code for proof of possession flow. The verification code will be used to
     * generate a leaf certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param options The options parameters.
     */
    generateVerificationCode(resourceGroupName: string, resourceName: string, certificateName: string, ifMatch: string, options?: coreHttp.OperationOptions): Promise<CertificatesGenerateVerificationCodeResponse>;
    /**
     * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying
     * pre uploaded certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param certificateVerificationBody The name of the certificate
     * @param options The options parameters.
     */
    verify(resourceGroupName: string, resourceName: string, certificateName: string, ifMatch: string, certificateVerificationBody: CertificateVerificationDescription, options?: coreHttp.OperationOptions): Promise<CertificatesVerifyResponse>;
}
//# sourceMappingURL=certificates.d.ts.map