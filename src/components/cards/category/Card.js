import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import styles from "./styles.module.css";
import image from "../../../assets/images/pngwing.com.png";

const CategoryCard = () => {
    return (
        <Col xs={4}>
            <div className={styles.container}>
                <img src={image} alt="category" />
                <div className={styles.text}>
                    <p className={styles.title}>Laptop collection</p>
                    <Link to="#">
                        SHOP NOW
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </Col>

    );
}

export default CategoryCard;
