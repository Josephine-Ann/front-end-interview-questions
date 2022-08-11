import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/JSPrototypalInheritance2.module.css';

const code = [
    `const objExample = {
        a: "1",
        b: "2",
        c: "3"
    }
    
    const secondObjExample = Object.create(objExample)
    secondObjExample.ownValue = 'Created second'
    `
]

const explanation = [
    `We have an example of an object.`,
    `We create another object that references our initial example`
]

const code1 = [
    `secondObjExample.__proto__.a = "200"`
]

const explanation1 = [
    `We re-assign secondObjExample's proto`
]

const jSPrototypalInheritance2 = () => {
    return (
        <Layout>
            <h1 className={styles.title}>Pre-ES6 and Reference Types</h1>
            <Code code={code} explanation={explanation} />
            <pre className={styles.resultBoxes}>
                secondObjExample
                <p>{`👉🏻 This reads as:`}</p>
                {`{ ownValue: 'Created second' }`}
            </pre>
            <pre className={styles.resultBoxes}>
                secondObjExample.__proto__
                <p>{`👉🏻 This reads as:`}</p>
                {`{ a: '1', b: '2', c: '3' }`}
            </pre>
            <Code code={code1} explanation={explanation1}/>
            <pre className={styles.resultBoxes}>
                secondObjExample.__proto__
                <p>{`👉🏻 This reads as:`}</p>
                {`{ a: '200', b: '2', c: '3' }`}
            </pre>
            <pre className={styles.resultBoxes}>
                objExample
                <p>{`👉🏻 This reads as:`}</p>
                {`{ a: '200', b: '2', c: '3' }`}
            </pre>
        </Layout>
    );
};

export default jSPrototypalInheritance2;