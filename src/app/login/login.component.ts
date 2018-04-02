import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.createForm();
  }
  
  onSubmit() {
    console.log(this.loginForm);
    console.log(this.prepareUserInfo());
  }
  
  private prepareUserInfo(): User {
    const formModel = this.loginForm.value;
    const user: User = {
      email: formModel.email as string,
      name: '', 
      password: formModel.password as string
    }
    return user;
  }
  
  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
}
