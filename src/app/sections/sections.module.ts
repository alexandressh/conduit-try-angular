import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SectionsRoutingModule } from './sections.routing.module';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { EditorComponent } from './editor/editor.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    SettingsComponent,
    SignupComponent,
    EditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SectionsRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [
  ]
})
export class SectionsModule { }
