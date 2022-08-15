import React from 'react';
import Layout from '../Components/Layout'
import Code from '../Components/Code'
import styles from '../styles/Nth.module.css'
import { useState } from 'react';

const Nth = () => {
    const [childOrType, setChildOrType] = useState("type")
    const handleClick = () => {
        setChildOrType(prevChildOrType => prevChildOrType === "type" ? "child" : "type" )
    }

    const code = {
        css: `
        h6:nth-of-type(2) {
            color: rebeccapurple;
        }
        
        h5:nth-child(2) {
            color: rebeccapurple;
        }
    `
    }
    
    const explanationType = [
        "We use nth-of-type on the 2nd h6",
        "This changes the 2nd item in the first 2 lists, which are the same.",
        "It changes the 4th item in the bottom left list. It is the 3rd item, but the 2nd of its type (h6).",
        "It changes nothing in the last list, as there is no 2nd h6"
    ]
    const explanationChild = [
        "We use nth-child on the 2nd h5",
        "This changes the 2nd item in the first 2 lists, which are the same.",
        "It changes the 2nd item in the bottom left list. It is the 2nd item, but the 1rst of its type (h5).",
        "It changes nothing in the last list, as the 2nd item is not an h5"
    ]
return (
        <Layout>
            <h1 className={`${styles.titleCarousel}`}>
                {childOrType === "type" ? "We use li:nth-of-type(2) on these lists" : "We use h1:nth-child(2) on these lists"}
            </h1>
            <div className={styles.carousel}>
                {/* <h5 className={styles.titleCarousel}>We use h1:nth-child(2) on these lists</h1> */}
                <div className={childOrType === "type" ? styles.activeCarousel : styles.inactiveCarousel}>
                    <div className={`${styles.slideCarousel} ${styles.slideCarousel} ${styles.slideCarousel1}`}>
                    <ul className={styles.ulExample}>
                        <h6 className={styles.h6Example}>I am a h6</h6>
                        <h6 className={styles.h6Example}>I am the 2nd li</h6>
                        <h6 className={styles.h6Example}>I am the 3rd li</h6>
                    </ul>
                    <ul className={styles.ulExample}>
                        <h6 className={styles.h6Example}>I am a h6</h6>
                        <h6 className={styles.h6Example}>I am the 2nd li</h6>
                        <h6 className={styles.h6Example}>I am the 3rd li</h6>
                    </ul>
                    <ul className={styles.ulExample}>
                        <p className={styles.pExample}>I am a p</p>
                        <h6 className={styles.h6Example}>I am a h6</h6>
                        <h6 className={styles.h6Example}>I am the 2nd li</h6>
                    </ul>
                    <ul className={styles.ulExample}>
                        <p className={styles.pExample}>I am a p</p>
                        <p className={styles.pExample}>I am another p</p>
                        <h6 className={styles.h6Example}>I am a h6</h6>
                    </ul>
                    </div>
                </div>
                <div className={childOrType === "child" ? styles.activeCarousel : styles.inactiveCarousel}>
                    <div className={`${styles.slideCarousel} ${styles.slideCarousel2}`}>
                    <ul className={styles.ulExample}>
                        <h5 className={styles.h5Example}>I am a h5</h5>
                        <h5 className={styles.h5Example}>I am the 2nd h1</h5>
                        <h5 className={styles.h5Example}>I am the 3rd h1</h5>
                    </ul>
                    <ul className={styles.ulExample}>
                        <h5 className={styles.h5Example}>I am a h5</h5>
                        <h5 className={styles.h5Example}>I am the 2nd h1</h5>
                        <h5 className={styles.h5Example}>I am the 3rd h1</h5>
                    </ul>
                    <ul className={styles.ulExample}>
                        <h2 className={styles.h2Example}>I am a h2</h2>
                        <h5 className={styles.h5Example}>I am a h5</h5>
                        <h5 className={styles.h5Example}>I am the 2nd h1</h5>
                    </ul>
                    <ul className={styles.ulExample}>
                        <h2 className={styles.h2Example}>I am a h2</h2>
                        <h2 className={styles.h2Example}>I am another h2</h2>
                        <h5 className={styles.h5Example}>I am a h5</h5>
                    </ul>
                    </div>
                </div>
            </div>
            <div className={styles.codeBox}>
            {
                    childOrType === "type" ? (
                        <Code 
                        code={code}
                        explanation={explanationType} 
                        />
                    ) : (
                        <Code 
                        code={code}
                        explanation={explanationChild} 
                        />
                    )
                }
            </div>
            <button onClick={()=> { handleClick() }} className={styles.buttonCarousel}>{childOrType === "type" ? "See how nth-child() works" :  "See how nth-of-type() works"}</button>
        </Layout>
    );
};

export default Nth;