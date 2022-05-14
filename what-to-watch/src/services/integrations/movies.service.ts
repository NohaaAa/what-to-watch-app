import HttpRequest from '@services/integrations/http-request';
import {IMovie} from '@interfaces/movies.interface';

const MoviesService = () => {
    return {
        getAllMovies: (sender: string): Promise<IMovie[]> => {
           return HttpRequest({
               endpoint: "movies",
               method: "get",
               receiver: "movies",
               sender: sender
           });
        }
    }
};

export default MoviesService();
