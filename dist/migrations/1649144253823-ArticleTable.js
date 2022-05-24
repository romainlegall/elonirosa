"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleTable1649144253823 = void 0;
const typeorm_1 = require("typeorm");
class ArticleTable1649144253823 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'articles',
            columns: [
                {
                    name: 'id',
                    type: 'int4',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'enabled',
                    type: 'boolean',
                    isNullable: false,
                },
            ],
        }), false);
    }
    async down(queryRunner) {
        queryRunner.query(`DROP TABLE articles`);
    }
}
exports.ArticleTable1649144253823 = ArticleTable1649144253823;
//# sourceMappingURL=1649144253823-ArticleTable.js.map