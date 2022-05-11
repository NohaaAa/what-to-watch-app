import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import { createWrapper } from "next-redux-wrapper";
import rootReducer from '@app-redux/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState: any = ''

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


const makeStore = () => store;

export const wrapper = createWrapper(makeStore)
