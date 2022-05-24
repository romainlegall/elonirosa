import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public/javascripts'));
  app.useStaticAssets(join(__dirname, '..', 'public/styles'));
  app.useStaticAssets(join(__dirname, '..', 'public/images'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const serverPort = process.env['PORT'] ? process.env['PORT'] : 3000;
  await app.listen(serverPort);
}
bootstrap();
