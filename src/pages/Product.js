import { Container } from 'react-bootstrap';

import Layout from '../components/layout/Layout';
import SingleProduct from '../components/product/Single';

const Product = () => {
    return (
        <Layout>
            <Container>
                <SingleProduct />
            </Container>
        </Layout>
    );
}

export default Product;
