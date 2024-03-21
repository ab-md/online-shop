import React from 'react';

import Contact from "./Contact";
import Brand from "./Brand";
import Navbar from "./Navbar";
import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Contact />
            <Brand />
            <Navbar />
        </header>
    );
}

export default Header;
