import React from 'react';
import styles from '../styles/Form.module.css'

const Form = () => {
    return (
            <form id={`${styles.parentList}`}>
                <label htmlFor="url_input" className={`${styles.formLabel} ${styles.listShowHTMLCollectionLis}`}>URL</label>
                <input placeholder="Valid URL or blank" type="url" id={`${styles.url_input}`}/>
                <label htmlFor="email_input" className={`${styles.formLabel} list-show-html-collection-lis`}>Email</label>
                <input placeholder="Valid email" name="email_input" type="email" id={`${styles.email_input}`} required/>
                <button id={`${styles.formButton}`}>Submit!</button>   
            </form>
    );
};

export default Form;