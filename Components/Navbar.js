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
    return (
        <nav className={styles.navbar}>
            <button onClick={() => setMenuOpen(prev => !prev)} className={styles.faAlignJustify}>
                <FontAwesomeIcon  icon={faAlignJustify} />
            </button>
            <button className={styles.navbarHomeIcon}>
                <Link href="/"><FontAwesomeIcon  icon={faHome} /></Link>
            </button>
            <div className={menuOpen ? styles.navbarLinks : `${styles.navbarLinks} ${styles.navbarLinksHidden}`}>
                <div onPointerEnter={() => setCssOpen(prev => true)} onPointerLeave={() => setCssOpen(prev => false)}>
                    <div className={styles.navbarTitleBox}>
                        <button className={styles.navbarTitle}>CSS</button>
                    </div>
                    <ul className={`${cssOpen === false ? `${styles.navbarHidden} ${styles.navbarList}` : styles.navbarList}`}>
                        <li onPointerEnter={() => setHoveredItem("validateInputs")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "validateInputs" || route === "/validateInputs" ? styles.navbarLinkActive : styles.navbarLink}><Link href="validateInputs">Form Validation</Link></li>
                        <li onPointerEnter={() => setHoveredItem("hoveredTooltipHover")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "hoveredTooltipHover" || route === "/hoveredTooltipHover" ? styles.navbarLinkActive : styles.navbarLink}><Link href="hoveredTooltipHover">Hovered Tooltip Using Hover</Link></li>
                        <li onPointerEnter={() => setHoveredItem("nth")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "nth"|| route === "/nth" ? styles.navbarLinkActive : styles.navbarLink}><Link href="nth">Nth-Type or Child?</Link></li>
                        <li onPointerEnter={() => setHoveredItem("blockLevelElements")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "blockLevelElements" || route === "/blockLevelElements" ? styles.navbarLinkActive : styles.navbarLink}><Link href="blockLevelElements">Block Level Elements</Link></li>
                        <li onPointerEnter={() => setHoveredItem("floats1")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "floats1" || route === "/floats1" ? styles.navbarLinkActive : styles.navbarLink}><Link href="floats1">Left and Right Multiple Floats</Link></li>
                        <li onPointerEnter={() => setHoveredItem("floats2")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "floats2" || route === "/floats2" ? styles.navbarLinkActive : styles.navbarLink}><Link href="floats2">Single Floats Left and Right</Link></li>
                        <li onPointerEnter={() => setHoveredItem("floats3")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "floats3" || route === "/floats3" ? styles.navbarLinkActive : styles.navbarLink}><Link href="floats3">Floats with Text and Photos</Link></li>
                        <li onPointerEnter={() => setHoveredItem("orderAnimation")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "orderAnimation" || route === "/orderAnimation" ? styles.navbarLinkActive : styles.navbarLink}><Link href="orderAnimation">Using Order to Create an Animation</Link></li>
                    </ul>
                </div>
                <div onPointerEnter={() => setJsOpen(true)} onPointerLeave={() => setJsOpen(false)}>
                <div className={styles.navbarTitleBox}>
                    <button className={styles.navbarTitle}>JS</button>
                </div>
                <ul className={`${jsOpen === false ? `${styles.navbarHidden} ${styles.navbarList}` : styles.navbarList}`}>
                    <li onPointerEnter={() => setHoveredItem("validateInputs")} onPointerLeave={() => setHoveredItem(null)} className={hoveredItem === "validateInputs" || route === "/validateInputs" ? styles.navbarLinkActive : styles.navbarLink}><Link href="validateInputs">Form Validation</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;