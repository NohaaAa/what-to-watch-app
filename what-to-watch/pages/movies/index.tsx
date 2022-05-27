import type { NextPage } from 'next';
import Head from 'next/head';
import MoviesPage from '@pages/movies';

const Movies: NextPage = () => {
    return (
        <>
            <Head>
                <title>What to watch - Movies</title>
                <meta name='description' content='whatToWatch' />
            </Head>
            <div className='base_page_wrapper'>
               <MoviesPage />
            </div>
        </>
    );
};

export default Movies;
