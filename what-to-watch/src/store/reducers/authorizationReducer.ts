import {SIGN_IN, SIGN_UP, ERROR, LOGOUT} from '@store/types';
import {IUser} from '@interfaces/user.interface';

const initialState:{userInfo?: IUser, loading: boolean} = {loading: true}
const authorizationReducer = (state = initialState, action: {type: string, payload:any}) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                userInfo: action.payload,
                loading: false
            }
        case SIGN_IN:
            return  {
                ...state,
                userInfo: action.payload,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                userInfo: action.payload ? null : '',
                loading: false
            }
        case ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authorizationReducer;
