import HttpRequest from '@services/integrations/http-request';
import {ISeries} from '@interfaces/series.interface';
import {IMovie} from '@interfaces/movies.interface';

const BookmarksService = () => {
    return {
        getAllBookmarkedMovies: (): Promise<IMovie[]> => {
            return HttpRequest({
                endpoint: "users/movies/bookmark",
                method: "get",
                receiver: "movies/bookmark",
                sender: 'bookmarks',
                withToken: true
            });
        },
        getAllBookmarkedSeries: (): Promise<ISeries[]> => {
            return HttpRequest({
                endpoint: "users/series/bookmark",
                method: "get",
                receiver: "series/bookmark",
                sender: 'bookmarks',
                withToken: true
            });
        },
        toggleItemInBookmarks: (sender:string, itemId: string, bookmarkItem: boolean): Promise<{result: boolean}> => {
            return HttpRequest({
                endpoint: "users/bookmark",
                method: "post",
                receiver: "series/bookmark",
                sender: sender,
                body: {
                    itemId: itemId,
                    save: bookmarkItem
                },
                withToken: true
            })
        }
    }
};

export default BookmarksService();
