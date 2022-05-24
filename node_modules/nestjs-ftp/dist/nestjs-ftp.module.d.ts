import { DynamicModule } from '@nestjs/common';
import { IFtpConnectionOptions } from './interfaces/ftp.interface';
export declare class FtpModule {
    static forRootFtpAsync(options: IFtpConnectionOptions): DynamicModule;
}
