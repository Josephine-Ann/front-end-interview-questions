import React from 'react';
import Layout from '../Components/Layout'
import Form from '../Components/Form'
import Code from '../Components/Code'

const code = {
    jsx: `
    <input type="url" id="url_input"/>

    <input type="email" id="email_input" required/>
    `,
    css: `
    #url_input:invalid {
        background-color: lightgray;
    }
    
    #email_input:invalid {
      background-color: lightgray;
    }
    
    #url_input:valid {
      background-color: lightskyblue;
    }
    
    #email_input:valid {
      background-color: lightskyblue;
    }
    `
}
const explanation = [
    "The input types are set as URL or email, and the input is given a value of invalid or valid.",
    "Since the URL input is not set as required, an empty input is always valid.",
    "The email input is set as required, so empty or incorrect input is always invalid."
    ]

const ValidateInputs = () => {
    return (
        <>
            <Layout>
                <Form />
                <Code 
                code={code}
                explanation={explanation} 
                />
            </Layout>
        </>

    );
};

export default ValidateInputs;