import axios from 'axios';

const AuthService = () => {
    return {
        login: (): Promise<any> => {
            return axios.post('https://31e767ed-708b-4f6d-bb96-526aa56607af.mock.pstmn.io/api/auth/login', {
                email: "test-1@gmail.com",
                password: "admin_111"
            }, {
                headers: {
                    // 'Authorization': `Basic ${token}`
                },
            }).then((res) => {
                console.log(res)
            })
        }
    }
};

export default AuthService();
const baseURL = 'https://00d6a5f7-4064-4ef6-85d5-b0e904554ce6.mock.pstmn.io/api';
