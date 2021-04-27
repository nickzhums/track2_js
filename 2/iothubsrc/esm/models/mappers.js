import { __assign } from "tslib";
export var OperationListResult = {
    type: {
        name: "Composite",
        className: "OperationListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                readOnly: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Operation"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var Operation = {
    type: {
        name: "Composite",
        className: "Operation",
        modelProperties: {
            name: {
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            display: {
                serializedName: "display",
                type: {
                    name: "Composite",
                    className: "OperationDisplay"
                }
            }
        }
    }
};
export var OperationDisplay = {
    type: {
        name: "Composite",
        className: "OperationDisplay",
        modelProperties: {
            provider: {
                serializedName: "provider",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            resource: {
                serializedName: "resource",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            operation: {
                serializedName: "operation",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            description: {
                serializedName: "description",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var ErrorDetails = {
    type: {
        name: "Composite",
        className: "ErrorDetails",
        modelProperties: {
            code: {
                serializedName: "code",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            httpStatusCode: {
                serializedName: "httpStatusCode",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            details: {
                serializedName: "details",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var IotHubProperties = {
    type: {
        name: "Composite",
        className: "IotHubProperties",
        modelProperties: {
            authorizationPolicies: {
                serializedName: "authorizationPolicies",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "SharedAccessSignatureAuthorizationRule"
                        }
                    }
                }
            },
            publicNetworkAccess: {
                serializedName: "publicNetworkAccess",
                type: {
                    name: "String"
                }
            },
            ipFilterRules: {
                serializedName: "ipFilterRules",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "IpFilterRule"
                        }
                    }
                }
            },
            networkRuleSets: {
                serializedName: "networkRuleSets",
                type: {
                    name: "Composite",
                    className: "NetworkRuleSetProperties"
                }
            },
            minTlsVersion: {
                serializedName: "minTlsVersion",
                type: {
                    name: "String"
                }
            },
            privateEndpointConnections: {
                serializedName: "privateEndpointConnections",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PrivateEndpointConnection"
                        }
                    }
                }
            },
            provisioningState: {
                serializedName: "provisioningState",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            state: {
                serializedName: "state",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            hostName: {
                serializedName: "hostName",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            eventHubEndpoints: {
                serializedName: "eventHubEndpoints",
                type: {
                    name: "Dictionary",
                    value: {
                        type: { name: "Composite", className: "EventHubProperties" }
                    }
                }
            },
            routing: {
                serializedName: "routing",
                type: {
                    name: "Composite",
                    className: "RoutingProperties"
                }
            },
            storageEndpoints: {
                serializedName: "storageEndpoints",
                type: {
                    name: "Dictionary",
                    value: {
                        type: { name: "Composite", className: "StorageEndpointProperties" }
                    }
                }
            },
            messagingEndpoints: {
                serializedName: "messagingEndpoints",
                type: {
                    name: "Dictionary",
                    value: {
                        type: {
                            name: "Composite",
                            className: "MessagingEndpointProperties"
                        }
                    }
                }
            },
            enableFileUploadNotifications: {
                serializedName: "enableFileUploadNotifications",
                type: {
                    name: "Boolean"
                }
            },
            cloudToDevice: {
                serializedName: "cloudToDevice",
                type: {
                    name: "Composite",
                    className: "CloudToDeviceProperties"
                }
            },
            comments: {
                serializedName: "comments",
                type: {
                    name: "String"
                }
            },
            deviceStreams: {
                serializedName: "deviceStreams",
                type: {
                    name: "Composite",
                    className: "IotHubPropertiesDeviceStreams"
                }
            },
            features: {
                serializedName: "features",
                type: {
                    name: "String"
                }
            },
            encryption: {
                serializedName: "encryption",
                type: {
                    name: "Composite",
                    className: "EncryptionPropertiesDescription"
                }
            },
            locations: {
                serializedName: "locations",
                readOnly: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "IotHubLocationDescription"
                        }
                    }
                }
            }
        }
    }
};
export var SharedAccessSignatureAuthorizationRule = {
    type: {
        name: "Composite",
        className: "SharedAccessSignatureAuthorizationRule",
        modelProperties: {
            keyName: {
                serializedName: "keyName",
                required: true,
                type: {
                    name: "String"
                }
            },
            primaryKey: {
                serializedName: "primaryKey",
                type: {
                    name: "String"
                }
            },
            secondaryKey: {
                serializedName: "secondaryKey",
                type: {
                    name: "String"
                }
            },
            rights: {
                serializedName: "rights",
                required: true,
                type: {
                    name: "Enum",
                    allowedValues: [
                        "RegistryRead",
                        "RegistryWrite",
                        "ServiceConnect",
                        "DeviceConnect",
                        "RegistryRead, RegistryWrite",
                        "RegistryRead, ServiceConnect",
                        "RegistryRead, DeviceConnect",
                        "RegistryWrite, ServiceConnect",
                        "RegistryWrite, DeviceConnect",
                        "ServiceConnect, DeviceConnect",
                        "RegistryRead, RegistryWrite, ServiceConnect",
                        "RegistryRead, RegistryWrite, DeviceConnect",
                        "RegistryRead, ServiceConnect, DeviceConnect",
                        "RegistryWrite, ServiceConnect, DeviceConnect",
                        "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect"
                    ]
                }
            }
        }
    }
};
export var IpFilterRule = {
    type: {
        name: "Composite",
        className: "IpFilterRule",
        modelProperties: {
            filterName: {
                serializedName: "filterName",
                required: true,
                type: {
                    name: "String"
                }
            },
            action: {
                serializedName: "action",
                required: true,
                type: {
                    name: "Enum",
                    allowedValues: ["Accept", "Reject"]
                }
            },
            ipMask: {
                serializedName: "ipMask",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var NetworkRuleSetProperties = {
    type: {
        name: "Composite",
        className: "NetworkRuleSetProperties",
        modelProperties: {
            defaultAction: {
                defaultValue: "Deny",
                serializedName: "defaultAction",
                type: {
                    name: "String"
                }
            },
            applyToBuiltInEventHubEndpoint: {
                serializedName: "applyToBuiltInEventHubEndpoint",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            ipRules: {
                serializedName: "ipRules",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "NetworkRuleSetIpRule"
                        }
                    }
                }
            }
        }
    }
};
export var NetworkRuleSetIpRule = {
    type: {
        name: "Composite",
        className: "NetworkRuleSetIpRule",
        modelProperties: {
            filterName: {
                serializedName: "filterName",
                required: true,
                type: {
                    name: "String"
                }
            },
            action: {
                defaultValue: "Allow",
                serializedName: "action",
                type: {
                    name: "String"
                }
            },
            ipMask: {
                serializedName: "ipMask",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var PrivateEndpointConnection = {
    type: {
        name: "Composite",
        className: "PrivateEndpointConnection",
        modelProperties: {
            id: {
                serializedName: "id",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            name: {
                constraints: {
                    Pattern: new RegExp("^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$")
                },
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "PrivateEndpointConnectionProperties"
                }
            }
        }
    }
};
export var PrivateEndpointConnectionProperties = {
    type: {
        name: "Composite",
        className: "PrivateEndpointConnectionProperties",
        modelProperties: {
            privateEndpoint: {
                serializedName: "privateEndpoint",
                type: {
                    name: "Composite",
                    className: "PrivateEndpoint"
                }
            },
            privateLinkServiceConnectionState: {
                serializedName: "privateLinkServiceConnectionState",
                type: {
                    name: "Composite",
                    className: "PrivateLinkServiceConnectionState"
                }
            }
        }
    }
};
export var PrivateEndpoint = {
    type: {
        name: "Composite",
        className: "PrivateEndpoint",
        modelProperties: {
            id: {
                serializedName: "id",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var PrivateLinkServiceConnectionState = {
    type: {
        name: "Composite",
        className: "PrivateLinkServiceConnectionState",
        modelProperties: {
            status: {
                serializedName: "status",
                required: true,
                type: {
                    name: "String"
                }
            },
            description: {
                serializedName: "description",
                required: true,
                type: {
                    name: "String"
                }
            },
            actionsRequired: {
                serializedName: "actionsRequired",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var EventHubProperties = {
    type: {
        name: "Composite",
        className: "EventHubProperties",
        modelProperties: {
            retentionTimeInDays: {
                serializedName: "retentionTimeInDays",
                type: {
                    name: "Number"
                }
            },
            partitionCount: {
                serializedName: "partitionCount",
                type: {
                    name: "Number"
                }
            },
            partitionIds: {
                serializedName: "partitionIds",
                readOnly: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            path: {
                serializedName: "path",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            endpoint: {
                serializedName: "endpoint",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var RoutingProperties = {
    type: {
        name: "Composite",
        className: "RoutingProperties",
        modelProperties: {
            endpoints: {
                serializedName: "endpoints",
                type: {
                    name: "Composite",
                    className: "RoutingEndpoints"
                }
            },
            routes: {
                serializedName: "routes",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "RouteProperties"
                        }
                    }
                }
            },
            fallbackRoute: {
                serializedName: "fallbackRoute",
                type: {
                    name: "Composite",
                    className: "FallbackRouteProperties"
                }
            },
            enrichments: {
                serializedName: "enrichments",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "EnrichmentProperties"
                        }
                    }
                }
            }
        }
    }
};
export var RoutingEndpoints = {
    type: {
        name: "Composite",
        className: "RoutingEndpoints",
        modelProperties: {
            serviceBusQueues: {
                serializedName: "serviceBusQueues",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "RoutingServiceBusQueueEndpointProperties"
                        }
                    }
                }
            },
            serviceBusTopics: {
                serializedName: "serviceBusTopics",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "RoutingServiceBusTopicEndpointProperties"
                        }
                    }
                }
            },
            eventHubs: {
                serializedName: "eventHubs",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "RoutingEventHubProperties"
                        }
                    }
                }
            },
            storageContainers: {
                serializedName: "storageContainers",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "RoutingStorageContainerProperties"
                        }
                    }
                }
            }
        }
    }
};
export var RoutingServiceBusQueueEndpointProperties = {
    type: {
        name: "Composite",
        className: "RoutingServiceBusQueueEndpointProperties",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            connectionString: {
                serializedName: "connectionString",
                type: {
                    name: "String"
                }
            },
            endpointUri: {
                serializedName: "endpointUri",
                type: {
                    name: "String"
                }
            },
            entityPath: {
                serializedName: "entityPath",
                type: {
                    name: "String"
                }
            },
            authenticationType: {
                serializedName: "authenticationType",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            },
            name: {
                constraints: {
                    Pattern: new RegExp("^[A-Za-z0-9-._]{1,64}$")
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            subscriptionId: {
                serializedName: "subscriptionId",
                type: {
                    name: "String"
                }
            },
            resourceGroup: {
                serializedName: "resourceGroup",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var ManagedIdentity = {
    type: {
        name: "Composite",
        className: "ManagedIdentity",
        modelProperties: {
            userAssignedIdentity: {
                serializedName: "userAssignedIdentity",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var RoutingServiceBusTopicEndpointProperties = {
    type: {
        name: "Composite",
        className: "RoutingServiceBusTopicEndpointProperties",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            connectionString: {
                serializedName: "connectionString",
                type: {
                    name: "String"
                }
            },
            endpointUri: {
                serializedName: "endpointUri",
                type: {
                    name: "String"
                }
            },
            entityPath: {
                serializedName: "entityPath",
                type: {
                    name: "String"
                }
            },
            authenticationType: {
                serializedName: "authenticationType",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            },
            name: {
                constraints: {
                    Pattern: new RegExp("^[A-Za-z0-9-._]{1,64}$")
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            subscriptionId: {
                serializedName: "subscriptionId",
                type: {
                    name: "String"
                }
            },
            resourceGroup: {
                serializedName: "resourceGroup",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var RoutingEventHubProperties = {
    type: {
        name: "Composite",
        className: "RoutingEventHubProperties",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            connectionString: {
                serializedName: "connectionString",
                type: {
                    name: "String"
                }
            },
            endpointUri: {
                serializedName: "endpointUri",
                type: {
                    name: "String"
                }
            },
            entityPath: {
                serializedName: "entityPath",
                type: {
                    name: "String"
                }
            },
            authenticationType: {
                serializedName: "authenticationType",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            },
            name: {
                constraints: {
                    Pattern: new RegExp("^[A-Za-z0-9-._]{1,64}$")
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            subscriptionId: {
                serializedName: "subscriptionId",
                type: {
                    name: "String"
                }
            },
            resourceGroup: {
                serializedName: "resourceGroup",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var RoutingStorageContainerProperties = {
    type: {
        name: "Composite",
        className: "RoutingStorageContainerProperties",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            connectionString: {
                serializedName: "connectionString",
                type: {
                    name: "String"
                }
            },
            endpointUri: {
                serializedName: "endpointUri",
                type: {
                    name: "String"
                }
            },
            authenticationType: {
                serializedName: "authenticationType",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            },
            name: {
                constraints: {
                    Pattern: new RegExp("^[A-Za-z0-9-._]{1,64}$")
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            subscriptionId: {
                serializedName: "subscriptionId",
                type: {
                    name: "String"
                }
            },
            resourceGroup: {
                serializedName: "resourceGroup",
                type: {
                    name: "String"
                }
            },
            containerName: {
                serializedName: "containerName",
                required: true,
                type: {
                    name: "String"
                }
            },
            fileNameFormat: {
                serializedName: "fileNameFormat",
                type: {
                    name: "String"
                }
            },
            batchFrequencyInSeconds: {
                constraints: {
                    InclusiveMaximum: 720,
                    InclusiveMinimum: 60
                },
                serializedName: "batchFrequencyInSeconds",
                type: {
                    name: "Number"
                }
            },
            maxChunkSizeInBytes: {
                constraints: {
                    InclusiveMaximum: 524288000,
                    InclusiveMinimum: 10485760
                },
                serializedName: "maxChunkSizeInBytes",
                type: {
                    name: "Number"
                }
            },
            encoding: {
                serializedName: "encoding",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var RouteProperties = {
    type: {
        name: "Composite",
        className: "RouteProperties",
        modelProperties: {
            name: {
                constraints: {
                    Pattern: new RegExp("^[A-Za-z0-9-._]{1,64}$")
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            source: {
                serializedName: "source",
                required: true,
                type: {
                    name: "String"
                }
            },
            condition: {
                serializedName: "condition",
                type: {
                    name: "String"
                }
            },
            endpointNames: {
                constraints: {
                    MinItems: 1,
                    MaxItems: 1
                },
                serializedName: "endpointNames",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            isEnabled: {
                serializedName: "isEnabled",
                required: true,
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
export var FallbackRouteProperties = {
    type: {
        name: "Composite",
        className: "FallbackRouteProperties",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            source: {
                serializedName: "source",
                required: true,
                type: {
                    name: "String"
                }
            },
            condition: {
                serializedName: "condition",
                type: {
                    name: "String"
                }
            },
            endpointNames: {
                constraints: {
                    MinItems: 1,
                    MaxItems: 1
                },
                serializedName: "endpointNames",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            isEnabled: {
                serializedName: "isEnabled",
                required: true,
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
export var EnrichmentProperties = {
    type: {
        name: "Composite",
        className: "EnrichmentProperties",
        modelProperties: {
            key: {
                serializedName: "key",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "String"
                }
            },
            endpointNames: {
                constraints: {
                    MinItems: 1
                },
                serializedName: "endpointNames",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        }
    }
};
export var StorageEndpointProperties = {
    type: {
        name: "Composite",
        className: "StorageEndpointProperties",
        modelProperties: {
            sasTtlAsIso8601: {
                serializedName: "sasTtlAsIso8601",
                type: {
                    name: "TimeSpan"
                }
            },
            connectionString: {
                serializedName: "connectionString",
                required: true,
                type: {
                    name: "String"
                }
            },
            containerName: {
                serializedName: "containerName",
                required: true,
                type: {
                    name: "String"
                }
            },
            authenticationType: {
                serializedName: "authenticationType",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            }
        }
    }
};
export var MessagingEndpointProperties = {
    type: {
        name: "Composite",
        className: "MessagingEndpointProperties",
        modelProperties: {
            lockDurationAsIso8601: {
                serializedName: "lockDurationAsIso8601",
                type: {
                    name: "TimeSpan"
                }
            },
            ttlAsIso8601: {
                serializedName: "ttlAsIso8601",
                type: {
                    name: "TimeSpan"
                }
            },
            maxDeliveryCount: {
                constraints: {
                    InclusiveMaximum: 100,
                    InclusiveMinimum: 1
                },
                serializedName: "maxDeliveryCount",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export var CloudToDeviceProperties = {
    type: {
        name: "Composite",
        className: "CloudToDeviceProperties",
        modelProperties: {
            maxDeliveryCount: {
                constraints: {
                    InclusiveMaximum: 100,
                    InclusiveMinimum: 1
                },
                serializedName: "maxDeliveryCount",
                type: {
                    name: "Number"
                }
            },
            defaultTtlAsIso8601: {
                serializedName: "defaultTtlAsIso8601",
                type: {
                    name: "TimeSpan"
                }
            },
            feedback: {
                serializedName: "feedback",
                type: {
                    name: "Composite",
                    className: "FeedbackProperties"
                }
            }
        }
    }
};
export var FeedbackProperties = {
    type: {
        name: "Composite",
        className: "FeedbackProperties",
        modelProperties: {
            lockDurationAsIso8601: {
                serializedName: "lockDurationAsIso8601",
                type: {
                    name: "TimeSpan"
                }
            },
            ttlAsIso8601: {
                serializedName: "ttlAsIso8601",
                type: {
                    name: "TimeSpan"
                }
            },
            maxDeliveryCount: {
                constraints: {
                    InclusiveMaximum: 100,
                    InclusiveMinimum: 1
                },
                serializedName: "maxDeliveryCount",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export var IotHubPropertiesDeviceStreams = {
    type: {
        name: "Composite",
        className: "IotHubPropertiesDeviceStreams",
        modelProperties: {
            streamingEndpoints: {
                serializedName: "streamingEndpoints",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        }
    }
};
export var EncryptionPropertiesDescription = {
    type: {
        name: "Composite",
        className: "EncryptionPropertiesDescription",
        modelProperties: {
            keySource: {
                serializedName: "keySource",
                type: {
                    name: "String"
                }
            },
            keyVaultProperties: {
                serializedName: "keyVaultProperties",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "KeyVaultKeyProperties"
                        }
                    }
                }
            }
        }
    }
};
export var KeyVaultKeyProperties = {
    type: {
        name: "Composite",
        className: "KeyVaultKeyProperties",
        modelProperties: {
            keyIdentifier: {
                serializedName: "keyIdentifier",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            }
        }
    }
};
export var IotHubLocationDescription = {
    type: {
        name: "Composite",
        className: "IotHubLocationDescription",
        modelProperties: {
            location: {
                serializedName: "location",
                type: {
                    name: "String"
                }
            },
            role: {
                serializedName: "role",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var IotHubSkuInfo = {
    type: {
        name: "Composite",
        className: "IotHubSkuInfo",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            tier: {
                serializedName: "tier",
                readOnly: true,
                type: {
                    name: "Enum",
                    allowedValues: ["Free", "Standard", "Basic"]
                }
            },
            capacity: {
                serializedName: "capacity",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export var ArmIdentity = {
    type: {
        name: "Composite",
        className: "ArmIdentity",
        modelProperties: {
            principalId: {
                serializedName: "principalId",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            tenantId: {
                serializedName: "tenantId",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "Enum",
                    allowedValues: [
                        "SystemAssigned",
                        "UserAssigned",
                        "SystemAssigned,UserAssigned",
                        "None"
                    ]
                }
            },
            userAssignedIdentities: {
                serializedName: "userAssignedIdentities",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "Composite", className: "ArmUserIdentity" } }
                }
            }
        }
    }
};
export var ArmUserIdentity = {
    type: {
        name: "Composite",
        className: "ArmUserIdentity",
        modelProperties: {
            principalId: {
                serializedName: "principalId",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            clientId: {
                serializedName: "clientId",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var Resource = {
    type: {
        name: "Composite",
        className: "Resource",
        modelProperties: {
            id: {
                serializedName: "id",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            name: {
                constraints: {
                    Pattern: new RegExp("^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$")
                },
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                required: true,
                type: {
                    name: "String"
                }
            },
            tags: {
                serializedName: "tags",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "String" } }
                }
            }
        }
    }
};
export var TagsResource = {
    type: {
        name: "Composite",
        className: "TagsResource",
        modelProperties: {
            tags: {
                serializedName: "tags",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "String" } }
                }
            }
        }
    }
};
export var IotHubDescriptionListResult = {
    type: {
        name: "Composite",
        className: "IotHubDescriptionListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "IotHubDescription"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var RegistryStatistics = {
    type: {
        name: "Composite",
        className: "RegistryStatistics",
        modelProperties: {
            totalDeviceCount: {
                serializedName: "totalDeviceCount",
                readOnly: true,
                type: {
                    name: "Number"
                }
            },
            enabledDeviceCount: {
                serializedName: "enabledDeviceCount",
                readOnly: true,
                type: {
                    name: "Number"
                }
            },
            disabledDeviceCount: {
                serializedName: "disabledDeviceCount",
                readOnly: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export var IotHubSkuDescriptionListResult = {
    type: {
        name: "Composite",
        className: "IotHubSkuDescriptionListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "IotHubSkuDescription"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var IotHubSkuDescription = {
    type: {
        name: "Composite",
        className: "IotHubSkuDescription",
        modelProperties: {
            resourceType: {
                serializedName: "resourceType",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            sku: {
                serializedName: "sku",
                type: {
                    name: "Composite",
                    className: "IotHubSkuInfo"
                }
            },
            capacity: {
                serializedName: "capacity",
                type: {
                    name: "Composite",
                    className: "IotHubCapacity"
                }
            }
        }
    }
};
export var IotHubCapacity = {
    type: {
        name: "Composite",
        className: "IotHubCapacity",
        modelProperties: {
            minimum: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 1
                },
                serializedName: "minimum",
                readOnly: true,
                type: {
                    name: "Number"
                }
            },
            maximum: {
                serializedName: "maximum",
                readOnly: true,
                type: {
                    name: "Number"
                }
            },
            default: {
                serializedName: "default",
                readOnly: true,
                type: {
                    name: "Number"
                }
            },
            scaleType: {
                serializedName: "scaleType",
                readOnly: true,
                type: {
                    name: "Enum",
                    allowedValues: ["Automatic", "Manual", "None"]
                }
            }
        }
    }
};
export var EventHubConsumerGroupsListResult = {
    type: {
        name: "Composite",
        className: "EventHubConsumerGroupsListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "EventHubConsumerGroupInfo"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var EventHubConsumerGroupInfo = {
    type: {
        name: "Composite",
        className: "EventHubConsumerGroupInfo",
        modelProperties: {
            properties: {
                serializedName: "properties",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "String" } }
                }
            },
            id: {
                serializedName: "id",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            etag: {
                serializedName: "etag",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var EventHubConsumerGroupBodyDescription = {
    type: {
        name: "Composite",
        className: "EventHubConsumerGroupBodyDescription",
        modelProperties: {
            properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "EventHubConsumerGroupName"
                }
            }
        }
    }
};
export var EventHubConsumerGroupName = {
    type: {
        name: "Composite",
        className: "EventHubConsumerGroupName",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var JobResponseListResult = {
    type: {
        name: "Composite",
        className: "JobResponseListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "JobResponse"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var JobResponse = {
    type: {
        name: "Composite",
        className: "JobResponse",
        modelProperties: {
            jobId: {
                serializedName: "jobId",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            startTimeUtc: {
                serializedName: "startTimeUtc",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            endTimeUtc: {
                serializedName: "endTimeUtc",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            type: {
                serializedName: "type",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            status: {
                serializedName: "status",
                readOnly: true,
                type: {
                    name: "Enum",
                    allowedValues: [
                        "unknown",
                        "enqueued",
                        "running",
                        "completed",
                        "failed",
                        "cancelled"
                    ]
                }
            },
            failureReason: {
                serializedName: "failureReason",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            statusMessage: {
                serializedName: "statusMessage",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            parentJobId: {
                serializedName: "parentJobId",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var IotHubQuotaMetricInfoListResult = {
    type: {
        name: "Composite",
        className: "IotHubQuotaMetricInfoListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "IotHubQuotaMetricInfo"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var IotHubQuotaMetricInfo = {
    type: {
        name: "Composite",
        className: "IotHubQuotaMetricInfo",
        modelProperties: {
            name: {
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            currentValue: {
                serializedName: "currentValue",
                readOnly: true,
                type: {
                    name: "Number"
                }
            },
            maxValue: {
                serializedName: "maxValue",
                readOnly: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export var EndpointHealthDataListResult = {
    type: {
        name: "Composite",
        className: "EndpointHealthDataListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "EndpointHealthData"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var EndpointHealthData = {
    type: {
        name: "Composite",
        className: "EndpointHealthData",
        modelProperties: {
            endpointId: {
                serializedName: "endpointId",
                type: {
                    name: "String"
                }
            },
            healthStatus: {
                serializedName: "healthStatus",
                type: {
                    name: "String"
                }
            },
            lastKnownError: {
                serializedName: "lastKnownError",
                type: {
                    name: "String"
                }
            },
            lastKnownErrorTime: {
                serializedName: "lastKnownErrorTime",
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            lastSuccessfulSendAttemptTime: {
                serializedName: "lastSuccessfulSendAttemptTime",
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            lastSendAttemptTime: {
                serializedName: "lastSendAttemptTime",
                type: {
                    name: "DateTimeRfc1123"
                }
            }
        }
    }
};
export var OperationInputs = {
    type: {
        name: "Composite",
        className: "OperationInputs",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var IotHubNameAvailabilityInfo = {
    type: {
        name: "Composite",
        className: "IotHubNameAvailabilityInfo",
        modelProperties: {
            nameAvailable: {
                serializedName: "nameAvailable",
                readOnly: true,
                type: {
                    name: "Boolean"
                }
            },
            reason: {
                serializedName: "reason",
                readOnly: true,
                type: {
                    name: "Enum",
                    allowedValues: ["Invalid", "AlreadyExists"]
                }
            },
            message: {
                serializedName: "message",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var UserSubscriptionQuotaListResult = {
    type: {
        name: "Composite",
        className: "UserSubscriptionQuotaListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "UserSubscriptionQuota"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var UserSubscriptionQuota = {
    type: {
        name: "Composite",
        className: "UserSubscriptionQuota",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            unit: {
                serializedName: "unit",
                type: {
                    name: "String"
                }
            },
            currentValue: {
                serializedName: "currentValue",
                type: {
                    name: "Number"
                }
            },
            limit: {
                serializedName: "limit",
                type: {
                    name: "Number"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "Composite",
                    className: "Name"
                }
            }
        }
    }
};
export var Name = {
    type: {
        name: "Composite",
        className: "Name",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "String"
                }
            },
            localizedValue: {
                serializedName: "localizedValue",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var TestAllRoutesInput = {
    type: {
        name: "Composite",
        className: "TestAllRoutesInput",
        modelProperties: {
            routingSource: {
                serializedName: "routingSource",
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                type: {
                    name: "Composite",
                    className: "RoutingMessage"
                }
            },
            twin: {
                serializedName: "twin",
                type: {
                    name: "Composite",
                    className: "RoutingTwin"
                }
            }
        }
    }
};
export var RoutingMessage = {
    type: {
        name: "Composite",
        className: "RoutingMessage",
        modelProperties: {
            body: {
                serializedName: "body",
                type: {
                    name: "String"
                }
            },
            appProperties: {
                serializedName: "appProperties",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "String" } }
                }
            },
            systemProperties: {
                serializedName: "systemProperties",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "String" } }
                }
            }
        }
    }
};
export var RoutingTwin = {
    type: {
        name: "Composite",
        className: "RoutingTwin",
        modelProperties: {
            tags: {
                serializedName: "tags",
                type: {
                    name: "any"
                }
            },
            properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "RoutingTwinProperties"
                }
            }
        }
    }
};
export var RoutingTwinProperties = {
    type: {
        name: "Composite",
        className: "RoutingTwinProperties",
        modelProperties: {
            desired: {
                serializedName: "desired",
                type: {
                    name: "any"
                }
            },
            reported: {
                serializedName: "reported",
                type: {
                    name: "any"
                }
            }
        }
    }
};
export var TestAllRoutesResult = {
    type: {
        name: "Composite",
        className: "TestAllRoutesResult",
        modelProperties: {
            routes: {
                serializedName: "routes",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "MatchedRoute"
                        }
                    }
                }
            }
        }
    }
};
export var MatchedRoute = {
    type: {
        name: "Composite",
        className: "MatchedRoute",
        modelProperties: {
            properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "RouteProperties"
                }
            }
        }
    }
};
export var TestRouteInput = {
    type: {
        name: "Composite",
        className: "TestRouteInput",
        modelProperties: {
            message: {
                serializedName: "message",
                type: {
                    name: "Composite",
                    className: "RoutingMessage"
                }
            },
            route: {
                serializedName: "route",
                type: {
                    name: "Composite",
                    className: "RouteProperties"
                }
            },
            twin: {
                serializedName: "twin",
                type: {
                    name: "Composite",
                    className: "RoutingTwin"
                }
            }
        }
    }
};
export var TestRouteResult = {
    type: {
        name: "Composite",
        className: "TestRouteResult",
        modelProperties: {
            result: {
                serializedName: "result",
                type: {
                    name: "String"
                }
            },
            details: {
                serializedName: "details",
                type: {
                    name: "Composite",
                    className: "TestRouteResultDetails"
                }
            }
        }
    }
};
export var TestRouteResultDetails = {
    type: {
        name: "Composite",
        className: "TestRouteResultDetails",
        modelProperties: {
            compilationErrors: {
                serializedName: "compilationErrors",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "RouteCompilationError"
                        }
                    }
                }
            }
        }
    }
};
export var RouteCompilationError = {
    type: {
        name: "Composite",
        className: "RouteCompilationError",
        modelProperties: {
            message: {
                serializedName: "message",
                type: {
                    name: "String"
                }
            },
            severity: {
                serializedName: "severity",
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "RouteErrorRange"
                }
            }
        }
    }
};
export var RouteErrorRange = {
    type: {
        name: "Composite",
        className: "RouteErrorRange",
        modelProperties: {
            start: {
                serializedName: "start",
                type: {
                    name: "Composite",
                    className: "RouteErrorPosition"
                }
            },
            end: {
                serializedName: "end",
                type: {
                    name: "Composite",
                    className: "RouteErrorPosition"
                }
            }
        }
    }
};
export var RouteErrorPosition = {
    type: {
        name: "Composite",
        className: "RouteErrorPosition",
        modelProperties: {
            line: {
                serializedName: "line",
                type: {
                    name: "Number"
                }
            },
            column: {
                serializedName: "column",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export var SharedAccessSignatureAuthorizationRuleListResult = {
    type: {
        name: "Composite",
        className: "SharedAccessSignatureAuthorizationRuleListResult",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "SharedAccessSignatureAuthorizationRule"
                        }
                    }
                }
            },
            nextLink: {
                serializedName: "nextLink",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var ExportDevicesRequest = {
    type: {
        name: "Composite",
        className: "ExportDevicesRequest",
        modelProperties: {
            exportBlobContainerUri: {
                serializedName: "exportBlobContainerUri",
                required: true,
                type: {
                    name: "String"
                }
            },
            excludeKeys: {
                serializedName: "excludeKeys",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            exportBlobName: {
                serializedName: "exportBlobName",
                type: {
                    name: "String"
                }
            },
            authenticationType: {
                serializedName: "authenticationType",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            }
        }
    }
};
export var ImportDevicesRequest = {
    type: {
        name: "Composite",
        className: "ImportDevicesRequest",
        modelProperties: {
            inputBlobContainerUri: {
                serializedName: "inputBlobContainerUri",
                required: true,
                type: {
                    name: "String"
                }
            },
            outputBlobContainerUri: {
                serializedName: "outputBlobContainerUri",
                required: true,
                type: {
                    name: "String"
                }
            },
            inputBlobName: {
                serializedName: "inputBlobName",
                type: {
                    name: "String"
                }
            },
            outputBlobName: {
                serializedName: "outputBlobName",
                type: {
                    name: "String"
                }
            },
            authenticationType: {
                serializedName: "authenticationType",
                type: {
                    name: "String"
                }
            },
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ManagedIdentity"
                }
            }
        }
    }
};
export var CertificateListDescription = {
    type: {
        name: "Composite",
        className: "CertificateListDescription",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "CertificateDescription"
                        }
                    }
                }
            }
        }
    }
};
export var CertificateDescription = {
    type: {
        name: "Composite",
        className: "CertificateDescription",
        modelProperties: {
            properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "CertificateProperties"
                }
            },
            id: {
                serializedName: "id",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            etag: {
                serializedName: "etag",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var CertificateProperties = {
    type: {
        name: "Composite",
        className: "CertificateProperties",
        modelProperties: {
            subject: {
                serializedName: "subject",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            expiry: {
                serializedName: "expiry",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            thumbprint: {
                serializedName: "thumbprint",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            isVerified: {
                serializedName: "isVerified",
                readOnly: true,
                type: {
                    name: "Boolean"
                }
            },
            created: {
                serializedName: "created",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            updated: {
                serializedName: "updated",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            certificate: {
                serializedName: "certificate",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var CertificateWithNonceDescription = {
    type: {
        name: "Composite",
        className: "CertificateWithNonceDescription",
        modelProperties: {
            properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "CertificatePropertiesWithNonce"
                }
            },
            id: {
                serializedName: "id",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            etag: {
                serializedName: "etag",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var CertificatePropertiesWithNonce = {
    type: {
        name: "Composite",
        className: "CertificatePropertiesWithNonce",
        modelProperties: {
            subject: {
                serializedName: "subject",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            expiry: {
                serializedName: "expiry",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            thumbprint: {
                serializedName: "thumbprint",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            isVerified: {
                serializedName: "isVerified",
                readOnly: true,
                type: {
                    name: "Boolean"
                }
            },
            created: {
                serializedName: "created",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            updated: {
                serializedName: "updated",
                readOnly: true,
                type: {
                    name: "DateTimeRfc1123"
                }
            },
            verificationCode: {
                serializedName: "verificationCode",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            certificate: {
                serializedName: "certificate",
                readOnly: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var CertificateVerificationDescription = {
    type: {
        name: "Composite",
        className: "CertificateVerificationDescription",
        modelProperties: {
            certificate: {
                serializedName: "certificate",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var FailoverInput = {
    type: {
        name: "Composite",
        className: "FailoverInput",
        modelProperties: {
            failoverRegion: {
                serializedName: "failoverRegion",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var PrivateLinkResources = {
    type: {
        name: "Composite",
        className: "PrivateLinkResources",
        modelProperties: {
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "GroupIdInformation"
                        }
                    }
                }
            }
        }
    }
};
export var GroupIdInformation = {
    type: {
        name: "Composite",
        className: "GroupIdInformation",
        modelProperties: {
            id: {
                serializedName: "id",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            name: {
                constraints: {
                    Pattern: new RegExp("^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$")
                },
                serializedName: "name",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "GroupIdInformationProperties"
                }
            }
        }
    }
};
export var GroupIdInformationProperties = {
    type: {
        name: "Composite",
        className: "GroupIdInformationProperties",
        modelProperties: {
            groupId: {
                serializedName: "groupId",
                type: {
                    name: "String"
                }
            },
            requiredMembers: {
                serializedName: "requiredMembers",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            requiredZoneNames: {
                serializedName: "requiredZoneNames",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        }
    }
};
export var CertificateBodyDescription = {
    type: {
        name: "Composite",
        className: "CertificateBodyDescription",
        modelProperties: {
            certificate: {
                serializedName: "certificate",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export var IotHubDescription = {
    type: {
        name: "Composite",
        className: "IotHubDescription",
        modelProperties: __assign(__assign({}, Resource.type.modelProperties), { etag: {
                serializedName: "etag",
                type: {
                    name: "String"
                }
            }, properties: {
                serializedName: "properties",
                type: {
                    name: "Composite",
                    className: "IotHubProperties"
                }
            }, sku: {
                serializedName: "sku",
                type: {
                    name: "Composite",
                    className: "IotHubSkuInfo"
                }
            }, identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "ArmIdentity"
                }
            } })
    }
};
//# sourceMappingURL=mappers.js.map