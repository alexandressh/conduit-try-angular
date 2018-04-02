import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  
  onSubmit() {
    console.log(this.signupForm);
    console.log(this.prepareUserInfo());
  }
  
  private prepareUserInfo(): User {
    const formModel = this.signupForm.value;
    const user: User = {
      email: formModel.email as string,
      name: formModel.name as string, 
      password: formModel.password as string
    }
    return user;
  }
  
  private createForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
