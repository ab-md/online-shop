import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import Layout from "../components/layout/Layout";
import categoriesAction from "../redux/categories/action";
import ProductCard from "../components/cards/product/Card";

const Category = () => {

    const {category} = useParams();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(categoriesAction(category));
    }, [dispatch])

    return (
        <Layout>
            <Container>
                <Row>
                    {
                        categories.data.map((category, index) => (
                            <ProductCard key={index} data={category} />
                        ))
                    }
                </Row>
            </Container>
        </Layout>
    )
}

export default Category;