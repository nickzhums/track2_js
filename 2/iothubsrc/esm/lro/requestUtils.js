import { terminalStates } from "./constants";
/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final LRO response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLRO(finalStateVia) {
    var initialOperationInfo;
    var isInitialRequest = true;
    return function (response) {
        if (response.status < 200 || response.status >= 300) {
            return true;
        }
        if (!initialOperationInfo) {
            initialOperationInfo = getLROData(response);
        }
        else {
            isInitialRequest = false;
        }
        if (initialOperationInfo.azureAsyncOperation ||
            initialOperationInfo.operationLocation) {
            return (!isInitialRequest &&
                isAsyncOperationFinalResponse(response, initialOperationInfo, finalStateVia));
        }
        if (initialOperationInfo.location) {
            return isLocationFinalResponse(response);
        }
        if (initialOperationInfo.requestMethod === "PUT") {
            return isBodyPollingFinalResponse(response);
        }
        return true;
    };
}
function isAsyncOperationFinalResponse(response, initialOperationInfo, finalStateVia) {
    var _a;
    var status = ((_a = response.parsedBody) === null || _a === void 0 ? void 0 : _a.status) || "Succeeded";
    if (!terminalStates.includes(status.toLowerCase())) {
        return false;
    }
    if (initialOperationInfo.requestMethod === "DELETE") {
        return true;
    }
    if (initialOperationInfo.requestMethod === "PUT" &&
        finalStateVia &&
        finalStateVia.toLowerCase() === "azure-asyncoperation") {
        return true;
    }
    if (initialOperationInfo.requestMethod !== "PUT" &&
        !initialOperationInfo.location) {
        return true;
    }
    return false;
}
function isLocationFinalResponse(response) {
    return response.status !== 202;
}
function isBodyPollingFinalResponse(response) {
    var _a, _b;
    var provisioningState = ((_b = (_a = response.parsedBody) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.provisioningState) || "Succeeded";
    if (terminalStates.includes(provisioningState.toLowerCase())) {
        return true;
    }
    return false;
}
export function getLROData(result) {
    var statusCode = result.status;
    var _a = result.parsedBody || {}, status = _a.status, properties = _a.properties;
    return {
        statusCode: statusCode,
        azureAsyncOperation: result.headers.get("azure-asyncoperation"),
        operationLocation: result.headers.get("operation-location"),
        location: result.headers.get("location"),
        requestMethod: result.request.method,
        status: status,
        provisioningState: properties === null || properties === void 0 ? void 0 : properties.provisioningState
    };
}
//# sourceMappingURL=requestUtils.js.map