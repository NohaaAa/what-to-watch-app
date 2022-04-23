import React from 'react';
import {NextComponentType} from 'next';
import styles from '@styles/components/SideMenu.module.scss';
import buttonStyles from '@styles/components/Buttons.module.scss';
import Image from 'next/image';
import Logo from '@images/logo.svg';
import MoviesNavIcon from '@images/icon-nav-movies.svg';
import TvSeriesNavIcon from '@images/icon-nav-tv-series.svg';
import BookmarkedNavIcon from '@images/icon-nav-bookmark.svg';
import userAvatar from '@images/image-avatar.png';
import HomeNavIcon from '@images/icon-nav-home.svg';

const SideMenu:NextComponentType = () => {
    return (
        <div className={styles.sideMenuContainer}>
            <div>
                <Logo/>
            </div>
            <div className={styles.menuIconsWrapper}>
                <button className={`${buttonStyles.btn} ${buttonStyles.btnIcon}`}>
                    <HomeNavIcon />
                </button>
                <div className={`${buttonStyles.btn} ${buttonStyles.btnIcon}`}>
                    <MoviesNavIcon />
                </div>
                <div className={`${buttonStyles.btn} ${buttonStyles.btnIcon}`}>
                    <TvSeriesNavIcon />
                </div>
                <div className={`${buttonStyles.btn} ${buttonStyles.btnIcon}`}>
                    <BookmarkedNavIcon />
                </div>
            </div>
            <div className={styles.userImageWrapper}>
                <Image src={userAvatar} />
            </div>
        </div>
    )
}

export default SideMenu;
