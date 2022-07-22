import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Layout from "../components/layout/Layout";
import CategoryCard from '../components/cards/category/Card';

import productsAction from '../redux/products/action';
import ProductCard from '../components/cards/product/Card';
import loading from "../assets/images/Spinner.svg";
import { myAlert } from '../helpers';

const Products = () => {

    const dispath = useDispatch();
    const products = useSelector(state => state.products);
    const category = useSelector(state => state.categories);

    useEffect(() => {
        dispath(productsAction());
    }, [dispath])

    const errorHandler = () => {
        myAlert("error", "Something went wrong!<br />Please try again")
    }

    return (
        <Layout>
            <CategoryCard />
            <Container>
                <Row>
                    {
                        products.loading || category.loading ?
                            <div className="loading">
                                <img src={loading} alt="loader" />
                            </div> :
                            products.error?.message?.length || category.error?.message?.length ? errorHandler() :
                                category.data.length ? category.data.map((item, index) => <ProductCard key={index} data={item} />) :
                                    products.data.map((product, index) => <ProductCard key={index} data={product} />)
                    }
                </Row>
            </Container>
        </Layout>
    );
}

export default Products;