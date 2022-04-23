import React from 'react';
import {NextComponentType} from 'next';
import MovieCard from '@components/movie-card';
import TrendingCard from '@components/trending-card';

const HomePage: NextComponentType = () => {
    return (
        <div>
            <MovieCard/>
            <TrendingCard/>
        </div>
    )
}

export default HomePage;
