import React from 'react';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";

import styles from "./styles.module.css";
import { checkout, clearCart, decrease, deleteItem, increase } from '../../redux/cart/action';
import { isInCart, myAlert, myToast, qtyCount, shorten } from '../../helpers';

const CartComponent = () => {

    const dispatch = useDispatch();
    const { cart, itemsCounter, total } = useSelector(state => state.cart);

    const add = (productId) => {
        dispatch(increase(productId));
        myToast("success", "Item increased")
    }

    const remove = (productId) => {
        dispatch(decrease(productId));
        myToast("success", "Item decreased")
    }

    const deleteFromCart = (productId) => {
        dispatch(deleteItem(productId));
        myToast("warning", "Item removed from cart")
    }

    const clearAll = () => {
        dispatch(clearCart());
        myToast("error", "Cart is clear")
    }

    const pay = () => {
        dispatch(checkout());
        myAlert("success", "Thanks for your shopping")
    }

    return (
        <Container>
            <Row className={styles.itemsContainer}>
                {
                    !cart.length ?
                        <div className={styles.empty}>
                            <i class="fa-solid fa-basket-shopping"></i>
                            <div className={styles.cta}>
                                <p>Your cart is empty.</p>
                                <p>Want to buy something? <Link to="/products">
                                    <i className={`fa-solid fa-cart-shopping ${styles.cartIcon}`}></i>
                                    GO TO SHOP
                                </Link></p>
                            </div>
                        </div>
                        :
                        <>
                            <Col xs={12} md={9}>
                                <div>
                                    {
                                        cart.map(product => (
                                            <div className={styles.items} key={product.id}>
                                                <div className={styles.image}>
                                                    <img src={product.image} alt="product" />
                                                </div>
                                                <div className={styles.name}>{shorten(product.title)}</div>
                                                <div className={styles.price}>
                                                    <p>
                                                        <span>
                                                            price: {' '}
                                                        </span>
                                                        <span>
                                                            {product.price}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            subtotal: {' '}
                                                        </span>
                                                        <span>
                                                            {(product.price * product.qty).toFixed(2)}
                                                        </span>
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
                                                        <span className={styles.qty}>{product.qty}</span>
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
                            <Col xs={12} md={3}>
                                <div className={styles.payInfo}>
                                    <p className={styles.totalItems}>Total Items: {itemsCounter}</p>
                                    <p className={styles.payment}>Total Payment: {total}</p>
                                    <div className={styles.buttons}>
                                        <button className={styles.clearCart} onClick={clearAll}>Clear</button>
                                        <button className={styles.checkout} onClick={pay}>Checkout</button>
                                    </div>
                                </div>
                            </Col>
                        </>
                }
            </Row>
        </Container>
    );
}

export default CartComponent;
