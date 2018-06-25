import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class SectionsRoutingModule {}
