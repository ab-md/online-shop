// import { useEffect, useState } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";

import Layout from "../components/layout/Layout"
import CategoryCard from "../components/cards/category/Card";
import ProductCard from "../components/cards/product/Card";
// import { BASE_URL } from "../redux/configs";
import productsAction from "../redux/products/action";


import image from "../assets/images/pngwing.com.png";
import image2 from "../assets/images/png-laptop.png";
import image3 from "../assets/images/images.jpg";
import image4 from "../assets/images/notebook.webp";
import { useEffect } from "react";

const Home = () => {

    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     axios.get(`${BASE_URL}/products/categories`)
    //         .then(res => setCategories(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    const categories = [
        {id: 1, name: "electronics", image},
        {id: 2, name: "jewelery", image: image2},
        {id: 3, name: "men's clothing", image: image3},
        {id: 4, name: "women's clothing", image: image4},
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
        </Layout>
    )
}

export default Home;