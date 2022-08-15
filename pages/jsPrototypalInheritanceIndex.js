import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/FloatsIndex.module.css';
import PageOfContents from '../Components/PageOfContents';

const links = [
    ["jSPrototypalInheritance", "What is proto?"],
    ["jSPrototypalInheritance2", "Pre-ES6 and Reference Types"],
    ["jSPrototypalInheritance3", "ES6+ and Reference Types"]
]


const JsPrototypalInheritanceIndex = () => {
    return (
        <Layout>
            <PageOfContents links={links}/>
        </Layout>
    );
};

export default JsPrototypalInheritanceIndex;