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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const article_repository_1 = require("./article.repository");
let ArticlesService = class ArticlesService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async find(id) {
        return await this.articleRepository.findOne(id);
    }
    async findAll() {
        return await this.articleRepository.createQueryBuilder('q').getMany();
    }
    async last() {
        return await this.articleRepository.findOne({ order: { id: 'DESC' } });
    }
    async create(article, file) {
        article.image = file;
        return await this.articleRepository.save(article);
    }
    async update(id, article) {
        await this.articleRepository.update(id, article);
        const updatedArticle = await this.articleRepository.findOne(id);
        if (updatedArticle) {
            return updatedArticle;
        }
    }
    async delete(id) {
        await this.articleRepository.delete(id);
        return this.articleRepository.createQueryBuilder('q').getMany();
    }
    async FTPupload(filename) {
        const ftp = require("basic-ftp");
        require('dotenv').config();
        const client = new ftp.Client();
        client.ftp.verbose = true;
        try {
            await client.access({
                host: process.env.FTP_HOST,
                user: process.env.FTP_USER,
                password: process.env.FTP_PASSWD,
                secure: false
            });
            await client.ensureDir("images");
            await client.uploadFrom("./public/images/" + filename, filename);
        }
        catch (err) {
            console.log(err);
        }
        client.close();
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_repository_1.ArticleRepository)),
    __metadata("design:paramtypes", [article_repository_1.ArticleRepository])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map