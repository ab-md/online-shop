import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";

import styles from "./styles.module.css";
import { addToCart, clearCart, decrease, deleteItem, increase } from '../../redux/cart/action';
import { isInCart, qtyCount } from '../../servives';

const CartComponent = () => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

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

    const clearAll = () => {
        dispatch(clearCart());
    }

    return (
        <Container>
            <Row className={styles.itemsContainer}>
                <Col xs={9}>
                    <div>
                        {
                            cart.map(product => (
                                <div className={styles.items} key={product.id}>
                                    <div className={styles.image}>
                                        <img src={product.image} alt="product" />
                                    </div>
                                    <div className={styles.name}>{product.title}</div>
                                    <div className={styles.price}>
                                        <p>
                                            {product.price}
                                        </p>
                                        <p>
                                            {(product.price * product.qty).toFixed(2)}
                                        </p>
                                    </div>
                                    <div className={styles.buttons}>
                                        {
                                            qtyCount(cart, product.id) === 1 && <button onClick={() => deleteFromCart(product.id)}>
                                                <i className="fa-regular fa-trash-can"></i>
                                            </button>
                                        }
                                        {
                                            qtyCount(cart, product.id) > 1 && <button onClick={() => remove(product.id)}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                        }
                                        {
                                            product.qty
                                        }
                                        {
                                            isInCart(cart, product.id) && <button onClick={() => add(product.id)}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Col>
                <Col xs={3}>
                    <div className={styles.payInfo}>
                        <p className={styles.totalItems}>Total Items: 3</p>
                        <p className={styles.payment}>Total Payment: 300</p>
                        <div className={styles.buttons}>
                            <button className={styles.clearCart} onClick={clearAll}>Clear</button>
                            <button className={styles.checkout}>Checkout</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CartComponent;
