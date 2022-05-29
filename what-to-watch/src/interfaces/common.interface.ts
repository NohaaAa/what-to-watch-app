import {IList} from './lists.interface';
import {IMovie} from '@interfaces/movies.interface';
import {ISeries} from '@interfaces/series.interface';
import {IUser} from '@interfaces/user.interface';

export interface IInitialState {
    userInfo?: {data: IUser, loading: boolean},
    homeLists: { trends: IList, recommends: IList, loading: boolean };
    moviesList: {movies: IMovie[], loading: boolean};
    seriesList: {series: ISeries[], loading: boolean};
    bookmarkedItemsList: {bookmarkedMovies?: IMovie[], bookmarkedSeries?: ISeries[], loading: boolean};
}
