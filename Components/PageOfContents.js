import React from 'react';
import Link from 'next/link';
import styles from '../styles/PageOfContents.module.css';

const PageOfContents = ({links}) => {
    return (
            <ul className={styles.listLinks}>
                {
                    links.map((l, i) => {
                        return (
                            <li key={i+1} className={styles[`linkBox${i+1}`]}><Link href={l[0]} key={i+1}>{l[1]}</Link></li>
                        )
                    })
                }
            </ul>
    );
};

export default PageOfContents;

{/* <SyntaxHighlighter key={index + 1} className={`${styles.preEdited}`} language={[key]} style={dracula}>
{code[key]}
</SyntaxHighlighter> */}