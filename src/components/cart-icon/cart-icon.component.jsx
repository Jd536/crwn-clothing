import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";


import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon />
            <div className="item-count">{itemCount}</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);