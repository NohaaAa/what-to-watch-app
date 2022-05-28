import {ILoginObj, ISignupObj, IUser} from '@interfaces/user.interface';
import HttpRequest from '@services/integrations/http-request';
import {router} from 'next/client';

const AuthService = () => {
    return {
        login: (loginObj: ILoginObj): Promise<IUser> => {
            return HttpRequest({
                endpoint: 'auth/login',
                method: 'post',
                receiver: 'login',
                sender: 'login',
                body: {
                    email: loginObj.email,
                    password: loginObj.password
                }
            })
        },
        signup: (signupObj: ISignupObj): Promise<IUser> => {
            return HttpRequest({
                endpoint: 'auth/signup',
                method: 'post',
                receiver: 'signup',
                sender: 'signup',
                body: {
                    email: signupObj.email,
                    password: signupObj.password,
                    username: signupObj.username
                }
            })
        },
        logout: (): Promise<any> => {
            const uuid = sessionStorage.getItem('uuid');
            return new Promise<any>((resolve, reject) => {
                if(uuid) {
                    sessionStorage.removeItem('uuid');
                    resolve(true);
                } else {
                    reject(false);
                }
            })
        }
    }
};

export default AuthService();
