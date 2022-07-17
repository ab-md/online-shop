import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import styles from "./styles.module.css";
import image from "../../../assets/images/pngwing.com.png";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {

    return (
        <Col xs={3}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={image} alt="product" />
                </div>

                <div className={styles.body}>
                    <p className={styles.category}>CATEGORY NAME</p>
                    <p className={styles.product}>PRODUCT NAME</p>
                    <p className={styles.price}>$900</p>
                </div>

                <div className={styles.rating}>
                    <ReactStars count={5} size={24} activeColor="#D10024" value={3.5} isHalf={true} edit={false}></ReactStars>
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
                    <button className={styles.addToCart}>
                        <i className={`fa-solid fa-cart-shopping ${styles.cartIcon}`}></i>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard;