import {NextComponentType} from 'next';
import {useDispatch, useSelector} from 'react-redux';
import {IInitialState} from '@interfaces/common.interface';
import React, {useEffect} from 'react';
import bookmarksStyles from './bookmarks.module.scss';
import {InfinitySpin} from 'react-loader-spinner';
import spinnerStyle from '@styles/components/Spinner.module.scss';
import {getBookmarkedMovies, getBookmarkedSeries} from '@store/actions/bookmarks';
import {ISeries} from '@interfaces/series.interface';
import MovieCard from '@components/movie-card';
import {IMovie} from '@interfaces/movies.interface';

const BookmarksPage: NextComponentType = () => {
    // const bookmarkedMoviesList: ReturnType<any> = useSelector<IInitialState>((state) => state.bookmarkedMoviesList.list);
    // const bookmarkedSeriesList: ReturnType<any> = useSelector<IInitialState>((state) => state.bookmarkedSeriesList.list);
    // const isLoadingMovies: ReturnType<any> = useSelector<IInitialState>((state) => state.bookmarkedMoviesList.loading)
    // const isLoadingSeries: ReturnType<any> = useSelector<IInitialState>((state) => state.bookmarkedSeriesList.loading)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookmarkedMovies())
        dispatch(getBookmarkedSeries())
    }, [dispatch]);
    return (
        <>
            <div className={bookmarksStyles.bookmarksContainer}>
                <h1 className={bookmarksStyles.listTitle}>Bookmarked Movies</h1>
                {/*{isLoadingMovies &&*/}
                {/*    <div className={spinnerStyle.spinner}>*/}
                {/*        <InfinitySpin color="#fc4747" width='auto'/>*/}
                {/*    </div>*/}
                {/*}*/}
                <div className={bookmarksStyles.bookmarksListWrapper}>
                    {/*{bookmarkedMoviesList.map((item: IMovie) => {*/}
                    {/*    return <MovieCard movie={item} key={item._id}/>*/}
                    {/*})}*/}
                </div>
            </div>
            <div className={bookmarksStyles.bookmarksContainer}>
                <h1 className={bookmarksStyles.listTitle}>Bookmarked TV Series</h1>
                {/*{isLoadingSeries &&*/}
                {/*    <div className={spinnerStyle.spinner}>*/}
                {/*        <InfinitySpin color="#fc4747" width='auto'/>*/}
                {/*    </div>*/}
                {/*}*/}
                {/*<div className={bookmarksStyles.bookmarksListWrapper}>*/}
                {/*    {bookmarkedSeriesList.map((item: ISeries) => {*/}
                {/*        return <MovieCard movie={item} key={item._id}/>*/}
                {/*    })}*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default BookmarksPage;

