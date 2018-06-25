import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';

import { AuthService } from '../services/auth/auth.service';
import { TagsService } from '../services/tags/tags.service';
import { ArticleService } from '../services/article/article.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
    ],
  declarations: [
        PostComponent
    ],
   exports: [
        PostComponent
    ],
    providers: [
      AuthService,
      TagsService,
      ArticleService
    ]
})
export class SharedModule { }