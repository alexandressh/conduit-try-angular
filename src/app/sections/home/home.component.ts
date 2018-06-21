import { Component, OnInit } from '@angular/core';

import { TagsService } from '../../services/tags/tags.service';
import { ArticleService } from '../../services/article/article.service';
import { Tag } from '../../models/tag';
import { Article, ArticleList, Author } from '../../models/article';

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
      private articleService: ArticleService
    ) { }

  ngOnInit() {
    this.tagsService.getAllTags().subscribe(data => {
      this.tags = _.map(data.tags, tag => {
        return {
          name: tag
        };
      });
    });

    this.articleService.getAllArticles().subscribe(data => {
      this.globalFeed = data;
    });

    this.articleService.getArticleFeed().subscribe(data => {
      this.myFeed =  data;
    });
  }

}
