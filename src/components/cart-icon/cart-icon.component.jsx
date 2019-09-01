import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
	<div onClick={toggleCartHidden} className='cart-icon'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
});

const mapDispatchtoProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
	null,
	mapDispatchtoProps
)(CartIcon);
