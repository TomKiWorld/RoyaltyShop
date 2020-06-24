import React from 'react';
import { connect } from 'react-redux';

import CtaButton from '../CtaButton/CtaButton';
import CartItem from '../CartItem/CartItem';

const CartDropDown = ({ cartItems }) => (
  <div className={`${!cartItems.length ? 'empty ' : ''}cart-dropdown`}>
    <div className='cart-items'>
      {
        cartItems.length
        ? cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem} />)
        : <span>There are no items in your cart</span>
      }
    </div>
    {
      cartItems.length
      ? <CtaButton>Got to Checkout</CtaButton>
      : null
    }    
  </div>
);

const mapStateToProps = ({cart: { cartItems }}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropDown);
