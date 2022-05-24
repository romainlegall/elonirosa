"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    ensureValues(arg0) {
        throw new Error('Method not implemented.');
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            thrownewError(`config error - missing env.${key}`);
        }
        return value;
    }
    publicensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        returnthis;
    }
    publicgetPort() {
        returnthis.getValue('PORT', true);
    }
    publicisProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: ['**/*.entity{.ts,.js}'],
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration',
            },
            ssl: this.isProduction(),
        };
    }
    isProduction() {
        throw new Error('Method not implemented.');
    }
}
const configService = new ConfigService(process.env)
    .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
]);
exports.configService = configService;
function thrownewError(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=config.service.js.map