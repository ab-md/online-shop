import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./styles.module.css";
import { BASE_URL } from "../../../redux/configs";

const Accesses = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/products/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    const lists = [
        {
            id: 1, title: "about us",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
            list: [
                { id: 1, name: "abmdofficial@gmail.com", link: "mailto:abmdfficial@gmail.com", icon: <i className="fa-solid fa-phone"></i> },
                { id: 2, name: "+989387193829", link: "#", icon: <i className="fa-regular fa-envelope"></i> },
                { id: 3, name: "1734 Stonecoal Road", link: "#", icon: <i className="fa-solid fa-location-dot"></i> },
            ]
        },
        { id: 2, title: "categories", list: categories.map((category, index) => { return { id: index, name: category, link: category } }) },
        {
            id: 3, title: "information", list: [
                { id: 1, name: "About Us", link: "/about" },
                { id: 2, name: "Contact Us", link: "/contact" },
                { id: 3, name: "Privacy Policy", link: "#" },
                { id: 4, name: "Orders and Returns", link: "#" },
                { id: 5, name: "Terms & Conditions", link: "#" },
            ]
        },
        {
            id: 4, title: "Service", list: [
                { id: 1, name: "My Account", link: "#" },
                { id: 2, name: "View Cart", link: "#" },
                { id: 3, name: "Wishlist", link: "#" },
                { id: 4, name: "Track My Order", link: "#" },
                { id: 5, name: "Help", link: "#" },
            ]
        }
    ]

    return (
        <div className={styles.accessesProvider}>
            <Container>
                <Row>
                    {
                        lists.map(list => (
                            <Col key={list.id}>
                                <p className={styles.title}>{list.title.toUpperCase()}</p>
                                {list?.text && <p className={styles.text}>{list.text}</p>}
                                <div className={styles.accesses}>
                                    {list.list.map(item => (
                                        <Link to={item.link} key={item.id}>
                                            {item?.icon && item?.icon}
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Accesses;