const displayName = "The use of order in an animation";
const codeNameUpperCase = "JSPrototypalInheritance2";
const codeNameLowerCase = "jSPrototypalInheritance2";

function createPage () {
    console.log(
        `touch pages/${codeNameLowerCase}.js`,
        `touch styles/${codeNameUpperCase}.module.css`,
        `code -r pages/${codeNameLowerCase}`,
        `code -r styles/${codeNameLowerCase}.module.css`,
        `import Layout from '../Components/Layout';`,
        `import Code from '../Components/Code';`,
        `import styles from '../styles/${codeNameUpperCase}.module.css';`
    )
}

createPage()