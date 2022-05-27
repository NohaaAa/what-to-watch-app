import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer';
import HomeListsReducer from './homeListsReducer';
import seriesReducer from '@store/reducers/seriesReducer';

export default combineReducers({
    homeLists: HomeListsReducer,
    moviesList: moviesReducer,
    seriesList: seriesReducer
});
