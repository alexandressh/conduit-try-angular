import { Component, OnInit } from '@angular/core';

import { TagsService } from '../services/tags/tags.service';
import { ArticleService } from '../services/article/article.service';
import { Tag } from '../models/tag';
import { Article } from '../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tags: Array<Tag>;
  myFeed: Array<Article>;
  globalFeed: Array<Article>;

  constructor(
      private tagsService: TagsService,
      private articleService: ArticleService
    ) { }

  ngOnInit() {
    this.tags = this.tagsService.getTopTags();
    this.myFeed = this.articleService.getMyFeed();
    this.globalFeed = this.articleService.getGlobalFeed();
  }

}
