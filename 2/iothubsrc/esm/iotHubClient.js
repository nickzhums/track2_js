import { __extends } from "tslib";
import { OperationsImpl, IotHubResourceImpl, ResourceProviderCommonImpl, CertificatesImpl, IotHubImpl, PrivateLinkResourcesImpl, PrivateEndpointConnectionsImpl } from "./operations";
import { IotHubClientContext } from "./iotHubClientContext";
var IotHubClient = /** @class */ (function (_super) {
    __extends(IotHubClient, _super);
    /**
     * Initializes a new instance of the IotHubClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription identifier.
     * @param options The parameter options
     */
    function IotHubClient(credentials, subscriptionId, options) {
        var _this = _super.call(this, credentials, subscriptionId, options) || this;
        _this.operations = new OperationsImpl(_this);
        _this.iotHubResource = new IotHubResourceImpl(_this);
        _this.resourceProviderCommon = new ResourceProviderCommonImpl(_this);
        _this.certificates = new CertificatesImpl(_this);
        _this.iotHub = new IotHubImpl(_this);
        _this.privateLinkResources = new PrivateLinkResourcesImpl(_this);
        _this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(_this);
        return _this;
    }
    return IotHubClient;
}(IotHubClientContext));
export { IotHubClient };
//# sourceMappingURL=iotHubClient.js.map