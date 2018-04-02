import { Injectable } from '@angular/core';

import { Article } from '../../models/article';

import * as _ from 'lodash';

@Injectable()
export class ArticleService {

  constructor() { }
  
  getMyFeed(): Array<Article> {
      const article: Article = {
            name: 'How to train your dragon',
            summary: 'this is how',
            content: 'How to train your dragon',
            author: 'alexandressh',
            date: new Date(),
            tags: []
      }
      
      return _.fill(Array(10), article);
  }
  
  getGlobalFeed(): Array<Article> {
       const article: Article = {
            name: 'How to train your dragon',
            summary: 'this is how',
            content: 'How to train your dragon',
            author: 'alexandressh',
            date: new Date(),
            tags: []
      }
      
      return _.fill(Array(10), article);
  }

}
