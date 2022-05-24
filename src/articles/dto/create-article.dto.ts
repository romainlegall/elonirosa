export class CreateArticleDto {
  readonly title: string;
  readonly description?: string;
  readonly enabled: boolean;
  image?: string;
}
