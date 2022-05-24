import { ArticlesService } from './articles.service';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from "./dto/update-article.dto";
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    find(id: string): Promise<import("../entities/article.entity").Article>;
    findAll(): Promise<import("../entities/article.entity").Article[]>;
    createArticle(newArticle: CreateArticleDto, file: any): Promise<CreateArticleDto & import("../entities/article.entity").Article>;
    updateArticle(article: UpdateArticleDto, id: string): Promise<Article>;
    deleteArticle(id: string): Promise<import("../entities/article.entity").Article[]>;
}
