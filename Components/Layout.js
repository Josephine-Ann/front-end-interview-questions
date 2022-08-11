import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';

const Layout = ({children}) => {
    
    return (
        <>
            <Head>
                <title>Front End Developer Interview Questions</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href='/favicon.ico' />
            </Head>
            <Navbar/>
            <div className={styles.centered}>
                {children}
            </div>
        </>

    );
};

export default Layout;