import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Article, Articles } from '../../models/article';
import { environment } from '../../../environments/environment';

import * as _ from 'lodash';

@Injectable()
export class ArticleService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getArticleFeed(): Observable<Articles> {
    const url = `${this.baseUrl}/articles/feed`;
    return this.http.get<Articles>(url);
  }

  getAllArticles(): Observable<Articles> {
    const url = `${this.baseUrl}/articles`;
    return this.http.get<Articles>(url);
  }

  getArticlesByAuthor(author: string): Observable<Articles> {
    const url = `${this.baseUrl}/articles?author=${author}`;
    return this.http.get<Articles>(url);
  }

  getArticlesBySlug(slug: string): Observable<Articles> {
    const url = `${this.baseUrl}/articles/${slug}`;
    return this.http.get<Articles>(url);
  }

  getFavoritedFromUser(user: string): Observable<Articles> {
    const url = `${this.baseUrl}/articles?favorited=${user}`;
    return this.http.get<Articles>(url);
  }

  getArticlesByTag(tag: string): Observable<Articles> {
    const url = `${this.baseUrl}/articles?tag=${tag}`;
    return this.http.get<Articles>(url);
  }
}
