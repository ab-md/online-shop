import axios from "axios";
import { GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from "../actionTypes";
import { BASE_URL } from "../configs";

const categoriesAction = (category) => async (dispatch) => {
    try {
        dispatch({type: GET_CATEGORIES_REQUEST});
        const response = await axios.get(`${BASE_URL}/products/category/${category}`);
        dispatch({type: GET_CATEGORIES_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: GET_CATEGORIES_FAIL, payload: error});
    }
}

export default categoriesAction;