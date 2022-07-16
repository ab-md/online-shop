import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Social = () => {
    return (
        <div className={styles.socialProvider}>
            <Container className={styles.socialContainer}>
                <div className={styles.socialTitle}>
                    <p>Sign Up for the <span>NEWSLETTER</span></p>
                </div>

                <form className={styles.socialForm}>
                    <input type="email" placeholder="Enter Your Email" />
                    <button>
                        <span>
                            <i className="fa-solid fa-envelope"></i>
                            Subscribe
                        </span>
                    </button>
                </form>

                <div className={styles.socialIcons}>
                    <Link to="#" className={styles.iconContainer}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to="#" className={styles.iconContainer}>
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="#" className={styles.iconContainer}>
                        <i className="fa-brands fa-telegram"></i>
                    </Link>
                    <Link to="#" className={styles.iconContainer}>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default Social;
