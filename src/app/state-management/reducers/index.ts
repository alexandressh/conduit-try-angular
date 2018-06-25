import { combineReducers } from '@ngrx/store';

import * as fromArticles from './article.reducers';
import * as fromAuth from './auth.reducers';

export const reducers = {
    articles: fromArticles.articleReducer,
    auth: fromAuth.authReducer
}

export const reducer: any = (state: any, action: any) => {
    return combineReducers(reducers);
}