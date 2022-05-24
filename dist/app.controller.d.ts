import { ArticlesService } from './articles/articles.service';
export declare class AppController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    root(): Promise<{
        articles: import("./entities/article.entity").Article[];
        col_right: string;
    }>;
}
