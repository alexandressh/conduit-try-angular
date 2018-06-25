import { Action } from '@ngrx/store';

export const LOADING_USER = '[Service] User being loaded';
export const LOGIN_USER =   '[Service] User logged in';
export const LOGOUT_USER =  '[Service] User logged out';

export class LoadingUserAction implements Action {
    readonly type = LOADING_USER;
    
    constructor(public payload: any) {}
}

export class LoginUserAction implements Action {
    readonly type = LOGIN_USER;
    
    constructor(public payload: any) {}
}

export class LogoutUserAction implements Action {
    readonly type = LOGOUT_USER;
    
    constructor(public payload: any) {}
}