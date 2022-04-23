import type { NextPage } from 'next';
import Head from 'next/head';
import LoginPage from '@pages/login';

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>What to watch - Login</title>
                <meta name='description' content='whatToWatch' />
            </Head>
            <div className='base_page_wrapper'>
                <LoginPage/>
            </div>
        </>
    );
};

export default Login;
