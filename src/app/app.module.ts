import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 


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
import { AuthService } from './services/auth/auth.service'


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
    AppRoutingModule
  ],
  providers: [
    AuthService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
