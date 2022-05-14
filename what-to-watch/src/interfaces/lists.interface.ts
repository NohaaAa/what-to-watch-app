export interface IListItem {
    thumbnail: IListItemThumbnail;
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
export interface IListItemThumbnail {
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
export interface IList {
    _id: string;
    listName: string,
    items: IListItem[],
}
