import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from "@ngrx/store";

import { Observable } from 'rxjs';

import { LOGIN_USER, LOADING_USER } from '../../state-management/actions/auth.actions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store<any>
    ) { }

  ngOnInit() {
    this.isUserLoggedIn$ = this.store.select('auth', 'isLoggedIn');
  }

}
