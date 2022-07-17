const { ADD_TO_CART, INCREASE, DECREASE, DELETE, CLEAR_CART } = require("../actionTypes")

const addToCart = product => {
    return {type: ADD_TO_CART, payload: product};
}

const increase = productId => {
    return {type: INCREASE, payload: productId};
}

const decrease = productId => {
    return {type: DECREASE, payload: productId};
}

const deleteItem = productId => {
    return {type: DELETE, payload: productId};
}

const clearCart = () => {
    return {type: CLEAR_CART};
}

export {
    addToCart,
    increase,
    decrease,
    deleteItem,
    clearCart,
}