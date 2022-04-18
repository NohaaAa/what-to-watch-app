import React from 'react';
import { NextComponentType } from 'next';
import styles from "@styles/components/AppWrapper.module.scss";
import SideMenu from '@components/side-menu';

const AppWrapper: NextComponentType = ({ children }) => {
    return (
        <div className={styles.mainContainer}>
            <div>
                <SideMenu/>
            </div>
            <div className={styles.contentWrapper}>
                {children}
            </div>

        </div>
    );
};

export default AppWrapper;
