import {NextComponentType} from 'next';
import {useDispatch, useSelector} from 'react-redux';
import {IInitialState} from '@interfaces/common.interface';
import React, {useEffect} from 'react';
import MovieCard from '@components/movie-card';
import {IMovie} from '@interfaces/movies.interface';
import seriesStyles from './series.module.scss';
import {InfinitySpin} from 'react-loader-spinner';
import spinnerStyle from '@styles/components/Spinner.module.scss';
import {getAllSeries} from '@store/actions/series';

const SeriesPage: NextComponentType = () => {
    const seriesList: ReturnType<any> = useSelector<IInitialState>((state) => state.seriesList.series);
    const isLoadingData: ReturnType<any> = useSelector<IInitialState>((state) => state.seriesList.loading)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSeries());
    }, [dispatch]);
    return (
        <>
            <div className={seriesStyles.seriesContainer}>
                <h1 className={seriesStyles.listTitle}>TV Series</h1>
                {isLoadingData &&
                    <div className={spinnerStyle.spinner}>
                        <InfinitySpin color="#fc4747" width='auto'/>
                    </div>
                }
                <div className={seriesStyles.seriesListWrapper}>
                    {seriesList.map((item: IMovie) => {
                        return <MovieCard movie={item} key={item._id}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default SeriesPage;

