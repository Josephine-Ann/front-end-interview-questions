import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/JSPrototypalInheritance3.module.css';

const code = {
  
  js: `class Pet {
    constructor(animal) {
      this.animal = animal;
    }
    intro() {
      return 'I have a pet ' + this.animal;
    }
  }`,
  js: `
  class Breed extends Pet {
    constructor(animal, breed) {
      super(animal);
      this.breed = breed;
    }
    introWithBreed() {
      return this.intro() + ', it is a ' + this.breed;
    }
  }
  `
}

const explanation = [
    `We create a class constructor.`,
    `We then extend the class constructor, which means we have a reference to the original class`
]

const jSPrototypalInheritance3 = () => {
    return (
        <Layout>
            <h1 className={styles.title}>ES6+ and Reference Types</h1>
            <Code code={code} explanation={explanation} />
            <pre className={styles.resultBoxes}>
                {`const myPet = new Breed("Dog", "German Shepherd");
                console.log(myPet.introWithBreed())`}
                <p>{`👉🏻 I have a pet Dog, it is a German Shepherd`}</p>
            </pre>
        </Layout>
    );
};

export default jSPrototypalInheritance3;