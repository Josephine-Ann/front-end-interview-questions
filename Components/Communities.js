import React from 'react';
import styles from '../styles/FactoryFunctions.module.css';

const Communities = ({communityContents}) => {
    return (
        <div style={{ 
            width: "80%", 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "center"
        }}>
         {
                    Object.keys(communityContents).length > 0 ? (
                        Object.keys(communityContents).map(function(key, index) {
                            return (
                                <div className={styles.communitySection} key={index+1}>
                                    <p className={styles.title}>{key}</p>
                                    <button className={`${styles.formButton} ${styles.communityButton}`} onClick={() => {
                                        communityContents[key].createPerson()
                                        alert(communityContents[key].newPersonMessage)
                                        }}>Create a citizen</button>
                                    <button className={`${styles.formButton} ${styles.communityButton}`} onClick={() => {
                                        communityContents[key].citizens()
                                        alert(communityContents[key].listing)
                                    }}>List citizens</button>
                                    <button className={`${styles.formButton} ${styles.communityButton}`} onClick={() => {
                                        communityContents[key].expelByHairLength("short")
                                        alert(communityContents[key].expelledByLengthMessage)
                                    }}>Expel all citizens with short hair</button>
                                    <button className={`${styles.formButton} ${styles.communityButton}`} onClick={() => {
                                        communityContents[key].expelByHairLength("long")
                                        alert(communityContents[key].expelledByLengthMessage)
                                    }}>Expel all citizens with long hair</button>
                                </div>
                            )
                        })
                    ) : (
                        <p>No communities</p>
                    )
                } 
        </div>
    );
};

export default Communities;