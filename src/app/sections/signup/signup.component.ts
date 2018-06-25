import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";

import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
   providers: [NgbPopoverConfig]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<any>,
    private ngbPopoverConfig: NgbPopoverConfig
  ) {
    this.ngbPopoverConfig.placement = 'right';
    this.ngbPopoverConfig.triggers = 'hover';
  }

  ngOnInit() {
    console.log('created');
    this.store.dispatch({type: 'Any'});
    this.createForm();

  }

  onSubmit() {
    const isFormValid = this.validateForm();
    const user: User = this.prepareUserInfo();
    if (!isFormValid) {
      return false;
    }

    this.authService.registerNewUser(user).subscribe(data => {
      console.log(data);
    });
  }

  private validateForm(): boolean {
    const formModel = this.signupForm.value;
    const invalidPassword = formModel.password !== formModel.passwordConfirmation;

    if (invalidPassword) {
      return false;
    }

    return true;
  }

  private prepareUserInfo(): User {
    const formModel = this.signupForm.value;

    const user: User = {
      username: formModel.username as string,
      email: formModel.email as string,
      name: formModel.name as string,
      bio: '',
      password: formModel.password as string
    };
    return user;
  }

  private createForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      name: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
      passwordConfirmation: ['',  Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

}
