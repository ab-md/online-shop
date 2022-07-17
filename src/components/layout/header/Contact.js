import React from 'react';

import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className={styles.contactsProvider}>
            <Container className={styles.contactsContainer}>
                <div className={styles.contacts}>
                    <Link to="#">
                        <i className="fa-solid fa-phone"></i>
                        <span>+989387193829</span>
                    </Link>
                    <a href='mailto:abmdfficial@gmail.com'>
                        <i className="fa-regular fa-envelope"></i>
                        <span>abmdofficial@gmail.com</span>
                    </a>
                    <Link to="#">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>1734 Stonecoal Road</span>
                    </Link>
                </div>

                <div className={styles.contacts}>
                    <Link to="#">
                        <i className="fa-regular fa-dollar-sign"></i>
                        <span>USD</span>
                    </Link>
                    <div className={styles.userStatus}>
                        <i className="fa-regular fa-user"></i>
                        <Link to="login">login</Link>/
                        <Link to="register">register</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
