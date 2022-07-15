import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import productsAction from "../redux/products/action";
import Layout from "./layout/Layout";

const Test = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const categorise = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(productsAction());
    }, [dispatch])

    return (
        <Layout>
            {
                !categorise.data.length ? products.data.map(product => (
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
        </Layout>
    )
}

export default Test;