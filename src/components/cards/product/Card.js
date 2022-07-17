import { useDispatch, useSelector } from "react-redux";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

import { addToCart, decrease, increase, deleteItem } from "../../../redux/cart/action";
import { isInCart, qtyCount } from "../../../servives";
import styles from "./styles.module.css";

const ProductCard = ({ data }) => {

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

    return (
        <Col xs={3}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={data.image} alt="product" />
                </div>

                <div className={styles.body}>
                    <p className={styles.category}>{data.category.toUpperCase()}</p>
                    <p className={styles.product}>{data.title.toUpperCase()}</p>
                    <p className={styles.price}>${data.price}</p>
                </div>

                <div className={styles.rating}>
                    <ReactStars count={5} size={24} activeColor="#D10024" value={data.rating.rate} isHalf={true} edit={false}></ReactStars>
                </div>

                <div className={styles.view}>
                    <OverlayTrigger
                        placement="top" overlay={
                            <Tooltip>details</Tooltip>
                        }>
                        <i className="fa-solid fa-eye"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top" overlay={
                            <Tooltip>quick view</Tooltip>
                        }>
                        <i className="fa-solid fa-right-left"></i>
                    </OverlayTrigger>
                </div>

                <div className={styles.cart}>
                        {
                            isInCart(cart, data.id) ? <button onClick={() => add(data.id)}>+</button> : 
                            <button className={styles.addToCart} onClick={() => buy(data)}>
                                <i className={`fa-solid fa-cart-shopping ${styles.cartIcon}`}></i>
                                ADD TO CART
                            </button>
                        }
                        {
                            qtyCount(cart, data.id) === 1 && <button onClick={() => deleteFromCart(data.id)}>trash</button> 
                        }
                        {
                            qtyCount(cart, data.id) > 1 && <button onClick={() => remove(data.id)}>-</button> 
                        }
                </div>
            </div>
        </Col>
    )
}

export default ProductCard;