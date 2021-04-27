import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class representing a Certificates. */
var CertificatesImpl = /** @class */ (function () {
    /**
     * Initialize a new instance of the class Certificates class.
     * @param client Reference to the service client
     */
    function CertificatesImpl(client) {
        this.client = client;
    }
    /**
     * Returns the list of certificates.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param options The options parameters.
     */
    CertificatesImpl.prototype.listByIotHub = function (resourceGroupName, resourceName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, listByIotHubOperationSpec);
    };
    /**
     * Returns the certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param options The options parameters.
     */
    CertificatesImpl.prototype.get = function (resourceGroupName, resourceName, certificateName, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            certificateName: certificateName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, getOperationSpec);
    };
    /**
     * Adds new or replaces existing certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param certificateDescription The certificate body.
     * @param options The options parameters.
     */
    CertificatesImpl.prototype.createOrUpdate = function (resourceGroupName, resourceName, certificateName, certificateDescription, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            certificateName: certificateName,
            certificateDescription: certificateDescription,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, createOrUpdateOperationSpec);
    };
    /**
     * Deletes an existing X509 certificate or does nothing if it does not exist.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param options The options parameters.
     */
    CertificatesImpl.prototype.delete = function (resourceGroupName, resourceName, certificateName, ifMatch, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            certificateName: certificateName,
            ifMatch: ifMatch,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, deleteOperationSpec);
    };
    /**
     * Generates verification code for proof of possession flow. The verification code will be used to
     * generate a leaf certificate.
     * @param resourceGroupName The name of the resource group that contains the IoT hub.
     * @param resourceName The name of the IoT hub.
     * @param certificateName The name of the certificate
     * @param ifMatch ETag of the Certificate.
     * @param options The options parameters.
     */
    CertificatesImpl.prototype.generateVerificationCode = function (resourceGroupName, resourceName, certificateName, ifMatch, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            certificateName: certificateName,
            ifMatch: ifMatch,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, generateVerificationCodeOperationSpec);
    };
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
    CertificatesImpl.prototype.verify = function (resourceGroupName, resourceName, certificateName, ifMatch, certificateVerificationBody, options) {
        var operationArguments = {
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            certificateName: certificateName,
            ifMatch: ifMatch,
            certificateVerificationBody: certificateVerificationBody,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.client.sendOperationRequest(operationArguments, verifyOperationSpec);
    };
    return CertificatesImpl;
}());
export { CertificatesImpl };
// Operation Specifications
var serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
var listByIotHubOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.CertificateListDescription
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var getOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.CertificateDescription
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.certificateName
    ],
    headerParameters: [Parameters.accept],
    serializer: serializer
};
var createOrUpdateOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.CertificateDescription
        },
        201: {
            bodyMapper: Mappers.CertificateDescription
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.certificateDescription,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.certificateName
    ],
    headerParameters: [
        Parameters.accept,
        Parameters.contentType,
        Parameters.ifMatch
    ],
    mediaType: "json",
    serializer: serializer
};
var deleteOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
    httpMethod: "DELETE",
    responses: {
        200: {},
        204: {},
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.certificateName
    ],
    headerParameters: [Parameters.accept, Parameters.ifMatch1],
    serializer: serializer
};
var generateVerificationCodeOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.CertificateWithNonceDescription
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.certificateName
    ],
    headerParameters: [Parameters.accept, Parameters.ifMatch1],
    serializer: serializer
};
var verifyOperationSpec = {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.CertificateDescription
        },
        default: {
            bodyMapper: Mappers.ErrorDetails
        }
    },
    requestBody: Parameters.certificateVerificationBody,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.resourceName,
        Parameters.certificateName
    ],
    headerParameters: [
        Parameters.accept,
        Parameters.contentType,
        Parameters.ifMatch1
    ],
    mediaType: "json",
    serializer: serializer
};
//# sourceMappingURL=certificates.js.map