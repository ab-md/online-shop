import { combineReducers } from "redux";
import categoriesReducer from "./categories/reducer";
import productsReducer from "./products/reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
})

export default rootReducer;