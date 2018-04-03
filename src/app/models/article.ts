import { Tag } from './tag';

export class Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: Array<Tag>;
  favorited: boolean;
  favoritesCount: number;
  author: {
            username: string;
            image: string;
            following: boolean;
  };
}

export class Articles {
    articles: Array<Article>;
    articleCount: number;
}
