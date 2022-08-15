import React from 'react';
import Layout from '../Components/Layout';
import Code from '../Components/Code';
import Image from 'next/image';
import imgExample from '../public/A.png';
import imgExampleFloatedLeft from '../public/B.png';
import imgExampleFloatedRight from '../public/C.png';
import styles from '../styles/Floats3.module.css';

const explanationB = [
    "We apply a float left to the image.",
    "The text wraps up around the right of the image"
]

const explanationC = [
    "We apply a float right to the image.",
    "The text wraps up around the left of the image"
]

const codeB = {
    css: `
    .imgWrapperLeft {
        float: left;
        width: 12rem;
        height: 12rem;
        position: relative;
        padding-top: 50%;
        margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    `,
    jsx: `
    <PhotoWrapperLeft>
        <Image src={imgExampleFloatedLeft} alt="dummy image with text explaining that it is an image floated left" layout="fill"/>  
    </PhotoWrapperLeft>
    `
}

const codeC = {
    css: `.imgWrapperRight {
        float: right;
        width: 12rem;
        height: 12rem;
        position: relative;
        padding-top: 50%;
        margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    `,
    jsx: `
    <PhotoWrapperRight>
        <Image src={imgExampleFloatedRight} alt="dummy image with text explaining that it is an image floated left" layout="fill"/>
    </PhotoWrapperRight>
    `
}


const Floats3 = () => {
    const PhotoWrapper = ({children}) => {
        return (
            <div className={`${styles.imgWrapper}`}>
                {children}
            </div>
        )
    }
    const PhotoWrapperRight = ({children}) => {
        return (
            <div className={`${styles.imgWrapperRight}`}>
                {children}
            </div>
        )
    }
    const PhotoWrapperLeft = ({children}) => {
        return (
            <div className={`${styles.imgWrapperLeft}`}>
                {children}
            </div>
        )
    }
    return (
        <Layout>
            <div className={styles.allSections}>
            <div className={styles.sectionsFloats}>
                <h4 className={styles.titles}>A: This Is How An Image That Is Not Floated Interacts With Text</h4>
                <PhotoWrapper>
                    <Image src={imgExample} alt="dummy image with text explaining that it is an image" layout="fill"/>
                </PhotoWrapper>
                <p className={styles.floatText}>
                    Phasellus lorem elit, vehicula quis odio ac, 
                    molestie pretium orci. Ut volutpat magna nec 
                    cursus venenatis. Vestibulum semper porta ex 
                    id porttitor. Etiam gravida mauris interdum 
                    neque euismod, et sodales nunc ullamcorper. 
                    Sed ac pharetra diam. Aenean tincidunt porta 
                    nibh, et fermentum dolor dapibus a. Aenean arcu 
                    quam, rhoncus id quam sed, ultricies elementum 
                    urna. Cras vestibulum metus eu ligula euismod 
                    accumsan. Phasellus bibendum sapien eros, vitae 
                    suscipit turpis eleifend vel.
                </p>
            </div>
            <div className={styles.sectionsFloats}>
                <h4 className={styles.titles}>B: This Is How An Image Floated Left Interacts With Text</h4>
                <PhotoWrapperLeft>
                    <Image src={imgExampleFloatedLeft} alt="dummy image with text explaining that it is an image floated left" layout="fill"/>  
                </PhotoWrapperLeft>
                <p className={styles.floatText}>
                    Phasellus lorem elit, vehicula quis odio ac, 
                    molestie pretium orci. Ut volutpat magna nec 
                    cursus venenatis. Vestibulum semper porta ex 
                    id porttitor. Etiam gravida mauris interdum 
                    neque euismod, et sodales nunc ullamcorper. 
                    Sed ac pharetra diam. Aenean tincidunt porta 
                    nibh, et fermentum dolor dapibus a. Aenean arcu 
                    quam, rhoncus id quam sed, ultricies elementum 
                    urna. Cras vestibulum metus eu ligula euismod 
                    accumsan. Phasellus bibendum sapien eros, vitae 
                    suscipit turpis eleifend vel.
                </p>
            </div>
            <Code code={codeB} explanation={explanationB}/>
            <div className={styles.sectionsFloats}>
                <h4 className={styles.titles}>C: This Is How An Image Floated Right Interacts With Text</h4>
                <PhotoWrapperRight>
                    <Image src={imgExampleFloatedRight} alt="dummy image with text explaining that it is an image floated left" layout="fill"/>
                </PhotoWrapperRight>
                <p className={styles.floatText}>
                    Phasellus lorem elit, vehicula quis odio ac, 
                    molestie pretium orci. Ut volutpat magna nec 
                    cursus venenatis. Vestibulum semper porta ex 
                    id porttitor. Etiam gravida mauris interdum 
                    neque euismod, et sodales nunc ullamcorper. 
                    Sed ac pharetra diam. Aenean tincidunt porta 
                    nibh, et fermentum dolor dapibus a. Aenean arcu 
                    quam, rhoncus id quam sed, ultricies elementum 
                    urna. Cras vestibulum metus eu ligula euismod 
                    accumsan. Phasellus bibendum sapien eros, vitae 
                    suscipit turpis eleifend vel.
                </p>
            </div>
                <Code code={codeC} explanation={explanationC}/>
            </div>
        </Layout>
    );
};

export default Floats3;