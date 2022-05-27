import type { NextPage } from 'next';
import Head from 'next/head';
import SeriesPage from '@pages/series';

const Series: NextPage = () => {
    return (
        <>
            <Head>
                <title>What to watch - TV Series</title>
                <meta name='description' content='whatToWatch' />
            </Head>
            <div className='base_page_wrapper'>
                <SeriesPage/>
            </div>
        </>
    );
};

export default Series;
