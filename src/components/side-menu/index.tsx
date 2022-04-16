import React from 'react';
import {NextComponentType} from 'next';
import styles from '@styles/components/SideMenu.module.scss';
import Image from 'next/image';
import logo from '@images/logo.svg';
import homeIcon from '@images/icon-nav-home.svg';
import moviesIcon from '@images/icon-nav-movies.svg';
import tvSeriesIcon from '@images/icon-nav-tv-series.svg';
import bookmarkedIcon from '@images/icon-nav-bookmark.svg';
import userAvatar from '@images/image-avatar.png';

const SideMenu:NextComponentType = () => {
    return (
        <div className={styles.sideMenuContainer}>
            <div className={styles.logoWrapper}>
                <Image src={logo} />
            </div>
            <div className={styles.menuIconsWrapper}>
                <button className={}>
                    <Image src={homeIcon} />
                </button>
                <div>
                    <Image src={moviesIcon} />
                </div>
                <div>
                    <Image src={tvSeriesIcon} />
                </div>
                <div>
                    <Image src={bookmarkedIcon} />
                </div>
            </div>
            <div className={styles.userImageWrapper}>
                <Image src={userAvatar} />
            </div>
        </div>
    )
}

export default SideMenu;
