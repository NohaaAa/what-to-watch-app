export interface ISeries {
    thumbnail: ISeriesThumbnail;
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
export interface ISeriesThumbnail {
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
