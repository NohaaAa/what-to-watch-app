import type { NextPage } from 'next';
import Head from 'next/head';
import BookmarksPage from '@pages/bookmarks';

const Bookmarks: NextPage = () => {
    return (
        <>
            <Head>
                <title>What to watch - Bookmarks</title>
                <meta name='description' content='whatToWatch' />
            </Head>
            <div className='base_page_wrapper'>
                <BookmarksPage/>
            </div>
        </>
    );
};

export default Bookmarks;
