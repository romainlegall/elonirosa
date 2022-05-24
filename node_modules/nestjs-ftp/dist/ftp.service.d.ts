/// <reference types="node" />
import { FileInfo, FTPResponse, UploadOptions } from 'basic-ftp';
import { Readable, Writable } from 'stream';
import { IConnectionOptions } from './interfaces/connection-options.interface';
export declare class FtpService {
    private _options;
    private readonly _ftpClient;
    constructor(_options: IConnectionOptions);
    list(path?: string): Promise<FileInfo[]>;
    downloadTo(destination: Writable | string, fromRemotePath: string, startAt?: number): Promise<FTPResponse>;
    upload(source: Readable | string, toRemotePath: string, options?: UploadOptions): Promise<FTPResponse>;
    delete(fileRemotePath: string): Promise<FTPResponse>;
    size(fileRemotePath: string): Promise<number>;
}
