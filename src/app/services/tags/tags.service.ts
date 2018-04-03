import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Tag } from '../../models/tag';

import * as _ from 'lodash';

@Injectable()
export class TagsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTopTags(): Array<Tag> {
      const tag: Tag = {
        name: 'ThisIsATag'
      };

      return _.fill(Array(10), tag);
  }

  getAllTags(): Observable<any> {
    const url = `${this.baseUrl}/tags`;
    return this.http.get(url);
    // .map(tags => {
    //   tags.map(tag => {
    //     const tagMap: Tag = {
    //       name: tag.name
    //     };
    //     return tagMap;
    //   });
    //   return tags;
    // });
  }

}
