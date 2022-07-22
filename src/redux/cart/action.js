const { ADD_TO_CART, INCREASE, DECREASE, DELETE, CLEAR_CART, CHECK_OUT } = require("../actionTypes")

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

const checkout = () => {
    return {type: CHECK_OUT};
}

export {
    addToCart,
    increase,
    decrease,
    deleteItem,
    clearCart,
    checkout,
}