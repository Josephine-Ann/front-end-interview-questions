import React from 'react';
import { useState } from 'react';
import styles from '../styles/Code.module.css'

const Code = ({ explanation, code }) => {
    return (
        <div className={styles.codeBlock}>
            {
                code.map((c, i) => {
                    return (
                        <pre key={i} className={`${styles.preEdited}`}>
                        {c}
                        </pre>
                    )
                })
            }            
            <div className={`${styles.explanationBox}`}>
                {
                    explanation.map((ex, i) => {
                        return (
                            <p className="explanationItem" key={i}>{i+1}. {ex}</p> 
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Code;

