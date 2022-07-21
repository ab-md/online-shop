import {  GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    data: {},
    error: ""
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case GET_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default productReducer;