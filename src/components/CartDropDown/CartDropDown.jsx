import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CtaButton from '../CtaButton/CtaButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const PUBLIC_URL = process.env.PUBLIC_URL;

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className='cart-container'>
    <div className={`${!cartItems.length ? 'empty ' : ''}cart-body`}>
      <span 
        className='cart-close'
        onClick={()=> dispatch(toggleCartHidden())}>&#10005;</span>
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
        ? <CtaButton 
            role='link'
            onClick={() => {
              history.push(`${PUBLIC_URL}/checkout`);
              dispatch(toggleCartHidden());
            }}
          >Got to Checkout</CtaButton>
        : null
      }    
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
