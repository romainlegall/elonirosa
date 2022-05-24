"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmConfig = exports.typeOrmModuleOptions = void 0;
require('dotenv').config();
exports.typeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
        __dirname + '/../**/entities/*.entity.{ts,js}',
    ],
    autoLoadEntities: true,
};
exports.OrmConfig = Object.assign(Object.assign({}, exports.typeOrmModuleOptions), { migrationsTableName: "migrations", migrations: [__dirname + '/../**/migrations/*.{ts,js}',], cli: {
        "migrationsDir": "src/migrations",
    } });
exports.default = exports.OrmConfig;
//# sourceMappingURL=orm.config.js.map