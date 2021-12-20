import CartActionTypes from "./cart.type";

export const toggleCartHidden = () => {
    return {
        type:CartActionTypes.TOGGLE_CART_HIDDEN
    }
}