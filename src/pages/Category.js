import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import Layout from "../components/layout/Layout";
import categoriesAction from "../redux/categories/action";
import ProductCard from "../components/cards/product/Card";
import loading from "../assets/images/Spinner.svg";
import { myAlert } from "../helpers";

const Category = () => {

    const { category } = useParams();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(categoriesAction(category));
    }, [dispatch])

    const errorHandler = () => {
        myAlert("error", "Something went wrong!<br />Please try again")
    }

    return (
        <Layout>
            <Container>
                <Row>
                    {
                        categories.loading ?
                            <div className="loading">
                                <img src={loading} alt="loader" />
                            </div> : 
                            categories.error?.message?.length ? errorHandler() :
                            categories.data.map((item, index) => (
                                <ProductCard key={index} data={item} />
                            ))
                    }
                </Row>
            </Container>
        </Layout>
    )
}

export default Category;