import HttpRequest from '@services/integrations/http-request';
import {ISeries} from '@interfaces/series.interface';

const SeriesService = () => {
    return {
        getAllSeries: (sender: string): Promise<ISeries[]> => {
            return HttpRequest({
                endpoint: "series",
                method: "get",
                receiver: "series",
                sender: sender
            });
        }
    }
};

export default SeriesService();
