import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/JSPrototypalInheritance.module.css';

const code = [
    `const arrExample = [1,2,3,4,5,6,7]
    const objExample = {
        a: "1",
        b: "2",
        c: "3"
    }
    const strExample = "I am a string"
    const hasArrMethodForEach = obj => obj.__proto__.forEach ? "I have forEach on my proto, I'm an instantiation of the array constructor." : "I don't have forEach on my proto, I'm not an instantiation of the array constructor"`
]

const code2 = [
    `const arrExample = [1,2,3,4,5,6,7]
    const objExample = {
        a: "1",
        b: "2",
        c: "3"
    }
    const strExample = "I am a string"
    const hasStrMethodBold = str => str.__proto__.bold ? "I have bold on my proto, I'm a string." : "I don't have bold on my proto, I'm not a string."`
]

const code3 = [
    `
    const arrExample = [1,2,3,4,5,6,7]
    const objExample = {
        a: "1",
        b: "2",
        c: "3"
    }

    const strExample = "I am a string"
    
    const hasObjMethodHasOwnProperty = obj => 
    (obj.__proto__.hasOwnProperty ||
    obj.__proto__.__proto__hasOwnProperty  
    ) ? 
    "Found hasOwnProperty, I'm an object." : 
    "Maybe I'm...still an object!?"
    `
]

const explanation = [
    `Everything data type has a proto`,
    `On this proto they have some methods that are specific to that data type`,
    `This is because they are all instantiations of the constructor that corresponds to their type`,
    `For example, arrays are an instantiation of the array constructor.`
]

const explanation2 = [
    `On this proto they have some methods that are specific to that data type`,
    `This is because they are all instantiations of the constructor that corresponds to their type`,
    `For example, strings are an instantiation of the strings constructor.`
]

const explanation3 = [
    `We have defined a method to look for hasOwnProperty on the protos of different data types.`,
    `We have also defined a methods to look for hasOwnProperty on the proto of these data types' protos.`,
    `Within the proto of all data types, (apart from an object), another proto can be found.`,
    `This has the same object methods as those found on an object proto.`
]

const jSPrototypalInheritance = () => {
    return (
        <Layout>
            <Code code={code} explanation={explanation}/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <pre className={styles.resultBoxes}>
                    hasArrMethodForEach(arrExample)
                    <p>{`👉🏻 I have forEach on my proto, I'm an instantiation of the array constructor.`}</p>
                </pre>
                <pre className={styles.resultBoxes}>
                    hasArrMethodForEach(strExample)
                    <p>{`👉🏻 I don't have forEach on my proto, I'm not an instantiation of the array constructor.`}</p>
                </pre>
                <pre className={styles.resultBoxes}>
                    hasArrMethodForEach(objExample)
                    <p>{`👉🏻 I don't have forEach on my proto, I'm not an instantiation of the array constructor.`}</p>
                </pre>
                <Code code={code2} explanation={explanation2}/>
                <pre className={styles.resultBoxes}>
                    hasStrMethodBold(arrExample)
                    <p>{`👉🏻 I don't have bold on my proto, I'm not a string.`}</p>
                </pre>
                <pre className={styles.resultBoxes}>
                    hasStrMethodBold(strExample)
                    <p>{`👉🏻 I have bold on my proto, I'm a string.`}</p>
                </pre>
                <pre className={styles.resultBoxes}>
                    hasStrMethodBold(objExample)
                    <p>{`👉🏻 I don't have bold on my proto, I'm not a string.`}</p>
                </pre>
                <Code code={code3} explanation={explanation3}/>
                <pre className={styles.resultBoxes}>
                    hasObjMethodHasOwnProperty(objExample)
                    <p>{`👉🏻 Found hasOwnProperty, I'm an object.`}</p>
                </pre>
                <pre className={styles.resultBoxes}>
                    hasObjMethodHasOwnProperty(strExample)
                    <p>{`👉🏻 Found hasOwnProperty, I'm an object.`}</p>
                </pre>
                <pre className={styles.resultBoxes}>
                    hasObjMethodHasOwnProperty(arrExample)
                    <p>{`👉🏻 Found hasOwnProperty, I'm an object.`}</p>
                </pre>
            </div>
        </Layout>
    );
};

export default jSPrototypalInheritance;