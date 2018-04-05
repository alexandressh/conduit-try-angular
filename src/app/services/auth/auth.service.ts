import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, filter, map, reduce } from 'rxjs/operators';

import { User } from '../../models/user';
import { environment } from './../../../environments/environment';

import * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  baseUrl = environment.baseUrl;
  isUserLoggedInSubject = new Subject();

  constructor(private http: HttpClient) {}

  authenticateUser(user: User): Observable<any> {
    const url = `${this.baseUrl}/users/login`;
    const userString = JSON.stringify({
      user: {
        email: user.email,
        password: user.password,
        username: user.username
      }
    });
    return this.http.post<User>(url, { user: user }).pipe(
      this.registerJWT()
    );
  }

  registerNewUser(user: User): Observable<any> {
    const url = `${this.baseUrl}/users`;
    const userString = JSON.stringify({
      user: {
        email: user.email,
        password: user.password,
        username: user.username
      }
    });
    return this.http.post<User>(url, { user: user }).pipe(
      this.registerJWT()
    );
  }

  getUserInfo() {
    return null;
  }

  getAuthorizationToken(): string {
    return _.get(localStorage, 'currentUser', '');
  }

  logout() {
    localStorage.clear();
    this.isUserLoggedInSubject.next(false);
  }

  private registerJWT() {
    return map(data => {
      const token = _.get(data, 'user.token', null);

      if (token) {
        localStorage.setItem('currentUser', token);
        this.isUserLoggedInSubject.next(true);
        return true;
      }

      return false;
    });
  }

  private handleError(url: string, obj?: any) {
    console.error(url, obj);
    return obj;
  }

}
