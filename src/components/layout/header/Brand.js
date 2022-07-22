import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Container } from 'react-bootstrap';
import axios from "axios";

import { BASE_URL } from "../../../redux/configs";
import styles from "./styles.module.css";
import categoriesAction from "../../../redux/categories/action";

const Brand = () => {

    const dispatch = useDispatch();
    const { itemsCounter } = useSelector(state => state.cart);

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}/products/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    const selectCategory = (event) => {
        setCategory(event.target.value);
        dispatch(categoriesAction(event.target.value));
    }

    return (
        <div className={styles.brand}>
            <Container className={styles.brandContainer}>
                <Link to="/" className={styles.siteBrand}>
                    SITE BRAND
                </Link>

                <form className={styles.searchFilter}>
                    <select value={category} onChange={selectCategory}>
                        <option value="">Categories</option>
                        {
                            categories.map((category, index) => (
                                <option value={category} key={index}>{category}</option>
                            ))
                        }
                    </select>
                    <input type="search" placeholder="Search here" />
                    <button>Search</button>
                </form>

                <div className={styles.cart}>
                    <Link to="#">
                        <i className="fa-regular fa-heart"></i>
                    </Link>
                    <Link to="/cart" className={styles.shoppingCart}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className={styles.qty}>{itemsCounter}</div>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Brand;