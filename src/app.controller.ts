import { Get, Controller, Render } from '@nestjs/common';
import { ArticlesService } from './articles/articles.service';

@Controller()
export class AppController {
  constructor(private readonly articlesService: ArticlesService) {}
  
  @Get()
  @Render('index')
  async root() {
    return {
      articles: await this.articlesService.findAll(),
      col_right: ''
    };
  }
} 