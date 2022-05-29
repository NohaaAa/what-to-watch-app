import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer';
import HomeListsReducer from './homeListsReducer';
import seriesReducer from '@store/reducers/seriesReducer';
import AuthorizationReducer from '@store/reducers/authorizationReducer';
import UserBookmarksReducer from '@store/reducers/userBookmarksReducer';

export default combineReducers({
    userInfo: AuthorizationReducer,
    homeLists: HomeListsReducer,
    moviesList: moviesReducer,
    seriesList: seriesReducer,
    bookmarkedItemsList: UserBookmarksReducer
});
