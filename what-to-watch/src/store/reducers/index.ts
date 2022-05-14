import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer';
import HomeListsReducer from './homeListsReducer';

export default combineReducers({
    moviesList: moviesReducer,
    homeLists: HomeListsReducer
});
