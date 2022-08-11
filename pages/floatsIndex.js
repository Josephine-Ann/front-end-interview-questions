import React from 'react';
import Layout from '../Components/Layout'; 
import Code from '../Components/Code'; 
import styles from '../styles/FloatsIndex.module.css';
import PageOfContents from '../Components/PageOfContents';

const links = [
    ["floats1", "Left and Right Multiple Floats"],
    ["floats2", "Single Floats Left and Right"],
    ["floats3", "Floats with Text and Photos"]
]


const FloatsIndex = () => {
    return (
        <Layout>
            <PageOfContents links={links}/>
        </Layout>
    );
};

export default FloatsIndex;