import { Tag } from './tag';

export interface Author {
  username?: string;
  image?: string;
  following?: boolean;
}

export interface Article {
  slug?: string;
  title?: string;
  description?: string;
  body?: string;
  createdAt?: string;
  updatedAt?: string;
  tagList?: Array<Tag>;
  favorited?: boolean;
  favoritesCount?: number;
  author?: Author;
}

export interface ArticleList {
    articles: Array<Article>;
    articleCount: number;
}
