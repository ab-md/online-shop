import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Copyright = () => {

    const credits = [
        { id: 1, icon: <i className="fa-brands fa-cc-visa"></i>, link: "#" },
        { id: 2, icon: <i className="fa-solid fa-credit-card"></i>, link: "#" },
        { id: 3, icon: <i className="fa-brands fa-cc-paypal"></i>, link: "#" },
        { id: 4, icon: <i className="fa-brands fa-cc-mastercard"></i>, link: "#" },
        { id: 5, icon: <i className="fa-brands fa-cc-discover"></i>, link: "#" },
        { id: 6, icon: <i className="fa-brands fa-cc-amex"></i>, link: "#" },
    ]

    return (
        <div className={styles.copyright}>
            <div className={styles.credits}>
                {
                    credits.map(credit => (
                        <Link to={credit.link} key={credit.id}>
                            {credit.icon}
                        </Link>
                    ))
                }
            </div>

            <div className={styles.text}>
                Copyright ©2022 All rights reserved | This template is made with {' '}
                <i className="fa-regular fa-heart"></i>{' '}
                by
                <a href="https://github.com/ab-md?tab=repositories" target="_blank" rel="noreferrer"> Abolfazl Madadi</a>
            </div>
        </div>
    )
}

export default Copyright;