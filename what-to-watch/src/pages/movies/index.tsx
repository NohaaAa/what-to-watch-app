import {NextComponentType} from 'next';
import {useDispatch, useSelector} from 'react-redux';
import {IInitialState} from '@interfaces/common.interface';
import React, {useEffect} from 'react';
import {getAllMovies} from '@store/actions/movies';
import MovieCard from '@components/movie-card';
import {IMovie} from '@interfaces/movies.interface';
import moviesStyles from './movies.module.scss';
import homeStyles from '@pages/home/home.module.scss';
import {InfinitySpin} from 'react-loader-spinner';
import spinnerStyle from '@styles/components/Spinner.module.scss';

const MoviesPage: NextComponentType = () => {
    const moviesList: ReturnType<any> = useSelector<IInitialState>((state) => state.moviesList.movies);
    const isLoadingData: ReturnType<any> = useSelector<IInitialState>((state) => state.moviesList.loading)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);
    return (
        <>
            <div className={moviesStyles.moviesContainer}>
                <h1 className={moviesStyles.listTitle}>Movies</h1>
                {isLoadingData &&
                    <div className={spinnerStyle.spinner}>
                        <InfinitySpin color="#fc4747" width='auto'/>
                    </div>
                }
                <div className={moviesStyles.moviesListWrapper}>
                    {moviesList.map((item: IMovie) => {
                        return <MovieCard movie={item} key={item._id}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default MoviesPage;

