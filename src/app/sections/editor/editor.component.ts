import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article/article.service';
import { CREATING_ARTICLE, CREATE_ARTICLE, ERROR_ARTICLE } from '../../state-management/actions/article.actions';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  articleForm: FormGroup;
  private username: string;
  

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.createForm();
    this.store.select('auth', 'username').subscribe(name => this.username = name);
  }

  onSubmit() {
    const article = this.prepareArticleInfo();
    this.store.dispatch({type: CREATING_ARTICLE});
    this.articleService.createArticle(article).subscribe(
      (data) => this.store.dispatch({type: CREATE_ARTICLE, payload: data}),
      (err) => this.store.dispatch({type: ERROR_ARTICLE})
      )
  }

  private prepareArticleInfo(): Article {
    const formModel = this.articleForm.value;
     const article: Article = {
      title: formModel.title as string,
      description: formModel.description as string,
      body: formModel.body as string,
      tagList: formModel.tagList.split('.'),
      author: {username: this.username},
      createdAt: (new Date()).toString()
    };
    return article;
  }

  private createForm() {
     this.articleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      body: ['', Validators.required],
      tagList: ['', Validators.required]
    });
  }

}
