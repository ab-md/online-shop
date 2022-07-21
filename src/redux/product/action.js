import axios from "axios"
import { GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actionTypes";
import { BASE_URL } from "../configs"

const productAction = (id) => dispatch => {
    dispatch({ type: GET_PRODUCT_REQUEST });
    axios.get(`${BASE_URL}/products/${id}`)
        .then(response => dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: GET_PRODUCT_FAIL, payload: error }))
}

export default productAction;