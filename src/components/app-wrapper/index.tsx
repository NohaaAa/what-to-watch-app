import React from 'react';
import { NextComponentType } from 'next';
import styles from "@styles/components/AppWrapper.module.scss";
import SideMenu from '@components/side-menu';
import HeaderSearch from '@components/header-search';

const AppWrapper: NextComponentType = ({ children }) => {
    return (
        <div className={styles.mainContainer}>
            <div>
                <SideMenu/>
            </div>
            <div className={styles.contentWrapper}>
                <HeaderSearch/>
                {children}
            </div>

        </div>
    );
};

export default AppWrapper;
