import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div onClick={toggleCartHidden} className='cart-icon'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

const mapDispatchtoProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
	mapStateToProps,
	mapDispatchtoProps
)(CartIcon);
