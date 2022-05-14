import {GET_MOVIES} from '../types';

const initialState: {movies:any[], loading: boolean} = {
    movies:[],
    loading: true
};

const moviesReducer =  (state = initialState, action: {type: String, payload: any}): {movies: any[], loading: boolean} => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }

        default: return state;
    }
}

export default moviesReducer;
