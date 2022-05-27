import {IList} from './lists.interface';
import {IMovie} from '@interfaces/movies.interface';
import {ISeries} from '@interfaces/series.interface';

export interface IInitialState {
    homeLists: { trends: IList, recommends: IList, loading: boolean };
    moviesList: {movies: IMovie[], loading: boolean};
    seriesList: {series: ISeries[], loading: boolean};
}
