import React from 'react';
import { useState } from 'react';
import styles from '../styles/Code.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atelierPlateauDark} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Code = ({ explanation, code }) => {
    return (
        <div className={styles.codeBlock}>
            {
                Object.keys(code).map(function(key, index) {
                    return (
                        <>
                            <SyntaxHighlighter language={key} style={atelierPlateauDark}>
                                {code[key]}
                            </SyntaxHighlighter>
                        </>
                    )
                  })
            }
            <div className={`${styles.explanationBox}`}>
                {
                    explanation.map((ex, i) => {
                        return explanation.length > 1 ? (
                            <p className="explanationItem" key={i}>{i+1}. {ex}</p> 
                        ) : (
                            <p className="explanationItem" key={i}>{ex}</p>  
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Code;

