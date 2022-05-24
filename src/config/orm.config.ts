import {TypeOrmModuleOptions} from "@nestjs/typeorm";

require('dotenv').config();

export const typeOrmModuleOptions:TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
        __dirname + '/../**/entities/*.entity.{ts,js}',
    ],
    /* Note : it is unsafe to use synchronize: true for schema synchronization
    on production once you get data in your database. */
    // synchronize: true,
    autoLoadEntities: true,
}

export const OrmConfig = {
    ...typeOrmModuleOptions,
    migrationsTableName: "migrations",
    migrations: [__dirname + '/../**/migrations/*.{ts,js}',],
    cli: {
        "migrationsDir": "src/migrations",
    }
};
export default OrmConfig;