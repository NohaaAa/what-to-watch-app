import {GET_TRENDING, GET_RECOMMENDS,ERROR} from '../types';
import {} from '../types';
import {IList} from '@interfaces/lists.interface';

const initialState: {trends?:IList, recommends?:IList, loading: boolean} = {loading: true};

const homeListsReducer =  (state = initialState, action: {type: String, payload: any}) => {
    switch (action.type) {
        case GET_TRENDING:
            return {
                ...state,
                trends: action.payload,
                loading: false
            }
        case GET_RECOMMENDS:
            return {
                ...state,
                recommends: action.payload,
                loading: false
            }
        case ERROR:
            return  {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default homeListsReducer;
