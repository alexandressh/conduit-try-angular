import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { EditorComponent } from './editor/editor.component';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from './shared/post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root.component';
import { AuthService } from './services/auth/auth.service';
import { TagsService } from './services/tags/tags.service';
import { ArticleService } from './services/article/article.service';
import { httpInterceptorProviders } from './http-interceptors';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    SignupComponent,
    EditorComponent,
    ArticleComponent,
    PostComponent,
    LoginComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
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
