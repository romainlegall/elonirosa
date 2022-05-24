import {MigrationInterface, QueryRunner} from "typeorm";

export class AddImageToArticles1649772685348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE articles ADD image VARCHAR(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE articles DROP image`);
    }

}
