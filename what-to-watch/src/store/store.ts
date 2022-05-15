import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {IList, IListItem} from '@interfaces/lists.interface';
import {IInitialState} from '@interfaces/common.interface';

const initialState:IInitialState = {
    homeLists: {loading: true},
    loading: true
};

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
