"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddImageToArticles1649772685348 = void 0;
class AddImageToArticles1649772685348 {
    async up(queryRunner) {
        queryRunner.query(`ALTER TABLE articles ADD image VARCHAR(100)`);
    }
    async down(queryRunner) {
        queryRunner.query(`ALTER TABLE articles DROP image`);
    }
}
exports.AddImageToArticles1649772685348 = AddImageToArticles1649772685348;
//# sourceMappingURL=1649772685348-AddImageToArticles.js.map