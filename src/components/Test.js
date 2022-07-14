import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import productsAction from "../redux/products/action";
import { BASE_URL } from "../redux/configs";
import categoriesAction from "../redux/categories/action";

const Test = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const categorise = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(productsAction());
    }, [])

    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}/products/categories`)
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, []);

    const selectCategory = event => {
        // console.log(event.target.value);
        setSort(event.target.value);
        // console.log(sort);
        dispatch(categoriesAction(event.target.value));
    }

    return (
        <>
            <select onChange={selectCategory}>
                <option value="">{!category.length ? "loading..." : "select a category"}</option>
                {
                    !category.length ? <option>Loading...</option> :
                        category.map((item, index) => (
                            <React.Fragment key={index}>
                                <option value={item}>{item}</option>
                            </React.Fragment>
                        ))
                }
            </select>
            {
                ["", " ", null, undefined].includes(sort) ? products.data.map(product => (
                    <React.Fragment key={product.id}>
                        <p>{product.title}</p>
                    </React.Fragment>
                )) :
                    categorise.data.map(product => (
                        <React.Fragment key={product.id}>
                            <p>{product.title}</p>
                        </React.Fragment>
                    ))
            }
        </>
    )
}

export default Test;