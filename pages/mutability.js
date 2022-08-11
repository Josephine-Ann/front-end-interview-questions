import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/Mutability.module.css';

const code1 = [
    `
    let free = "free";
    const arrEx = [1,2,3,4,5];
    Array.prototype.writeWoo = () => "wooooo";
    String.prototype.writeWoo = () => "wooooo";
    `
]

const explanation1 = [
    `We have applied a method to the prototype of the array.`,
    `We have done the same with the string.`,
    `If immutability is about prototype, this will have a different effect on either data type.`
]

const code2 = [
    `free = "Tree"`
]

const explanation2 = [
    `We try re-assigning the free variable.`
]

const code3 = [
    `free[0] = "W"`,
    `arrEx[0] = "W"`
]

const explanation3 = [
    `We try re-writing the first index, similarly to how we originally read it above.`
]

const code4 = [
    `    
    const arrEx = [1,2,3,4,5];
    const yikes = arrEx
    arrEx.push(9)
    `,
]

const explanation4 = [
    `We have our original array`,
    `Then we create a new array and re-assign it the value of our old array (yikes)!`,
    `We push onto our original array. What will happen to 'yikes'?`
]

const code5 = [
    `
    const arrEx = [1,2,3,4,5]
    const thatsBetter = [...arrEx]
    arrEx.push(100000)
    `,
]

const explanation5 = [
    `We have our original array`,
    `We use the spread operator to 
    create a new array with all of 
    the original array's items`,
    `We push on to our original array.`
]

const Mutability = () => {
    return (
        <Layout>
            <h1 className={styles.title}>What is mutability?</h1>
            <p className={styles.explanationParagraph}>
                {`Before we answer this, let's talk about which data 
                types are mutable, and which are not.`}</p>
            <div className={styles.categoryBox}>
                <h4 className={styles.categoryListOneTitle}>Immutable</h4>
                <ul className={`${styles.categoryList} ${styles.categoryListOne}`}>
                    <li className={styles.categoryListItem}>Arrays</li>
                    <li className={styles.categoryListItem}>Objects</li>
                    <li className={styles.categoryListItem}>Reference types in general</li>
                </ul>
                <h4 className={styles.categoryListTwoTitle}>Mutable</h4>
                <ul className={`${styles.categoryList} ${styles.categoryListTwo}`}>
                    <li className={styles.categoryListItem}>Booleans</li>
                    <li className={styles.categoryListItem}>Numbers</li>
                    <li className={styles.categoryListItem}>Primitives in general</li>
                </ul>
            </div>
            <h1 className={styles.title}>Is immutability about having a __proto?__</h1>
            <Code code={code1} explanation={explanation1} />
            <pre className={styles.resultBoxes}>
                arrEx.writeWoo()
                <p>{`👉🏻 wooooo`}</p>
            </pre>
            <pre className={styles.resultBoxes}>
                free.writeWoo()
                <p>{`👉🏻 wooooo`}</p>
            </pre>
            <h1 className={styles.title}>
                So, it seems that immutability 
                is not about not having a __proto__.
                Then...is immutability about not allowing
                 for re-assignment?
            </h1>
            <Code code={code2} explanation={explanation2} />
            <pre className={styles.resultBoxes}>
                free
                <p>{`👉🏻 Tree`}</p>
            </pre>
            <h1 className={styles.title}>
                Hm, not exactly. Is immutability about being read-only?
            </h1>
            <pre className={styles.resultBoxes}>
                free[0]
                <p>{`👉🏻 T`}</p>
            </pre>
            <Code code={code3} explanation={explanation3}/>
            <pre className={styles.resultBoxes}>
                free
                <p>{`👉🏻 Tree`}</p>
            </pre>
            <pre className={styles.resultBoxes}>
                arrEx
                <p>{`👉🏻 ["W", 2, 3, 4, 5]`}</p>
            </pre>
            <h1 className={styles.title}>
                Well look at that! Our string remains unchanged. 
                This shows that it is read-only.
                This is in contrast to our array, which can be
                overwritten via its indexes. 
                And is mutability about referencing 
                other instantiations of their data 
                type constructor?
            </h1>
            <Code explanation={explanation4} code={code4}/>
            <pre className={styles.resultBoxes}>
                yikes
                <p>{`👉🏻 [ 1, 2, 3, 4, 5, 9 ]`}</p>
            </pre>
            <pre className={styles.resultBoxes}>
                arrEx
                <p>{`👉🏻 [ 1, 2, 3, 4, 5, 9 ]`}</p>
            </pre>
            <h1 className={styles.title}>
                How do we avoid this behaviour?
            </h1>
            <Code code={code5} explanation={explanation5}/>
            <pre className={styles.resultBoxes}>
                arrEx
                <p>{`👉🏻 [ 1, 2, 3, 4, 5, 1000 ]`}</p>
            </pre>
            <pre className={styles.resultBoxes}>
                thatsBetter
                <p>{`👉🏻 [ 1, 2, 3, 4, 5 ]`}</p>
            </pre>
        </Layout>
    );
};

export default Mutability;