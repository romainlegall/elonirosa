/// <reference types="node" />
import { ConnectionOptions as TLSConnectionOptions } from "tls";
export interface IConnectionOptions {
    readonly host?: string;
    readonly port?: number;
    readonly user?: string;
    readonly password?: string;
    readonly secure?: boolean | "implicit";
    readonly secureOptions?: TLSConnectionOptions;
}
