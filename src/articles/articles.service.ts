import {Injectable, NotFoundException} from '@nestjs/common';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import {UpdateArticleDto} from "./dto/update-article.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ArticleRepository} from "./article.repository";

@Injectable()
export class ArticlesService {
  constructor(
      @InjectRepository(ArticleRepository) private articleRepository: ArticleRepository,
  ) {}
  async find(id: string) {
    return await this.articleRepository.findOne(id);
  }

  async findAll() {
    return await this.articleRepository.createQueryBuilder('q').getMany();
  }

  async last() {
    return await this.articleRepository.findOne({order: {id: 'DESC'}})
  }

  async create(article: CreateArticleDto, file: string) {
    article.image = file;
    return await this.articleRepository.save(article);
  }

  async update(id: string, article: UpdateArticleDto): Promise<Article> {
    await this.articleRepository.update(id, article);
    const updatedArticle = await this.articleRepository.findOne(id);
    if (updatedArticle) {
      return updatedArticle
    }
  }

  async delete(id: string) {
    await this.articleRepository.delete(id);
    return this.articleRepository.createQueryBuilder('q').getMany();
  }
  
  async FTPupload(filename: string) {
    const ftp = require("basic-ftp")
    require('dotenv').config();
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
      await client.access({
        host:  process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWD,
        secure: false
      })
      await client.ensureDir("images")

      await client.uploadFrom("./public/images/"+filename, filename)
    }
    catch(err) {
      console.log(err)
    }
    client.close()
  }
}
