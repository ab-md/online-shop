import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.css";

const Navbar = () => {

    const location = useLocation();

    const navItems = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About Us", link: "/about" },
        { id: 3, name: "products", link: "/products" },
        { id: 4, name: "Categories", link: "/categories" },
        { id: 5, name: "Blog", link: "/blog" },
        { id: 6, name: "News", link: "/news" },
        { id: 7, name: "Contact Us", link: "/contact" },
    ]

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.toggleContainer}>
                    <span
                        onClick={toggleNav}
                    >
                        {
                            showNav ? <i className="fa-solid fa-x"></i> : <i className="fa-sharp fa-solid fa-bars"></i>
                        }
                    </span>
                </div>
                <ul
                    className={showNav ? styles.activeNav : styles.navList}
                >
                    {
                        navItems.map(item => (
                            <li key={item.id}>
                                <Link to={item.link} className={item.link === location.pathname ? styles.active : ""}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;