import React from 'react';
import {NextComponentType, NextPageContext} from 'next';
import styles from '@styles/components/TrendingCard.module.scss';
import Image from 'next/image';
import movieImg from '@images/thumbnails/the-great-lands/regular/medium.jpg';
import buttonStyles from '@styles/components/Buttons.module.scss';
import PlayIcon from '@images/icon-play.svg';
import MovieIcon from '@images/icon-category-movie.svg';
import BookmarkIcon from '@images/icon-bookmark-empty.svg';
import {IListItem} from '@interfaces/lists.interface';
import environments from '@environments/index';

const TrendingCard :NextComponentType<NextPageContext,
    any,
    { item: IListItem }> = ({ item }) =>  {

    const itemImageURL = `${environments.imagesURL}/${item.thumbnail.trending.large}`;

    return (
        <div className={styles.trendingCardContainer}>
            <div className={styles.trendingCardImg}>
                <Image src={itemImageURL} alt={item.title} layout={'fill'}/>
            </div>
            <div className={styles.trendingCardOverlayWrapper}>
                <button className={`${buttonStyles.btnRounded} ${buttonStyles.btn} ${styles.movieBookmark}`}>
                    <BookmarkIcon/>
                </button>
                <div className={styles.trendingCardAttributes}>
                    <ul className={styles.cardAttributes}>
                        <li>{item.year}</li>
                        <li><span>•</span> <MovieIcon/>{item.category}</li>
                        <li><span>•</span>{item.rating}</li>
                    </ul>
                    <h2 className={styles.movieTitle}>{item.title}</h2>
                </div>
            </div>

        </div>
    )
}

export default TrendingCard;
