import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUserInfo();
    this.createForm();
  }

  onSubmit() {
    console.log(this.settingsForm);
    console.log(this.prepareUserInfo());
  }

  private prepareUserInfo(): User {
    const formModel = this.settingsForm.value;
    const user: User = {
      username: formModel.username as string,
      email: formModel.email as string,
      name: formModel.name as string,
      bio: formModel.bio as string,
      password: formModel.password as string
    }
    return user;
  }


  private createForm() {
     this.settingsForm = this.fb.group({
      username: [this.user.username, Validators.required],
      name: [this.user.name, Validators.required],
      bio: [this.user.bio, Validators.required],
      email: [this.user.email, Validators.required],
      password: ['', Validators.required]
    });
  }

}
