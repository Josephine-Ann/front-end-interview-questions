import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faHome } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [cssOpen, setCssOpen] = useState(false)
    const [jsOpen, setJsOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(null);
    const route = useRouter().route
    const clickHandler = e => {
        console.log(e.target.style)
        console.log(e.currentTarget.style)
    }
    return (
        <nav onClick={e => clickHandler(e)} className={styles.navbar}>
            <button onClick={() => setMenuOpen(prev => !prev)} className={styles.faAlignJustify}>
                <FontAwesomeIcon  icon={faAlignJustify} />
            </button>
            <button className={styles.navbarHomeIcon}>
                <Link href="/"><FontAwesomeIcon  icon={faHome} /></Link>
            </button>
            <div className={menuOpen ? `${styles.navbarLinks} ${styles.navbarLinksRevealed}` : `${styles.navbarLinks} ${styles.navbarLinksHidden}`}>
                <div onPointerEnter={() => setCssOpen(prev => true)} onPointerLeave={() => setCssOpen(prev => false)}>
                    <div className={styles.navbarTitleBox}>
                        <button className={styles.navbarTitle}>CSS</button>
                    </div>
                    <ul className={`${cssOpen === false ? `${styles.navbarHidden} ${styles.navbarList}` : styles.navbarList}`}>
                        <li onPointerEnter={() => setHoveredItem("validateInputs")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "validateInputs" || route === "/validateInputs" ? styles.navbarLinkActive : styles.navbarLink}><Link href="validateInputs">Form Validation</Link></li>
                        <li onPointerEnter={() => setHoveredItem("hoveredTooltipHover")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "hoveredTooltipHover" || route === "/hoveredTooltipHover" ? styles.navbarLinkActive : styles.navbarLink}><Link href="hoveredTooltipHover">Hovered Tooltip Using Hover</Link></li>
                        <li onPointerEnter={() => setHoveredItem("nth")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "nth"|| route === "/nth" ? styles.navbarLinkActive : styles.navbarLink}><Link href="nth">Nth-Type or Child?</Link></li>
                        <li onPointerEnter={() => setHoveredItem("blockLevelElements")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "blockLevelElements" || route === "/blockLevelElements" ? styles.navbarLinkActive : styles.navbarLink}><Link href="blockLevelElements">Block Level Elements</Link></li>
                        <li onPointerEnter={() => setHoveredItem("floatsIndex")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "floatsIndex" || route === "/floatsIndex" ? styles.navbarLinkActive : styles.navbarLink}><Link href="floatsIndex">Floats</Link></li>
                        <li onPointerEnter={() => setHoveredItem("orderAnimation")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "orderAnimation" || route === "/orderAnimation" ? styles.navbarLinkActive : styles.navbarLink}><Link href="orderAnimation">Using Order to Create an Animation</Link></li>
                    </ul>
                </div>
                <div className={styles.secondDivNavbar} onPointerEnter={() => setJsOpen(true)} onPointerLeave={() => setJsOpen(false)}>
                    <div className={styles.navbarTitleBox}>
                        <button className={styles.navbarTitle}>JS</button>
                    </div>
                    <ul className={`${jsOpen === false ? `${styles.navbarHidden} ${styles.navbarList}` : styles.navbarList}`}>
                        <li onPointerEnter={() => setHoveredItem("jsPrototypalInheritanceIndex")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "jsPrototypalInheritanceIndex" || route === "/jsPrototypalInheritanceIndex" ? styles.navbarLinkActive : styles.navbarLink}><Link href="jsPrototypalInheritanceIndex">JS Prototypal Inheritance</Link></li>
                        <li onPointerEnter={() => setHoveredItem("mutability")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "mutability" || route === "/mutability" ? styles.navbarLinkActive : styles.navbarLink}><Link href="mutability">Mutability</Link></li>
                        <li onPointerEnter={() => setHoveredItem("factoryFunctions")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "factoryFunctions" || route === "/factoryFunctions" ? styles.navbarLinkActive : styles.navbarLink}><Link href="factoryFunctions">Factory Functions</Link></li>
                        <li onPointerEnter={() => setHoveredItem("nullVersusUndefined")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "nullVersusUndefined" || route === "/nullVersusUndefined" ? styles.navbarLinkActive : styles.navbarLink}><Link href="nullVersusUndefined">Null Versus Undefined</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;