import { useDispatch, useSelector } from 'react-redux';
import {Container, Row} from 'react-bootstrap';
import Layout from "../components/layout/Layout";


import image from "../assets/images/pngwing.com.png";
import image2 from "../assets/images/png-laptop.png";
import image3 from "../assets/images/images.jpg";
import image4 from "../assets/images/notebook.webp";
import CategoryCard from '../components/cards/category/Card';
import { useEffect } from 'react';
import productsAction from '../redux/products/action';
import ProductCard from '../components/cards/product/Card';

const Products = () => {

    const dispath = useDispatch();
    const products = useSelector(state => state.products);
    const category = useSelector(state => state.categories);

    useEffect(() => {
        dispath(productsAction());
    }, [dispath])

    const categories = [
        { id: 1, name: "electronics", image },
        { id: 2, name: "jewelery", image: image2 },
        { id: 3, name: "men's clothing", image: image3 },
        { id: 4, name: "women's clothing", image: image4 },
    ]

    categories.length = 3;

    return (
        <Layout>
            <Container>
                <Row>
                    {
                        categories.map((category, index) => <CategoryCard key={index} data={category} />)
                    }
                </Row>
            </Container>
            <Container>
                <Row>
                    {
                        category.data.length ? category.data.map((item, index) => <ProductCard key={index} data={item} />) :
                        products.data.map((product, index) => <ProductCard key={index} data={product} />)
                    }
                </Row>
            </Container>
        </Layout>
    );
}

export default Products;