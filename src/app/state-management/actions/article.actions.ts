import { Action } from '@ngrx/store';

export const LOADING_FEED =   '[Service] Loading Feed';
export const LOAD_FEED =   '[Service] Load Feed';
export const ERROR_FEED =   '[Service] Error Feed';

export const LOADING_ARTICLES =  '[Service] Loading Articles';
export const LOAD_ARTICLES =  '[Service] Load Articles';
export const ERROR_ARTICLES =  '[Service] Error Articles';

export const LOADING_TAGS =  '[Service] Loading Tags';
export const LOAD_TAGS =  '[Service] Load Tags';
export const ERROR_TAGS =  '[Service] Error Tags';

export const LOAD_FAVORITES =  '[Service] Load Favorites';

export const CREATING_ARTICLE = '[Service] Creating new Article';
export const CREATE_ARTICLE = '[Service] Create new Article';
export const ERROR_ARTICLE = '[Service] Error saving article';

export class LoadFeedAction implements Action {
    readonly type = LOAD_FEED;
    
    constructor(public payload: any) {}
}

export class LoadArticlesAction implements Action {
    readonly type = LOAD_ARTICLES;
    
    constructor(public payload: any) {}
}

export class CreatingArticleAction implements Action {
    readonly type = CREATING_ARTICLE;
    
    constructor(public payload: any) {}
}

export class CreateArticleAction implements Action {
    readonly type = CREATE_ARTICLE;
    
    constructor(public payload: any) {}
}

export class ErrorArticleAction implements Action {
    readonly type = ERROR_ARTICLE;
    
    constructor(public payload: any) {}
}