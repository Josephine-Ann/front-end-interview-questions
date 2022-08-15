import React from 'react';
import Layout from '../Components/Layout';
import Code from '../Components/Code';
import styles from '../styles/Floats1.module.css';

const Floats = () => {
    const explanation = [
        `If we assign "float: left;" to every item, they stack right.`,
        `If we assign "float: right;" to every item, they stack left.`,
    ]
    const code = {
        css: `
        .boxFloatedLeft {
            float: left;
            width: 20%;
            height: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .boxFloatedRight {
            float: right;
            width: 20%;
            height: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scaleX(-1);
        }
    `
    }
    return (
        <Layout>
            <div className={styles.boxOfBoxes}>
                <div style={{backgroundColor: "aquamarine"}} className={styles.boxFloatedLeft}>
                    <p>{"We've"}</p>
                </div>
                <div style={{backgroundColor: "lightsalmon"}} className={styles.boxFloatedLeft}>
                    <p>all</p>
                </div>
                <div style={{backgroundColor: "lightcoral"}} className={styles.boxFloatedLeft}>
                    <p>been</p>
                </div>
                <div style={{backgroundColor: "khaki"}} className={styles.boxFloatedLeft}>
                    <p>floated</p>
                </div>
                <div style={{backgroundColor: "violet"}} className={styles.boxFloatedLeft}>
                    <p>left</p>
                </div>
            </div>
            <div className={styles.boxOfBoxes}>
                <div style={{backgroundColor: "aquamarine"}} className={styles.boxFloatedRight}>
                    <p>{"We've"}</p>
                </div>
                <div style={{ backgroundColor: "lightsalmon"}} className={styles.boxFloatedRight}>
                    <p>all</p>
                </div>
                <div style={{ backgroundColor: "lightcoral"}} className={styles.boxFloatedRight}>
                    <p>been</p>
                </div>
                <div style={{ backgroundColor: "khaki"}} className={styles.boxFloatedRight}>
                    <p>floated</p>
                </div>
                <div style={{ backgroundColor: "violet"}} className={styles.boxFloatedRight}>
                    <p>right</p>
                </div>
            </div>
            <Code explanation={explanation} code={code} />
        </Layout>
    );
};

export default Floats;