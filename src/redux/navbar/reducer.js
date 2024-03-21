import { HIDE_NAV, SHOW_NAV } from "../actionTypes";

const initialState = true;

const navReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_NAV:
            return state = action.payload;

        case HIDE_NAV:
            return state = action.payload;

        default:
            return state;
    }

}

export {
    navReducer
}