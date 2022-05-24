import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from "./dto/update-article.dto";
import { ArticleRepository } from "./article.repository";
export declare class ArticlesService {
    private articleRepository;
    constructor(articleRepository: ArticleRepository);
    find(id: string): Promise<import("../entities/article.entity").Article>;
    findAll(): Promise<import("../entities/article.entity").Article[]>;
    last(): Promise<import("../entities/article.entity").Article>;
    create(article: CreateArticleDto, file: string): Promise<CreateArticleDto & import("../entities/article.entity").Article>;
    update(id: string, article: UpdateArticleDto): Promise<Article>;
    delete(id: string): Promise<import("../entities/article.entity").Article[]>;
    FTPupload(filename: string): Promise<void>;
}
