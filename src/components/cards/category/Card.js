import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import styles from "./styles.module.css";

const CategoryCard = ({data}) => {
    
    return (
        <Col xs={4}>
            <div className={styles.container}>
                <img src={data.image} alt={data} />
                <div className={styles.text}>
                    <p className={styles.title}>{data.name.toUpperCase()} COLLECTION</p>
                    <Link to={`/products/${data.name}`}>
                        SHOP NOW
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </Col>

    );
}

export default CategoryCard;
