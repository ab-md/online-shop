import {  SINGLE_PRODUCT_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    data: {},
    error: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: {}
            }

        case SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case SINGLE_PRODUCT_FAIL:
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