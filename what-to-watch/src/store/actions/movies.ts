import {ERROR, GET_MOVIES} from '../types';
import moviesService from '@services/integrations/movies.service';
import {IMovie} from '@interfaces/movies.interface';

export const getAllMovies = () => async (dispatch: (arg0: { type: string; payload: string | IMovie[]; }) => void) => {
    await moviesService.getAllMovies("movies").then((movies) => {
        dispatch({
            type: GET_MOVIES,
            payload: movies
        });
    }).catch((error) => {
        dispatch({
            type: ERROR,
            payload: "Something went Wrong!"
        });
    })
}
