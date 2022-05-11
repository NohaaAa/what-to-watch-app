import React, {useEffect} from 'react';
import {NextComponentType} from 'next';
import MovieCard from '@components/movie-card';
import TrendingCard from '@components/trending-card';
import {dispatch} from 'jest-circus/build/state';
import {getAllMovies} from '@app-redux/actions/movies';
import {useDispatch, useSelector} from 'react-redux';

const HomePage: NextComponentType = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])
    return (
        <div>
            <MovieCard/>
            <TrendingCard/>
        </div>
    )
}

export default HomePage;
