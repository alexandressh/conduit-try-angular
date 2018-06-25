import { ActionReducer, Action } from "@ngrx/store";

import { User } from '../../models/user';
import { LOGIN_USER, LOGOUT_USER, LOADING_USER } from '../actions/auth.actions';


const initialState = {
    username: null,
    email: null,
    bio: null,
    name: null,
    password: null,
    token: null,
    isLoggedIn: false
}

export const authReducer: ActionReducer<User> = (state = initialState, action: Action) => {
    
    switch(action.type) {
        case LOADING_USER: {
            return state;
        }
        case LOGIN_USER: {
            return { ...state, ...action['payload'], isLoggedIn: true };
        }
        case LOGOUT_USER: {
            return { ... initialState , isLoggedIn: false };
        }
        default: {
            return state;
        }
    }
}