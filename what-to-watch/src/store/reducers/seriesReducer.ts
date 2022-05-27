import {ERROR, GET_SERIES} from '../types';
import {ISeries} from '@interfaces/series.interface';

const initialState: {series:any[], loading: boolean, error?: any} = {
    series:[],
    loading: true
};

const seriesReducer =  (state = initialState, action: {type: String, payload: ISeries[]}): {series: ISeries[], loading: boolean, error?:any} => {
    switch (action.type) {
        case GET_SERIES:
            return {
                ...state,
                series: action.payload,
                loading: false
            }
        case ERROR:
            return {
                loading: false,
                series: [],
                error: action.payload
            }

        default: return state;
    }
}

export default seriesReducer;
