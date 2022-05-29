import {dispatch} from 'jest-circus/build/state';
import {IMovie} from '@interfaces/movies.interface';
import bookmarksService from '@services/integrations/bookmarks.service';
import {BOOKMARK_ITEM, ERROR, GET_BOOKMARKED_MOVIES, GET_BOOKMARKED_SERIES, UNBOOKMARK_ITEM} from '@store/types';
import {store} from '@store/store';
import {ISeries} from '@interfaces/series.interface';
import {IInitialState} from '@interfaces/common.interface';

let token: string;
export const getBookmarkedMovies = () => async (dispatch: (arg0: {type: string, payload: string | IMovie[]}) => void) => {
    await bookmarksService.getAllBookmarkedMovies(token).then((list) => {
        dispatch({
            type: GET_BOOKMARKED_MOVIES,
            payload: list
        });
    }).catch((error) => {
        dispatch({
            type: ERROR,
            payload: 'Something went wrong!'
        });
    })
}
export const getBookmarkedSeries = () => async (dispatch: (arg0: {type: string, payload: string | ISeries[]}) => void) => {
    await bookmarksService.getAllBookmarkedSeries(token).then((list) => {
        dispatch({
            type: GET_BOOKMARKED_SERIES,
            payload: list
        });
    }).catch((error) => {
        dispatch({
            type: ERROR,
            payload: 'Something went wrong!'
        });
    })
}
export const addItemToBookmarks = (sender: string, itemId: string) => async (dispatch: (arg0: {type: string, payload: any}) => void) => {
    await bookmarksService.toggleItemInBookmarks(sender, itemId, token, true).then((result) => {
        if(result) {
            dispatch({
                type: BOOKMARK_ITEM,
                payload: result
            });
        } else {
            dispatch({
                type: ERROR,
                payload: 'Something went wrong!'
            });
        }
    }).catch((error) => {
        dispatch({
            type: ERROR,
            payload: 'Something went wrong!'
        });
    })
}
export const removeItemFromBookmarks = (sender: string, itemId: string) => async (dispatch: (arg0: {type: string, payload: any}) => void) => {
    await bookmarksService.toggleItemInBookmarks(sender, itemId, token, false).then((result) => {
        if(result) {
            dispatch({
                type: UNBOOKMARK_ITEM,
                payload: result
            });
        } else {
            dispatch({
                type: ERROR,
                payload: 'Something went wrong!'
            });
        }
    }).catch((error) => {
        dispatch({
            type: ERROR,
            payload: 'Something went wrong!'
        });
    })
}
