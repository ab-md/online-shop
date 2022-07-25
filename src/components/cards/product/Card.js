import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

import { addToCart, decrease, increase, deleteItem } from "../../../redux/cart/action";
import { isInCart, myToast, qtyCount, shorten } from "../../../helpers";
import styles from "./styles.module.css";

const ProductCard = ({ data }) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

    const buy = (product) => {
        dispatch(addToCart(product));
        myToast("success", "Item added to cart");
    }

    const add = (productId) => {
        dispatch(increase(productId));
        myToast("success", "Item increased");
    }

    const remove = (productId) => {
        dispatch(decrease(productId));
        myToast("success", "Item decreased");
    }

    const deleteFromCart = (productId) => {
        dispatch(deleteItem(productId));
        myToast("warning", "Item deleted from cart");
    }

    return (
        <Col xs={3} style={{ paddingRight: "0", paddingLeft: "0" }}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={data.image} alt="product" />
                </div>

                <div className={styles.body}>
                    <p className={styles.category}>{data.category.toUpperCase()}</p>
                    <p className={styles.product}>{shorten(data.title.toUpperCase())}</p>
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
                        <Link to={`/products/${data.id}`}>
                            <i className="fa-solid fa-eye"></i>
                        </Link>
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
                        qtyCount(cart, data.id) === 1 && <button onClick={() => deleteFromCart(data.id)}>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    }
                    {
                        qtyCount(cart, data.id) > 1 && <button onClick={() => remove(data.id)}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                    }
                    <span className={styles.qty}>{qtyCount(cart, data.id)}</span>
                    {
                        isInCart(cart, data.id) ? <button onClick={() => add(data.id)}>
                            <i className="fa-solid fa-plus"></i>
                        </button> :
                            <button className={styles.addToCart} onClick={() => buy(data)}>
                                <i className={`fa-solid fa-cart-shopping ${styles.cartIcon}`}></i>
                                ADD TO CART
                            </button>
                    }
                </div>
            </div>
        </Col>
    )
}

export default ProductCard;