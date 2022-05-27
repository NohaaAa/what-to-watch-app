import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {IInitialState} from '@interfaces/common.interface';

export type AppState = ReturnType<typeof store.getState>;

const initialState:IInitialState = {
    homeLists: {
        trends:{
            items:[],
            _id:'',
            listName:''
        },
        recommends:{
            items:[],
            _id:'',
            listName:''
        },
        loading: true},
    moviesList: {
        movies: [],
        loading: true
    },
    seriesList: {
        series: [],
        loading: true
    }
};
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
