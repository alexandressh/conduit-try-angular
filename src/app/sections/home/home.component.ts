import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { Observable } from 'rxjs';

import { TagsService } from '../../services/tags/tags.service';
import { ArticleService } from '../../services/article/article.service';
import { Tag } from '../../models/tag';
import { Article, ArticleList, Author } from '../../models/article';

import * as fromArticle from '../../state-management/actions/article.actions';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tags: Array<Tag> = [];
  myFeed: ArticleList;
  globalFeed: ArticleList;

  constructor(
      private tagsService: TagsService,
      private articleService: ArticleService,
      private store: Store<any>
    ) { }

  ngOnInit() {
    this.store.dispatch({type: fromArticle.LOADING_FEED});
    this.store.dispatch({type: fromArticle.LOADING_TAGS});
    this.store.dispatch({type: fromArticle.LOADING_ARTICLES});
    
    this.store.subscribe(data => console.log(data));
    
    this.store.select('articles', 'globalArticles').subscribe(data => {debugger; this.globalFeed = data});
    this.store.select('articles', 'feedArticles').subscribe(data => this.myFeed = data)
    
    this.tagsService.getAllTags().subscribe(data => {
      this.tags = _.map(data.tags, tag => {
        return {
          name: tag
        };
      });
    });

    this.articleService.getAllArticles().subscribe(data => {
      this.store.dispatch({type: fromArticle.LOAD_ARTICLES, payload: data.articles});
    }, err => {
      this.store.dispatch({type: fromArticle.ERROR_ARTICLES});
    });

    this.articleService.getArticleFeed().subscribe(data => {
      this.store.dispatch({type: fromArticle.LOAD_FEED, payload: data.articles});
    }, err => {
      this.store.dispatch({type: fromArticle.ERROR_FEED});
    });
  }

}
