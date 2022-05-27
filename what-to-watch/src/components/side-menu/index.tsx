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
import Link from 'next/link';
import {useRouter} from 'next/router';


const SideMenu: NextComponentType<NextComponentType, any,
    { sideMenuList?: { id: number, name: string, path: string }[] }> = ({sideMenuList}) => {
    const currentUrl = useRouter().pathname;
    return (
        <div className={styles.sideMenuContainer}>
            <div>
                <Logo/>
            </div>
            <div className={styles.menuIconsWrapper}>
                <Link href={'/'} passHref>
                    <button
                        className={`${buttonStyles.btn} ${buttonStyles.btnIcon} ${currentUrl === '/' ? buttonStyles.active : ''}`}>
                        <HomeNavIcon/>
                    </button>
                </Link>
                <Link href={'/movies'} passHref>
                    <button
                        className={`${buttonStyles.btn} ${buttonStyles.btnIcon} ${currentUrl === '/movies' ? buttonStyles.active : ''}`}>
                        <MoviesNavIcon/>
                    </button>
                </Link>
                <Link href={'/series'} passHref>
                    <button
                        className={`${buttonStyles.btn} ${buttonStyles.btnIcon} ${currentUrl === '/series' ? buttonStyles.active : ''}`}>
                        <TvSeriesNavIcon/>
                    </button>
                </Link>
                <Link href={'/bookmarks'} passHref>
                    <button
                        className={`${buttonStyles.btn} ${buttonStyles.btnIcon} ${currentUrl === '/bookmarks' ? buttonStyles.active : ''}`}>
                        <BookmarkedNavIcon/>
                    </button>
                </Link>
            </div>
            <div className={styles.userImageWrapper}>
                <Image src={userAvatar} alt='user-avatar'/>
            </div>
        </div>
    )
}

export default SideMenu;
