import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    const user: User = this.prepareUserInfo();
    this.authService.authenticateUser(user).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }

  private prepareUserInfo(): User {
    const formModel = this.loginForm.value;
    const user: User = {
      email: formModel.email as string,
      name: '',
      bio: '',
      username: formModel.email as string,
      password: formModel.password as string
    };
    return user;
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
