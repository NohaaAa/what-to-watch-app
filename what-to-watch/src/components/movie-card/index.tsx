import React, {useEffect, useState} from 'react';
import {NextComponentType, NextPageContext} from 'next';
import styles from '@styles/components/MovieCard.module.scss';
import MovieIcon from '@images/icon-category-movie.svg';
import Image from 'next/image';
import movieImg from '@images/thumbnails/the-great-lands/regular/large.jpg';
import BookmarkIcon from '@images/icon-bookmark-empty.svg';
import buttonStyles from '@styles/components/Buttons.module.scss';
import PlayIcon from '@images/icon-play.svg';
import {IListItem} from '@interfaces/lists.interface';
import environments from '@environments/index';
import {ISeries} from '@interfaces/series.interface';
import {IMovie} from '@interfaces/movies.interface';
import {addItemToBookmarks, removeItemFromBookmarks} from '@store/actions/bookmarks';
import {useDispatch} from 'react-redux';

const MovieCard:NextComponentType<NextPageContext,
    any,
    { movie: IListItem, index: number}> = ({ movie, index }) => {
    const movieImageURL = `${environments.imagesURL}/${movie.thumbnail.regular.large}`
    const [isBookmarked, setIsBookmarked] = useState(movie.isBookmarked);
    const dispatch = useDispatch();
    const saveItemToBookmarks = (sender: string, item:IListItem) => {
        dispatch(addItemToBookmarks(sender, item._id));
    }
    const unSaveItemFromBookmarks = (sender: string, item:IListItem) => {
        dispatch(removeItemFromBookmarks(sender, item));
    }
    return (
        <div className={styles.movieCardContainer}>
            <button className={`${buttonStyles.btnRounded} ${buttonStyles.btn} ${styles.movieBookmark} ${isBookmarked ? styles.bookmarked : ''}`} onClick={() => {
                if(isBookmarked) {
                    unSaveItemFromBookmarks(movie.category, movie);
                } else {
                    saveItemToBookmarks(movie.category, movie);
                }
                setIsBookmarked(!isBookmarked);
            }}>
                <BookmarkIcon/>
            </button>
            <div className={styles.movieCardImg}>
                <div className={styles.cardOverlay}>
                    <button className={`${buttonStyles.btnPlay} ${buttonStyles.btn}`}>
                        <PlayIcon/>
                        <span>Play</span>
                    </button>
                </div>
                <Image src={movieImageURL} alt='movie' layout={'fill'} />
            </div>
            <div className={styles.movieCardBody}>
                <ul className={styles.movieAttributes}>
                    <li>{movie.year}</li>
                    <li><span>•</span> <MovieIcon/>{movie.category}</li>
                    <li><span>•</span>{movie.rating}</li>
                </ul>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;
