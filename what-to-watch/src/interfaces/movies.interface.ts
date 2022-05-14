export interface IMovie {
    thumbnail: IMovieThumbnail;
    _id: string;
    title: string;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
    __v:number;
    createdAt: string;
    updatedAt: string;
}
export interface IMovieThumbnail {
    trending: {
        small: string;
        large: string;
    },
    regular: {
        small: string;
        medium: string;
        large: string;
    }
}
