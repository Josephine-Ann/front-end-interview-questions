// const displayName = "The use of order in an animation";
const codeNameUpperCase = "FloatsIndex";
const codeNameLowerCase = "floatsIndex";

function createPage () {
    console.log(
        `touch pages/${codeNameLowerCase}.js`,
        `touch styles/${codeNameUpperCase}.module.css`,
        `code -r pages/${codeNameLowerCase}.js`,
        `code -r styles/${codeNameLowerCase}.module.css`,
        `import Layout from '../Components/Layout';`,
        `import Code from '../Components/Code';`,
        `import styles from '../styles/${codeNameUpperCase}.module.css';`
    )
}

createPage()