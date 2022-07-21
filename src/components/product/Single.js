import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, decrease, deleteItem, increase } from "../../redux/cart/action";

import productAction from "../../redux/product/action";
import { isInCart, qtyCount } from "../../servives";
// import { shorten } from "../../../servives";
import styles from "./styles.module.css";

const SingleProduct = () => {

    const params = useParams();
    const productId = params.id;

    const dispatch = useDispatch()
    const product = useSelector(state => state.product);
    const { cart } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(productAction(productId));
    }, [productId, dispatch])

    const buy = (product) => {
        dispatch(addToCart(product));
    }

    const add = (productId) => {
        dispatch(increase(productId));
    }

    const remove = (productId) => {
        dispatch(decrease(productId));
    }

    const deleteFromCart = (productId) => {
        dispatch(deleteItem(productId));
    }

    const { id, title, price, image, category, description } = product.data;

    return (
        <Container>
            <Row className={styles.container}>
                <Col xs={6}>
                    <div className={styles.image}>
                        <img src={image} alt="product" />
                    </div>
                </Col>

                <Col xs={6} className={styles.textContainer}>
                    <div className={styles.body}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.price}>${price}</p>
                        <p className={styles.text}>{description}</p>
                    </div>

                    <div className={styles.cart}>
                        {
                            qtyCount(cart, id) === 1 && <button onClick={() => deleteFromCart(id)}>
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        }
                        {
                            qtyCount(cart, id) > 1 && <button onClick={() => remove(id)}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        }
                        {
                            <span className={styles.qty}>{qtyCount(cart, id)}</span>
                        }
                        {
                            isInCart(cart, id) ? <button onClick={() => add(id)}>
                                <i className="fa-solid fa-plus"></i>
                            </button> :
                                <button className={styles.addToCart} onClick={() => buy(product.data)}>
                                    <i className={`fa-solid fa-cart-shopping ${styles.cartIcon}`}></i>
                                    ADD TO CART
                                </button>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleProduct;