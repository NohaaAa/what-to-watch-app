import React from 'react';
import {NextComponentType} from 'next';
import styles from "@styles/components/AppWrapper.module.scss";
import SideMenu from '@components/side-menu';
import HeaderSearch from '@components/header-search';
import {useRouter} from 'next/router';

const AppWrapper: NextComponentType = ({children}) => {
    const router = useRouter();

    return (
        <div className={styles.mainContainer}>
            {router.asPath !== '/login' && router.asPath !== '/signup' &&
                <div>
                    <SideMenu/>
                </div>
            }
            <div className={styles.contentWrapper}>
                {
                    router.asPath !== '/login' && router.asPath !== '/signup' &&
                    <HeaderSearch/>
                }
                {children}
            </div>

        </div>
    );
};

export default AppWrapper;
