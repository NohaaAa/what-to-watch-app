import {ISeries} from '@interfaces/series.interface';
import {IMovie} from '@interfaces/movies.interface';
import {
    BOOKMARK_ITEM,
    ERROR,
    GET_BOOKMARKED_MOVIES,
    GET_BOOKMARKED_SERIES,
    UNBOOKMARK_ITEM
} from '@store/types';

const initialState: {bookmarkedMovies?: IMovie[], bookmarkedSeries?: ISeries[], loading: boolean} = {
    loading: true
}

const userBookmarksReducer = (state = initialState, action: {type: string, payload: any}) => {
    switch (action.type) {
        case GET_BOOKMARKED_MOVIES:
            return {
                ...state,
                bookmarkedMovies: action.payload,
                loading: false
            }
        case GET_BOOKMARKED_SERIES:
            return {
                ...state,
                bookmarkedSeries: action.payload,
                loading: false
            }
        case BOOKMARK_ITEM:
            return {
                ...state,
                bookmarkedSeries: state.bookmarkedSeries,
                bookmarkedMovies: state.bookmarkedMovies,
                loading: false
            }
        case UNBOOKMARK_ITEM:
            return {
                ...state,
                bookmarkedSeries: (action.payload.itemCategory === 'TV Series') ? state.bookmarkedSeries?.filter(item => item._id !== action.payload.itemId): state.bookmarkedSeries,
                bookmarkedMovies: (action.payload.itemCategory === 'Movie') ? state.bookmarkedMovies?.filter(item => item._id !== action.payload.itemId): state.bookmarkedMovies,
                loading: false
            }
        case ERROR:
            return {
                ...state,
            }

        default: return state;
    }
}

export default userBookmarksReducer;
