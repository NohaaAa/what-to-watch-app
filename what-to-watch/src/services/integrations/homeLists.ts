import HttpRequest from '@services/integrations/http-request';
import {IList} from '@interfaces/lists.interface';


const HomeListsService = () => {
    return {
        getListByType: (sender: string, listType: "TRENDING_LIST" | "RECOMMENDS_LIST"): Promise<IList[]> => {
            return HttpRequest({
                endpoint: "lists/trending",
                method: "get",
                receiver: "trending",
                sender: sender,
                body: {}
            });
        }
    }
};

export default HomeListsService();
