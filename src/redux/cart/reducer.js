const { ADD_TO_CART, INCREASE, DECREASE, DELETE, CLEAR_CART, CHECK_OUT } = require("../actionTypes");

const initialState = {
    cart: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const counter = items => {
    const itemsCounter = items.reduce((total, product) => total + product.qty, 0);
    const total = items.reduce((total, product) => total + product.price * product.qty, 0).toFixed(2);
    return { itemsCounter, total }
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
                cart: state.cart,
                ...counter(state.cart)
            }

        case INCREASE:
            state.cart = state.cart.map(product =>
                product.id === action.payload ? { ...product, qty: product.qty + 1 } : product)
            return {
                ...state,
                cart: state.cart,
                ...counter(state.cart)
            }

        case DECREASE:
            const product = state.cart.find(p => p.id === action.payload);
            state.cart = product.qty > 1 ?
                state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty - 1 } : product) :
                state.cart;
            return {
                ...state,
                cart: state.cart,
                ...counter(state.cart)
            }

        case DELETE:
            state.cart = state.cart.filter(product => product.id !== action.payload)
            return {
                ...state,
                cart: state.cart,
                ...counter(state.cart)
            }

        case CHECK_OUT:
            return {
                cart: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }

        case CLEAR_CART:
            return {
                cart: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }

        default:
            return state;
    }
}

export default cartReducer;