import axios from "axios"
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../actionTypes";
import { BASE_URL } from "../configs"

const productsAction = () => dispatch => {
    // try {
    //     dispatch({ type: GET_PRODUCTS_REQUEST });
    //     const { data } = axios.get(`${BASE_URL}/products`);
    //     dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    // } catch (error) {
    //     dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
    // }
    dispatch({ type: GET_PRODUCTS_REQUEST });
    axios.get(`${BASE_URL}/products`)
        .then(response => dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: GET_PRODUCTS_FAIL, payload: error }))
}

export default productsAction;