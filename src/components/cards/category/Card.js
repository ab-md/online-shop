import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

import styles from "./styles.module.css";


import jewelery from "../../../assets/images/bangle.jpg";
import electronics from "../../../assets/images/laptop.jpg";
import wemons from "../../../assets/images/wemontshirt.jpg";
import mens from "../../../assets/images/mentshirt.jpg";

const CategoryCard = () => {

    const categories = [
        { id: 1, name: "Electronics", image: electronics },
        { id: 2, name: "Jewelery", image: jewelery },
        { id: 3, name: "Men's clothing", image: mens },
        { id: 4, name: "Women's clothing", image: wemons },
    ]

    // categories.length = 3;

    return (
        <Container>
            <Row>
                {
                    categories.map(category => (
                        <Col xs={3} key={category.id} style={{paddingRight: "0", paddingLeft: "0"}}>
                            <div className={styles.container}>
                                <img src={category.image} alt={category.name} />
                                <div className={styles.text}>
                                    <p className={styles.title}>{category.name} <br /> Collection</p>
                                    <Link to={`/products/category/${category.name.toLowerCase()}`}>
                                        SHOP NOW
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>

    );
}

export default CategoryCard;
