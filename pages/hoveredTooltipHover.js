import React from 'react';
import Layout from '../Components/Layout';
import Code from '../Components/Code';
import styles from '../styles/HoveredTooltip.module.css';

const code = [
    `
    <button data-tooltip="I am a tooltip" className={styles.hoveredButton}>
        Please hover over me! 💜💜💜
    </button>
    `,
    `
    [data-tooltip] {
        position: relative;
      }
      
      [data-tooltip]:hover::after {
        content: attr(data-tooltip);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 100%;
        left: 0;
        right: 0;
        width: clamp(23rem,23rem,23rem);
        height: clamp(3rem,3rem,3rem);
        margin-top: 0.3rem;
        padding: 0.3rem;
        background-color: aquamarine;
        border-radius: clamp(0.5rem, 0.5rem, 0.5rem);
      }
    `
]

const explanation = [
    'We set the data tooltip in our html, jsx, etc.',
    'We select the attribute in our CSS using the square brackets.',
    'We use the pseudoclass hover to add in some new content.',
]

const HoveredTooltipHover = () => {
    return (
        <Layout>
            <div className={styles.hoveredButtonSection}>
                <button data-tooltip="I am a tooltip" className={styles.hoveredButton}>
                    Please hover over me! 💜💜💜
                </button>
            </div>
            <Code explanation={explanation} code={code}/>
        </Layout>
    );
};

export default HoveredTooltipHover;