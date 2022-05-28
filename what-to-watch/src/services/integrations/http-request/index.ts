import environments from '@environments/index';
import RequestTokenService from '@services/integrations/http-request/request-token-service';
import axios from 'axios';

const HttpRequest = (
    request: {endpoint: string, method: "post" | "get" | "put", sender: string, receiver: string, body?: Object, token?: string}
): Promise<any> => {
    const _apiUrl: string = environments.apiURL;

    const getUserFromStorage = (): string | null => {
        return sessionStorage.getItem('uuid');
    };
    const checkIfUserLoggedIn = (): string | null => {
        let uuid = getUserFromStorage();
        if(uuid) {
            return uuid;
        }
        return null;
    };
    return new Promise<any>((resolve, reject) => {
        let uuid = checkIfUserLoggedIn();
        // let requestToken = RequestTokenService({
        //     sender: request.sender,
        //     receiver: request.receiver,
        //     uuid: uuid ? uuid,
        //     body: request.body ? request.body : {}
        // });
        axios({
            method: request.method,
            url: `${_apiUrl}/${request.endpoint}`,
            data: request.body,
            headers: {
                token: request.token ? request.token : ''
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
