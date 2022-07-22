import axios from "axios"
import { SINGLE_PRODUCT_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "../actionTypes";
import { BASE_URL } from "../configs"

const singleProductAction = (id) => dispatch => {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    axios.get(`${BASE_URL}/products/${id}`)
        .then(response => dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: SINGLE_PRODUCT_FAIL, payload: error }))
}

export default singleProductAction;