const { ADD_TO_CART, INCREASE, DECREASE, DELETE, CLEAR_CART } = require("../actionTypes");

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const hasProduct = state.cart.find(product => product.id === action.payload.id)// ? true : false;
            state.cart = hasProduct ? state.cart.map(product =>
                product.id === action.payload.id ? { ...product, qty: product.qty++ } : product) :
                [...state.cart, { ...action.payload, qty: 1 }];

            return {
                ...state,
                cart: state.cart
            }

        case INCREASE:
            state.cart = state.cart.map(product =>
                product.id === action.payload ? { ...product, qty: product.qty + 1 } : product)
            return {
                ...state,
                cart: state.cart
            }

        case DECREASE:
            const product = state.cart.find(p => p.id === action.payload);
            state.cart = product.qty > 1 ?
                state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty - 1 } : product) :
                state.cart;
            return {
                ...state,
                cart: state.cart
            }

        case DELETE:
            state.cart = state.cart.filter(product => product.id !== action.payload)
            return {
                ...state,
                cart: state.cart
            }

        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
}

export default cartReducer;