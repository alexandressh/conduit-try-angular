import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Article, ArticleList } from '../../models/article';
import { environment } from '../../../environments/environment';

import * as _ from 'lodash';

@Injectable()
export class ArticleService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getArticleFeed(): Observable<ArticleList> {
    const url = `${this.baseUrl}/articles/feed`;
    return this.http.get<ArticleList>(url);
  }

  getAllArticles(): Observable<ArticleList> {
    const url = `${this.baseUrl}/articles`;
    return this.http.get<ArticleList>(url);
  }

  getArticlesByAuthor(author: string): Observable<ArticleList> {
    const url = `${this.baseUrl}/articles?author=${author}`;
    return this.http.get<ArticleList>(url);
  }

  getArticlesBySlug(slug: string): Observable<ArticleList> {
    const url = `${this.baseUrl}/articles/${slug}`;
    return this.http.get<ArticleList>(url);
  }

  getFavoritedFromUser(user: string): Observable<ArticleList> {
    const url = `${this.baseUrl}/articles?favorited=${user}`;
    return this.http.get<ArticleList>(url);
  }

  getArticlesByTag(tag: string): Observable<ArticleList> {
    const url = `${this.baseUrl}/articles?tag=${tag}`;
    return this.http.get<ArticleList>(url);
  }
}
