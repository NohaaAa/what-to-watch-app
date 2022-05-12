import axios from 'axios';

const AuthService = () => {
    return {
        login: (): Promise<any> => {
            return axios.post('https://what-to-watch-server-nohaaaa.vercel.app/api/auth/login', {
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
