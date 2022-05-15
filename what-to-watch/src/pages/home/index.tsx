import React, {useEffect} from 'react';
import {NextComponentType} from 'next';
import {useDispatch, useSelector} from 'react-redux';
import {getListOfTrends} from '@store/actions/homeLists';
import {IInitialState} from '@interfaces/common.interface';

const HomePage: NextComponentType = () => {
    const trendsList = useSelector<IInitialState>(state=> state.homeLists.trends);
    const recommendedList = useSelector<IInitialState>(state => state.homeLists.recommends);
    const loadingData = useSelector<IInitialState>(state => state.loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListOfTrends());
    }, [dispatch]);

    return (
        <div>
        </div>
    )
}

export default HomePage;
