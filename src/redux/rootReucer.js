import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";
import categoriesReducer from "./categories/reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})

export default rootReducer;