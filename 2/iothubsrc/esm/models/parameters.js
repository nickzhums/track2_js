import { IotHubDescription as IotHubDescriptionMapper, TagsResource as TagsResourceMapper, EventHubConsumerGroupBodyDescription as EventHubConsumerGroupBodyDescriptionMapper, OperationInputs as OperationInputsMapper, TestAllRoutesInput as TestAllRoutesInputMapper, TestRouteInput as TestRouteInputMapper, ExportDevicesRequest as ExportDevicesRequestMapper, ImportDevicesRequest as ImportDevicesRequestMapper, CertificateDescription as CertificateDescriptionMapper, CertificateVerificationDescription as CertificateVerificationDescriptionMapper, FailoverInput as FailoverInputMapper, PrivateEndpointConnection as PrivateEndpointConnectionMapper } from "../models/mappers";
export var accept = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
export var $host = {
    parameterPath: "$host",
    mapper: {
        serializedName: "$host",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
export var apiVersion = {
    parameterPath: "apiVersion",
    mapper: {
        defaultValue: "2021-03-03-preview",
        isConstant: true,
        serializedName: "api-version",
        type: {
            name: "String"
        }
    }
};
export var nextLink = {
    parameterPath: "nextLink",
    mapper: {
        serializedName: "nextLink",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
export var subscriptionId = {
    parameterPath: "subscriptionId",
    mapper: {
        serializedName: "subscriptionId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var resourceGroupName = {
    parameterPath: "resourceGroupName",
    mapper: {
        serializedName: "resourceGroupName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var resourceName = {
    parameterPath: "resourceName",
    mapper: {
        serializedName: "resourceName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
export var iotHubDescription = {
    parameterPath: "iotHubDescription",
    mapper: IotHubDescriptionMapper
};
export var ifMatch = {
    parameterPath: ["options", "ifMatch"],
    mapper: {
        serializedName: "If-Match",
        type: {
            name: "String"
        }
    }
};
export var iotHubTags = {
    parameterPath: "iotHubTags",
    mapper: TagsResourceMapper
};
export var eventHubEndpointName = {
    parameterPath: "eventHubEndpointName",
    mapper: {
        serializedName: "eventHubEndpointName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var name = {
    parameterPath: "name",
    mapper: {
        serializedName: "name",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var consumerGroupBody = {
    parameterPath: "consumerGroupBody",
    mapper: EventHubConsumerGroupBodyDescriptionMapper
};
export var jobId = {
    parameterPath: "jobId",
    mapper: {
        serializedName: "jobId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var iotHubName = {
    parameterPath: "iotHubName",
    mapper: {
        serializedName: "iotHubName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var operationInputs = {
    parameterPath: "operationInputs",
    mapper: OperationInputsMapper
};
export var input = {
    parameterPath: "input",
    mapper: TestAllRoutesInputMapper
};
export var input1 = {
    parameterPath: "input",
    mapper: TestRouteInputMapper
};
export var keyName = {
    parameterPath: "keyName",
    mapper: {
        serializedName: "keyName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var exportDevicesParameters = {
    parameterPath: "exportDevicesParameters",
    mapper: ExportDevicesRequestMapper
};
export var importDevicesParameters = {
    parameterPath: "importDevicesParameters",
    mapper: ImportDevicesRequestMapper
};
export var certificateName = {
    parameterPath: "certificateName",
    mapper: {
        constraints: {
            Pattern: new RegExp("^[A-Za-z0-9-._]{1,64}$")
        },
        serializedName: "certificateName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var certificateDescription = {
    parameterPath: "certificateDescription",
    mapper: CertificateDescriptionMapper
};
export var ifMatch1 = {
    parameterPath: "ifMatch",
    mapper: {
        serializedName: "If-Match",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var certificateVerificationBody = {
    parameterPath: "certificateVerificationBody",
    mapper: CertificateVerificationDescriptionMapper
};
export var failoverInput = {
    parameterPath: "failoverInput",
    mapper: FailoverInputMapper
};
export var groupId = {
    parameterPath: "groupId",
    mapper: {
        serializedName: "groupId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var privateEndpointConnectionName = {
    parameterPath: "privateEndpointConnectionName",
    mapper: {
        serializedName: "privateEndpointConnectionName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export var privateEndpointConnection = {
    parameterPath: "privateEndpointConnection",
    mapper: PrivateEndpointConnectionMapper
};
//# sourceMappingURL=parameters.js.map