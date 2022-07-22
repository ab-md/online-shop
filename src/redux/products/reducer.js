import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: {}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: {}
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default productsReducer;