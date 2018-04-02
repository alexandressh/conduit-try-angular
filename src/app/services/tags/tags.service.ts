import { Injectable } from '@angular/core';

import { Tag } from '../../models/tag';

import * as _ from 'lodash';

@Injectable()
export class TagsService {

  constructor() { }
  
  getTopTags(): Array<Tag> {
      const tag: Tag = {
        name: 'ThisIsATag'
      };
      
      return _.fill(Array(10), tag);
  }

}
