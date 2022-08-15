import React from 'react';
import Layout from '../Components/Layout';
import styles from '../styles/Floats2.module.css'
import Code from '../Components/Code';

const code = {
    css: `
    .childThree {
        background-color: lightseagreen;
        float: left;
    }
    
    .childFour {
        background-color: orchid;
        float: right;
    }
`,
jsx: `
    <div className={${"`${styles.withFloatDemo}`}"}>
        <div className={${"`${styles.childrenWithFloat} ${styles.childThree}`"}}>
            <p className={styles.divDescription}>I am the first div, floated left</p>
        </div>
        <div className={${"`${styles.childrenWithFloat} ${styles.childFour}`"}}>
            <p className={styles.divDescription}>I am the second div, floated right</p>
        </div>
    </div>
`
}

const explanation = [
    `In our first box, we see two divs behaving as they do by default.`,
    `In our second box, we see how they behave if we apply float left to the first and float right to the second.`,
]

const Floats2 = () => {
    return (
        <Layout>
            <div className={styles.floatDemos}>
                <div className={styles.withoutFloatDemo}>
                    <div className={`${styles.childrenWithoutFloat} ${styles.childOne}`}>
                        <p className={styles.divDescription}>I am the first div</p>
                    </div>
                    <div className={`${styles.childrenWithoutFloat} ${styles.childTwo}`}>
                        <p className={styles.divDescription}>I am the second div</p>
                    </div>
                </div>
                <div className={`${styles.withFloatDemo}`}>
                    <div className={`${styles.childrenWithFloat} ${styles.childThree}`}>
                        <p className={styles.divDescription}>I am the first div, floated left</p>
                    </div>
                    <div className={`${styles.childrenWithFloat} ${styles.childFour}`}>
                        <p className={styles.divDescription}>I am the second div, floated right</p>
                    </div>
                </div>
            </div>
            <Code explanation={explanation} code={code}/>
        </Layout>
    );
};

export default Floats2;