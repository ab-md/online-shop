import { Container, Row } from "react-bootstrap";

import Layout from "../components/layout/Layout"
import CategoryCard from "../components/cards/category/Card";

const Home = () => {

    return (
        <Layout>
            <CategoryCard />
        </Layout>
    )
}

export default Home;