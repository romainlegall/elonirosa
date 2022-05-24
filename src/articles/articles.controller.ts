import {Body, Controller, Get, Param, Post, Patch, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from "./dto/update-article.dto";
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.articlesService.find(id);
  }

  @Get()
  async findAll() {
    return await this.articlesService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', { dest: './public/images' }))
  async createArticle(@Body() newArticle: CreateArticleDto, @UploadedFile() file) {
    //return await this.articlesService.FTPupload(file.filename);
    return await this.articlesService.create(newArticle, file.filename);
  }

  @Patch(':id')
  async updateArticle(@Body() article: UpdateArticleDto, @Param('id') id: string ) {
    return await this.articlesService.update(id, article);
  }
  
  @Delete(':id')
  async deleteArticle(@Param('id') id: string) {
    return await this.articlesService.delete(id);
  }
}
