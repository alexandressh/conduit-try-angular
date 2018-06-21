import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth/auth.service';
import { TagsService } from './services/tags/tags.service';
import { ArticleService } from './services/article/article.service';
import { httpInterceptorProviders } from './http-interceptors';
import { SharedModule } from './shared/shared.module';
import { SectionsModule } from './sections/sections.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    SectionsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    TagsService,
    ArticleService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
