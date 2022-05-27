import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer';
import HomeListsReducer from './homeListsReducer';
import seriesReducer from '@store/reducers/seriesReducer';
import AuthorizationReducer from '@store/reducers/authorizationReducer';

export default combineReducers({
    userInfo: AuthorizationReducer,
    homeLists: HomeListsReducer,
    moviesList: moviesReducer,
    seriesList: seriesReducer
});
