import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/OrderAnimation.module.css';

const explanation = [
    `We passed a variable down via the style attribute in our JSX/HTML`,
    `We used calc with this variable.`,
    `This variable changes the delay of our keyframes`,
    `This is why the different parts of our diagrams drop in at different times.`,
    `This means we don't have to pass down different, repetitive delays down into these animated elements.`
]

const code = {
    
    css: `.box, .title-animation {
        animation: dropIn 1s ease forwards;
        animation-delay: calc(var(--order) * 100ms);
        transform: translateY(-30rem);
      }
      
      .title-animation {
        background-color: rgb(34, 32, 77);
        color: white;
        padding: 1.5rem 1.5rem;
        text-align: center;
        transform: translateY(-30rem);
      }
      
      @keyframes dropIn {
        from {transform: translateY(-30rem);}
        to {transform: translateY(5rem);}
      }`,
    jsx: `
    <h3 className="title-animation" style={{ "--order": 5}}>The Request-Response Model/Client-Server Architecture</h3>
    <div className={styles.animationBoxes}>
        <div style={{ "--order": 1}} className={${"`${styles.firstBox} box`"}}>
            <p>Client/Browser</p>
        </div>
        <div style={{ "--order": 2 }} className={${"`${styles.secondBox} box`"}}>
            <div className={styles.firstInstruction}>
                <p>→</p>
                <p>Client sends request to server</p>
            </div>
            <div className={styles.secondInstruction}>
                <p>←</p>
                <p>Server sends back response</p>
            </div>
        </div>
        <div style={{ "--order": 3 }} className={${"`${styles.thirdBox} box`"}}>
            <p>Server</p>
        </div>
    </div>
    `
}

const OrderAnimation = () => {
    return (
        <Layout>
            <h3 className={`${styles.titleAnimation} titleAnimation`} style={{ "--order": 5}}>The Request-Response Model/Client-Server Architecture</h3>
            <div className={styles.animationBoxes}>
                <div style={{ "--order": 1}} className={`${styles.firstBox} box`}>
                    <p>Client</p>
                </div>
                <div style={{ "--order": 2 }} className={`${styles.secondBox} box`}>
                    <div className={styles.firstInstruction}>
                        <p>→</p>
                        <p>Request</p>
                    </div>
                    <div className={styles.secondInstruction}>
                        <p>←</p>
                        <p>Response</p>
                    </div>
                </div>
                <div style={{ "--order": 3 }} className={`${styles.thirdBox} box`}>
                    <p>Server</p>
                </div>
            </div>
            <Code explanation={explanation} code={code}/>
        </Layout>
    );
};

export default OrderAnimation;