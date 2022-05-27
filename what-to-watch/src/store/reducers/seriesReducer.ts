import {GET_SERIES} from '../types';
import {ISeries} from '@interfaces/series.interface';

const initialState: {series:any[], loading: boolean} = {
    series:[],
    loading: true
};

const moviesReducer =  (state = initialState, action: {type: String, payload: ISeries[]}): {series: ISeries[], loading: boolean} => {
    switch (action.type) {
        case GET_SERIES:
            return {
                ...state,
                series: action.payload,
                loading: false
            }

        default: return state;
    }
}

export default moviesReducer;
