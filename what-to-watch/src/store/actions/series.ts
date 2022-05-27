import {ERROR, GET_SERIES} from '../types';
import {ISeries} from '@interfaces/series.interface';
import SeriesService from '@services/integrations/series.service';

export const getAllSeries = () => async (dispatch: (arg0: { type: string; payload: string | ISeries[]; }) => void) => {
    await SeriesService.getAllSeries("series").then((series) => {
        dispatch({
            type: GET_SERIES,
            payload: series
        });
    }).catch((error) => {
        dispatch({
            type: ERROR,
            payload: "Something went Wrong!"
        });
    })
}
