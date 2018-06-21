import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    articleService: ArticleService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    console.log(this.articleForm);
    console.log(this.prepareArticleInfo());
  }

  private prepareArticleInfo(): Article {
    const formModel = this.articleForm.value;
     const article: Article = {
      title: formModel.title as string,
      description: formModel.description as string,
      body: formModel.body as string,
      tagList: formModel.tags.split('.'),
      author: {username: 'alexandressh@gmail.com'},
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
