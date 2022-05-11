import { combineReducers } from 'redux'
import moviesReducer from '@app-redux/reducers/moviesReducer';

export default combineReducers({
    moviesList: moviesReducer
});
