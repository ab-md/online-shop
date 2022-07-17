import { Container, Row } from "react-bootstrap";

import Layout from "../components/layout/Layout"
import CategoryCard from "../components/cards/category/Card";
import ProductCard from "../components/cards/product/Card";

const Home = () => {
    return (
        <Layout>
            {/* <Container>
                <Row>
                    <CategoryCard />
                </Row>
            </Container> */}
            <Container>
                <Row>
                    <ProductCard />
                </Row>
            </Container>
        </Layout>
    )
}

export default Home;