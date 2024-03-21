import { HIDE_NAV, SHOW_NAV, WIDE_NAV } from "../actionTypes"

const showNavbar = () => {
    return {
        type: SHOW_NAV,
        payload: true
    }
}

const hideNavbar = () => {
    return {
        type: HIDE_NAV,
        payload: false
    }
}

const wideNavbar = () => {
    return {
        type: WIDE_NAV,
        payload: "none"
    }
}

export {
    showNavbar,
    hideNavbar,
    wideNavbar
}