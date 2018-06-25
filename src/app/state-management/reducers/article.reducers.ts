import { ActionReducer, Action } from "@ngrx/store";

import * as fromArticle from '../actions/article.actions';

export const articleReducer: ActionReducer<any> = (state = {}, action: Action) => {
    console.log('action', action);
    
    switch(action.type) {
        case fromArticle.LOADING_FEED: {
            return {...state, loading: true, error: false};
        }
        case fromArticle.LOAD_FEED: {
            return {...state, feedArticles: action['payload'], loading: false, error: false};
        }
         case fromArticle.ERROR_FEED: {
            return {...state, loading: false, error: true};
        }
        //-------------------------
        case fromArticle.LOADING_ARTICLES: {
            return {...state, loading: true, error: false};
        }
        case fromArticle.LOAD_ARTICLES: {
            return {...state, globalArticles: action['payload'], loading: false, error: false};
        }
         case fromArticle.ERROR_ARTICLES: {
            return {...state, loading: false, error: true};
        }
        //-------------------------
        case fromArticle.LOAD_FAVORITES: {
            return state;
        }
        //-------------------------
        case fromArticle.CREATING_ARTICLE: {
            return {...state, loading: true, error: false};
        }
        case fromArticle.CREATE_ARTICLE: {
            return { ... state, loading: false, error: false};;
        }
        case fromArticle.ERROR_ARTICLE: {
            return { ...state, loading: false, error: false};
        }
        default: {
            return state;
        }   
    }
}