import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";

import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { LOGIN_USER, LOADING_USER } from '../../state-management/actions/auth.actions';

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
    private router: Router,
    private store: Store<any>
    ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    const user: User = this.prepareUserInfo();
    
    this.store.dispatch({type: LOADING_USER});
    this.authService.authenticateUser(user).subscribe(data => {
      const payload = {...user, ...data.user};
      this.store.dispatch({type: LOGIN_USER, payload});
      this.router.navigate(['/home']);
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
