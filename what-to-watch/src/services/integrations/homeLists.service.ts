import HttpRequest from '@services/integrations/http-request';
import {IList} from '@interfaces/lists.interface';


const HomeListsService = () => {
    return {
        getTrendingList: (sender: string): Promise<IList[]> => {
            return HttpRequest({
                endpoint: "lists/trending",
                method: "get",
                receiver: "trending",
                sender: sender,
                body: {}
            });
        },
        getRecommendedList: (sender: string): Promise<IList[]> => {
            return HttpRequest({
                endpoint: "lists/recommended",
                method: "get",
                receiver: "recommended",
                sender: sender,
                body: {}
            });
        }
    }
};

export default HomeListsService();
