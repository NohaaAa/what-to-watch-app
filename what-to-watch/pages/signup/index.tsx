import type { NextPage } from 'next';
import Head from 'next/head';
import SignupPage from '@pages/signup';
const Signup: NextPage = () => {
    return (
        <>
            <Head>
                <title>What to watch - Signup</title>
                <meta name='description' content='whatToWatch' />
            </Head>
            <div className='base_page_wrapper'>
                <SignupPage/>
            </div>
        </>
    );
};

export default Signup;
