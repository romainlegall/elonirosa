import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ArticlesModule } from './articles/articles.module';
import { OrmConfig } from './config/orm.config';
import { ArticlesService } from './articles/articles.service';
import {ArticleRepository} from "./articles/article.repository";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    ArticlesModule,
    TypeOrmModule.forFeature([ArticleRepository]),
  ],
  controllers: [AppController],
  providers: [ArticlesService],
})
export class AppModule {}
