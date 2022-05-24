"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FtpService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const basic_ftp_1 = require("basic-ftp");
let FtpService = class FtpService {
    constructor(_options) {
        this._options = _options;
        common_1.Logger.log('initialising FTP Module', 'FTP SERVICE');
        this._ftpClient = new basic_ftp_1.Client();
    }
    async list(path) {
        try {
            await this._ftpClient.access(this._options);
            return await this._ftpClient.list(path);
        }
        catch (err) {
            this._ftpClient.close();
            throw err;
        }
        finally {
            this._ftpClient.close();
        }
    }
    async downloadTo(destination, fromRemotePath, startAt) {
        try {
            await this._ftpClient.access(this._options);
            return await this._ftpClient.downloadTo(destination, fromRemotePath, startAt);
        }
        catch (err) {
            this._ftpClient.close();
            throw err;
        }
        finally {
            this._ftpClient.close();
        }
    }
    async upload(source, toRemotePath, options) {
        try {
            await this._ftpClient.access(this._options);
            return await this._ftpClient.uploadFrom(source, toRemotePath, options);
        }
        catch (err) {
            this._ftpClient.close();
            throw err;
        }
        finally {
            this._ftpClient.close();
        }
    }
    async delete(fileRemotePath) {
        try {
            await this._ftpClient.access(this._options);
            return await this._ftpClient.remove(fileRemotePath);
        }
        catch (err) {
            this._ftpClient.close();
            throw err;
        }
        finally {
            this._ftpClient.close();
        }
    }
    async size(fileRemotePath) {
        try {
            await this._ftpClient.access(this._options);
            return await this._ftpClient.size(fileRemotePath);
        }
        catch (err) {
            this._ftpClient.close();
            throw err;
        }
        finally {
            this._ftpClient.close();
        }
    }
};
FtpService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.CONFIG_CONNECTION_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], FtpService);
exports.FtpService = FtpService;
//# sourceMappingURL=ftp.service.js.map