import React, {useEffect} from 'react';
import {NextComponentType} from 'next';
import {useDispatch, useSelector} from 'react-redux';
import {getListOfRecommended, getListOfTrends} from '@store/actions/homeLists';
import {IInitialState} from '@interfaces/common.interface';
import {InfinitySpin} from 'react-loader-spinner';
import homeStyles from './home.module.scss';
import carouselStyles from '@styles/components/Carousel.module.scss';
import TrendingCard from '@components/trending-card';
import Carousel from '@components/carousel';
import MovieCard from '@components/movie-card';
import {IListItem} from '@interfaces/lists.interface';

const HomePage: NextComponentType = () => {
    const trendsList: ReturnType<any> = useSelector<IInitialState>((state) => state.homeLists.trends);
    const recommendedList: ReturnType<any> = useSelector<IInitialState>((state) => state.homeLists.recommends);
    const loadingData: ReturnType<any> = useSelector<IInitialState>((state) => state.homeLists.loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListOfTrends());
        dispatch(getListOfRecommended());
    }, [dispatch]);
    console.log(loadingData)
    return (
        <>
            {loadingData &&
                <div className={homeStyles.spinner}>
                    <InfinitySpin color="#fc4747" width='auto'/>
                </div>
                }
            <div className={homeStyles.trendsListContainer}>
                {trendsList &&
                    <Carousel carouselTitle='Trending'>
                        {trendsList.items.map((item: IListItem) => (
                            <div className={carouselStyles.carouselSlide} key={item._id}>
                                <div className={carouselStyles.carouselInner}>
                                    <TrendingCard item={item} />
                                </div>
                            </div>
                        ))}
                    </Carousel>}
            </div>
            <div className={homeStyles.recommendedListContainer}>
                <h1 className={homeStyles.listTitle}>Recommended for you</h1>
                <div className={homeStyles.listWrapper}>
                    {recommendedList.items.map((item: IListItem) => {
                        return <MovieCard movie={item} key={item._id}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default HomePage;
