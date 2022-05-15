import {IList} from './lists.interface';

export interface IInitialState {
    homeLists: { trends: IList, recommends: IList, loading: boolean };
}
