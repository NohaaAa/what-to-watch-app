// import RequestTokenService from '@services/integrations/http-request/request-token-service';
// import environments from '@environments/index';
// import axios from 'axios';
//
// const HttpRequest = (
//   request: { endpoint: string; sender: string; receiver: string; body: Object },
//   fromAlmentor?: boolean,
//   authCheck?: boolean
// ): Promise<any> => {
//   const _apiUrl: string = environments.apiURL;
//   const getUserFromStorage = (): string | undefined => undefined;
//   const checkIfUserLoggedIn = (): string | undefined => {
//     let uuid = getUserFromStorage();
//     if (uuid) {
//       return uuid;
//     }
//     return undefined;
//   };
//
//   return new Promise<any>((resolve, reject) => {
//     let uuid = checkIfUserLoggedIn();
//     let requestToken = RequestTokenService({
//       sender: request.sender,
//       receiver: request.receiver,
//       uuid: uuid,
//       body: request.body,
//     });
//
//     axios(`${_apiUrl}/${request.endpoint}`, {
//       method: 'POST',
//       data: requestToken,
//       headers: {
//         token: re
//       }
//     })
//       .then((response) => {
//         if (response.ok) {
//           response.json().then((res: IHttpResponse) => {
//             if (res.success) {
//               resolve(res.data);
//             } else {
//               reject(res.error);
//             }
//           });
//         } else {
//           console.log(requestToken)
//           reject({
//             code: 0,
//             message: 'something went wrong',
//             status: response.status,
//           });
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         reject(error);
//       });
//   });
// };
//
// export default HttpRequest;
