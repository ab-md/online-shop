import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Col, Container, Row } from 'react-bootstrap';
import axios from "axios";

import { BASE_URL } from "../../../redux/configs";
import styles from "./styles.module.css";
import categoriesAction from "../../../redux/categories/action";

const Brand = () => {

    const dispatch = useDispatch();
    const { itemsCounter } = useSelector(state => state.cart);

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [err, setErr] = useState();

    useEffect(() => {
        axios.get(`${BASE_URL}/products/categories`)
            .then(res => setCategories(res.data))
            .catch(err => setErr(err))
    }, [])

    const selectCategory = (event) => {
        setCategory(event.target.value);
        dispatch(categoriesAction(event.target.value));
    }

    return (
        <div className={styles.brand}>
            <Container className={styles.brandContainer}>
                <Row>

                    <Col sm={12} lg={3}>
                        <Link to="/" className={styles.siteBrand}>
                            SITE BRAND
                        </Link>
                    </Col>

                    <Col sm={12} lg={6} style={{ paddingRight: "0", paddingLeft: "0" }}>
                        <form className={styles.searchFilter}>
                            <select value={category} onChange={selectCategory}>
                                <option value="">Categories</option>
                                {
                                    err ? <option>Network error</option> : 
                                    categories.length ?
                                        categories.map((category, index) => (
                                            <option value={category} key={index}>{category}</option>
                                        )) : <option>loading...</option>
                                }
                            </select>
                            <input type="search" placeholder="Search here" />
                            <button>Search</button>
                        </form>
                    </Col>

                    <Col sm={12} lg={3}>

                        <div className={styles.cart}>
                            <Link to="#">
                                <i className="fa-regular fa-heart"></i>
                            </Link>
                            <Link to="/cart" className={styles.shoppingCart}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div className={styles.qty}>{itemsCounter}</div>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Brand;