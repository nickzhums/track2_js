import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { Operation } from "../models";
/** Interface representing a Operations. */
export interface Operations {
    /**
     * Lists all of the available IoT Hub REST API operations.
     * @param options The options parameters.
     */
    list(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<Operation>;
}
//# sourceMappingURL=operations.d.ts.map