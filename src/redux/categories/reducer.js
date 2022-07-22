import { GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    data: [],
    error: {}
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST :
            return {
                ...state,
                loading: true,
                error: {}
            }

        case GET_CATEGORIES_SUCCESS :
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case GET_CATEGORIES_FAIL :
            return {
                loading: false,
                data: [],
                error: action.payload
            }

            default: 
            return state;
    }
}

export default categoriesReducer;