import React from 'react';
import {NextComponentType, NextPageContext} from 'next';
import styles from '@styles/components/MovieCard.module.scss';
import MovieIcon from '@images/icon-category-movie.svg';
import Image from 'next/image';
import movieImg from '@images/thumbnails/the-great-lands/regular/large.jpg';
import BookmarkIcon from '@images/icon-bookmark-empty.svg';
import buttonStyles from '@styles/components/Buttons.module.scss';
import PlayIcon from '@images/icon-play.svg';

const MovieCard:NextComponentType<NextPageContext,
    any,
    { movie?: any }> = ({ movie }) => {
    return (
        <div className={styles.movieCardContainer}>
            <button className={`${buttonStyles.btnRounded} ${buttonStyles.btn} ${styles.movieBookmark}`}>
                <BookmarkIcon/>
            </button>
            <div className={styles.cardOverlay}>
                <button className={`${buttonStyles.btnPlay} ${buttonStyles.btn}`}>
                    <PlayIcon/>
                    <span>Play</span>
                </button>
            </div>
            <div className={styles.movieCardImg}>
                <Image src={movieImg} alt='movie'/>
            </div>
            <div className={styles.movieCardBody}>
                <ul className={styles.movieAttributes}>
                    <li>2019</li>
                    <li><span>•</span> <MovieIcon/>Movie</li>
                    <li><span>•</span> PG</li>
                </ul>
                <h3 className={styles.movieTitle}>The Great Lands</h3>
            </div>
        </div>
    )
}

export default MovieCard;
