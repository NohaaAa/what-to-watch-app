import {ILoginObj, IUser} from '@interfaces/user.interface';
import authService from '@services/integrations/auth.service';
import {ERROR, SIGN_IN} from '@store/types';

export const login = (loginData: ILoginObj) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    await authService.login(loginData).then((userInfo) => {
        dispatch({
            type: SIGN_IN,
            payload: userInfo
        });
        sessionStorage.setItem('uuid', userInfo._id);
    }).catch((err) => {
        dispatch({
            type: ERROR,
            payload: "Something went wrong!"
        })
    })
}
