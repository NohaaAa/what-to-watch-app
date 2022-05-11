import axios from 'axios';
import {GET_MOVIES} from '@app-redux/types';

const baseURL = 'https://00d6a5f7-4064-4ef6-85d5-b0e904554ce6.mock.pstmn.io/api';

export const getAllMovies = () => async (dispatch) => {
    try {
        let response = await axios.post(`${baseURL}/auth/login`, {
            "email": "test-1@gmail.com",
            "password": "admin_111"
        });
        console.log(response);
        dispatch({
            type: GET_MOVIES,
            payload: response
        })
    }catch (err) {
        dispatch( {
            type: GET_MOVIES,
            payload: err,
        })
    }

}
