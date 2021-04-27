import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operations } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import { IotHubClientContext } from "../iotHubClientContext";
import { Operation } from "../models";
/** Class representing a Operations. */
export declare class OperationsImpl implements Operations {
    private readonly client;
    /**
     * Initialize a new instance of the class Operations class.
     * @param client Reference to the service client
     */
    constructor(client: IotHubClientContext);
    /**
     * Lists all of the available IoT Hub REST API operations.
     * @param options The options parameters.
     */
    list(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<Operation>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Lists all of the available IoT Hub REST API operations.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=operations.d.ts.map