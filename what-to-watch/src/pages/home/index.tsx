import React, {useEffect} from 'react';
import {NextComponentType, NextPageContext} from 'next';
import MovieCard from '@components/movie-card';
import TrendingCard from '@components/trending-card';
import {dispatch} from 'jest-circus/build/state';
import {connect, useDispatch, useSelector} from 'react-redux';
import moviesService from '@services/integrations/movies.service';
import {IMovie} from '@interfaces/movies.interface';
import {ISeries} from '@interfaces/series.interface';
import {IList, IListItem} from '@interfaces/lists.interface';
import {getListOfTrends} from '../../store/actions/homeLists';

const HomePage: NextComponentType<NextPageContext,
    any, {recommendedList: IList, trendingList: IList}> = ({recommendedList, trendingList}) => {
    const listOfTrends = useSelector(state => state.homeLists.trends);
    const listOfRecommends = useSelector(state => state.homeLists.recommends);
    const loadingData = useSelector(state => state.loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListOfTrends());
    }, [dispatch]);
    console.log(listOfTrends)
    return (
        <div>
            {listOfTrends && listOfTrends.items.map((item: IListItem) => {
                return <MovieCard movie={item} key={item._id}/>
            })}
        </div>
    )
}

export default HomePage;
