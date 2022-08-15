import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/NullVersusUndefined.module.css';

const code = {
    js: `const isMethodOnArrayPrototype = (method) => {
        return Array.prototype[[method]] ? "You found me!" : Array.prototype[[method]]
    }`
}

const code2 = {
    js: `let x = undefined`
}

const code3 = {
    js: `
    console.log(null == undefined)
    // true
    console.log(null === undefined)
    // false
    
    let someUndefinedVariable = undefined;
    let someNullVariable = null;
    
    console.log(someUndefinedVariable ?? "Will I show?")
    // Will I show?
    
    console.log(someNullVariable ?? "Will I show?")
    // Will I show?


    someUndefinedVariable ??= "Now I'm not undefined"
    console.log(someNullVariable)
    // "Now I'm not undefined", undefined is nullish

    someNullVariable ??= "Now I'm not null"
    console.log(someUndefinedVariable)
    // "Now I'm not null", null is nullish

    `
}

const explanation = [
    `We create a method which tests whether or not the Array constructor's prototype contains a method.`
]

const explanation2 = [
    `We set x as undefined`
]

const explanation3 = [
    "They are equal with abstract equality comparison, but not with strict.",
    "They are nullish, and they behave the name way with nullish operators"
]

const NullVersusUndefined = () => {
    return (
        <Layout>
            <div className={styles.explanations}>
                <h1 className={styles.explanation}>Null is Explicit</h1>
                <h1 className={styles.explanation}>Undefined is Implicit</h1>
            </div>
            <p className={styles.paragraphsExplaining}>
                Undefined means you have travelled through the entire 
                prototype chain and come up empty.
            </p>
            <Code code={code} explanation={explanation}/>
            <Code code={{
                js:`isMethodOnArrayPrototype("forEach")
                // "👉🏻 You found me!"
                `
                }}
                explanation={[
                    "We confirm that the array constructor has the method forEach"]}
                />
                    <Code code={{
                js: `isMethodOnArrayPrototype
                ("someMadeUpMethod")
                // 👉🏻 undefined
                `
                }}
                explanation={[
                    "We confirm that the array constructor doesn't have the method someMadeUpMethod"]}
                />
                                            <Code code={{
                js: `Array.prototype.someMadeUpMethod = () => "a thing to return"
                isMethodOnArrayPrototype(
                    "someMadeUpMethod")
                    // 👉🏻 You found me!
                `
                }}
                explanation={[
                    "We confirm that the array constructor doesn't have the method someMadeUpMethod"]}
                />
            <p className={styles.paragraphsExplaining}>
                So that means you should not be able to set something as undefined, right?
                It is only implicit. 
            </p>
            <Code code={code2} explanation={explanation2}/>
            <pre className={styles.resultBoxes}>
                x
                <p>{`👉🏻 undefined`}</p>
            </pre>
            <p className={styles.paragraphsExplaining}>
                No, it would seem that is not the case. 
                Undefined is implicit, but we also use it 
                to say that something will later be defined.
                This is in contrast to null, which will never
                be defined.
            </p>
            <Code code={code3} explanation={explanation3}/>
        </Layout>
    );
};

export default NullVersusUndefined;