import {ERROR, GET_TRENDING} from '../types';
import {GET_RECOMMENDS} from '../types';
import homeListsService from '@services/integrations/homeLists';
import {IList} from '@interfaces/lists.interface';

export const getListOfTrends = () => async (dispatch: (arg0: { type: string; payload: string | IList; }) => void) => {
    await homeListsService.getListByType("home", "TRENDING_LIST").then((list) => {
        dispatch({
            type: GET_TRENDING,
            payload: list[0]
        });
    }).catch((error) => {
        dispatch({
            type: ERROR,
            payload: "Something went Wrong!"
        });
    })
}
