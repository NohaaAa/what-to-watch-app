import React from 'react';
import {NextComponentType} from 'next';
import styles from '@styles/components/TrendingCard.module.scss';
import Image from 'next/image';
import movieImg from '@images/thumbnails/the-great-lands/regular/medium.jpg';
import buttonStyles from '@styles/components/Buttons.module.scss';
import PlayIcon from '@images/icon-play.svg';
import MovieIcon from '@images/icon-category-movie.svg';
import BookmarkIcon from '@images/icon-bookmark-empty.svg';

const TrendingCard: NextComponentType = () => {
    return (
        <div className={styles.trendingCardContainer}>
            <div className={styles.trendingCardImg}>
                <Image src={movieImg} alt='movie' layout={'fill'}/>
            </div>
            <div className={styles.trendingCardOverlayWrapper}>
                <button className={`${buttonStyles.btnRounded} ${buttonStyles.btn} ${styles.movieBookmark}`}>
                    <BookmarkIcon/>
                </button>
                <div className={styles.trendingCardAttributes}>
                    <ul className={styles.cardAttributes}>
                        <li>2019</li>
                        <li><span>•</span> <MovieIcon/>Movie</li>
                        <li><span>•</span> PG</li>
                    </ul>
                    <h2 className={styles.movieTitle}>The Great Lands</h2>
                </div>
            </div>

        </div>
    )
}

export default TrendingCard;
