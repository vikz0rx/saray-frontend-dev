import { combineReducers } from 'redux';
import { userReducer } from './user';
import { newsReducer } from './news';
import { articleReducer } from './article';
import { photographsReducer } from './photographs';

export const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer,
    article: articleReducer,
    photographs: photographsReducer,
})