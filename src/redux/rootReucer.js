import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import categoriesReducer from "./categories/reducer";
import productsReducer from "./products/reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})

export default rootReducer;