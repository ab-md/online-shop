import Accesses from "./Accesses";
import Copyright from "./Copyright";
import Social from "./Social";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Social />
            <Accesses />
            <Copyright />
        </footer>
    )
}

export default Footer;