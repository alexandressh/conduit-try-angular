import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Article } from '../models/article';
import { ArticleService } from '../services/article/article.service';

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
      name: formModel.name as string,
      summary: formModel.summary as string, 
      content: formModel.content as string,
      tags: formModel.tags,
      author: 'alexandressh@gmail.com',
      date: new Date()
    }
    return article;
  }
  
  private createForm() {
     this.articleForm = this.fb.group({
      name: ['', Validators.required],
      summary: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['', Validators.required]
    });
  }

}
