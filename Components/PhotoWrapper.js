import React from 'react';
import styles from '../styles/BlockLevelElements.module.css';

const PhotoWrapper = ({children}) => {
    return (
        <div className={styles.imgWrapper}>
            {children}
        </div>
    )
}

export default PhotoWrapper;