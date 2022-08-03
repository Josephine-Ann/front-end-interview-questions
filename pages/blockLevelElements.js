import React from 'react';
import styles from '../styles/BlockLevelElements.module.css';
import Layout from '../Components/Layout';
import PhotoWrapper from '../Components/PhotoWrapper';
import Code from '../Components/Code';
import Image from 'next/image';
import imgExample from '../public/img_example.png';

const explanationBlockLevel = [
    "The background color of these elements has been changed to demonstrate that the items take up the entire width of the page.",
    "This has been done to show how these block level elements work."
]

const explanationInlineLevel = [
    "The background color of these elements has been changed to demonstrate that the items don't take up the entire width of the page.",
    "This has been done to show how these block level elements work."
]

const explanationBlockLevelInlineApplied = [
    "This is similar to what we saw in the section on block level, but we have modified the display setting of these elements in our css.",
    "They no longer extend across the entire page."
]

const codeBlockLevel = [
    `
    .blockLevelSection {
        width: 100%;
        padding-left: 2rem;
    }
    
    .blockLevelH2 {
        background-color: rebeccapurple;
        color: white;
        padding: 1rem;
    }
    
    .blockLevelP {
        background-color: lightpink;
        color: white;
        padding: 1rem; 
    }
    `,
    `
    <div className={styles.blockLevelSection}>
        <h1>Block Level Elements</h1>
        <h2 className={styles.blockLevelH2}>I am an H1</h2>
        <p className={styles.blockLevelP}>I am a paragraph</p>
    </div>  
    `
]

const codeInlineLevel = [
    `
    .imgWrapper {
        height: auto;
        width: clamp(10rem, 10rem, 10rem);
        position: relative;
        padding-top: 50%;
        border: 1rem solid rebeccapurple;
    }
    
    .inlineLevelSpan { 
        background-color: lightpink;
    }
    `,
    `
    <span className={styles.inlineLevelSpan}>I am a span</span>
    <ImgWrapper>
        <Image src={imgExample} layout="fill" />
    </ImgWrapper>
    `
]

const codeBlockLevelInlineApplied = [
    `
    .inlineSetting {
        display: inline-block;
    }
    `,
    `
    <div className="blockLevelSection">
        <h1>Block Level Elements</h1>
        <h2 className=${"`${styles.blockLevelH2} ${styles.blockLevelH2}`"}>I am an H1</h2>
        <p className=${"`${styles.blockLevelP} ${styles.blockLevelH2}`"}>I am a paragraph</p>
    </div>  
    `
]


const BlockLevelElements = () => {

    return (
        <Layout>
            <div className={styles.blockLevelSection}>
                <h1>Block Level Elements</h1>
                <h2 className={styles.blockLevelH2}>I am an H1</h2>
                <p className={styles.blockLevelP}>I am a paragraph</p>
            </div>
            <Code explanation={explanationBlockLevel} code={codeBlockLevel} />
            <div>
                <h1>Inline Elements</h1>
                <span className={styles.inlineLevelSpan}>I am a span</span>
                <PhotoWrapper>
                    <Image src={imgExample} alt="dummy image with text explaining that it is an image" layout="fill" />
                </PhotoWrapper>
            </div>
            <Code explanation={explanationInlineLevel} code={codeInlineLevel}/>
            <div className={`${styles.blockLevelSection} ${styles.inlineSetting}`}>
                <h1>Block Level Elements with Inline Block Applied</h1>
                <div>
                    <h2 className={`${styles.blockLevelH2} ${styles.inlineSetting}`}>I am an H1</h2>
                    <p className={`${styles.blockLevelP} ${styles.inlineSetting}`}>I am a paragraph</p>
                </div>
            </div>
            <Code explanation={explanationBlockLevelInlineApplied} code={codeBlockLevelInlineApplied} />
        </Layout>
    );
};

export default BlockLevelElements;