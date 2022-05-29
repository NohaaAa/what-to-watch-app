import environments from '@environments/index';
import RequestTokenService from '@services/integrations/http-request/request-token-service';
import axios from 'axios';

const HttpRequest = (
    request: {endpoint: string, method: "post" | "get" | "put", sender: string, receiver: string, body?: Object, withToken?:boolean}
): Promise<any> => {
    const _apiUrl: string = environments.apiURL;

    const getUserFromStorage = (): string | null => {
        return sessionStorage.getItem('token');
    };
    const checkIfUserLoggedIn = (): string | null => {
        let token = getUserFromStorage();
        if(token) {
            return token;
        }
        return null;
    };
    return new Promise<any>((resolve, reject) => {
        let token = checkIfUserLoggedIn();
        axios({
            method: request.method,
            url: `${_apiUrl}/${request.endpoint}`,
            data: request.body,
            headers: {
                token:request.withToken && token ? token : ''
            }
        }).then((response) => {
            if(response.status === 200 || response.status === 201) {
                resolve(response.data);
            }else {
                reject({
                    code:0,
                    message: response.data,
                    status: response.status
                });
            }
        }).catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}

export default HttpRequest;
