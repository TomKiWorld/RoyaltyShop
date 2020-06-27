import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';
import { ReactComponent as Underline } from '../../assets/underline.svg';

import './CheckOutPage.scss'

const CheckOutPage = ({ cartItems, cartTotal }) => (
  <section className='checkout-page container'>
    <h2 className='page-title'>Checkout</h2>
    <Underline className='page-title-underline'/>
    <header className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </header>
    <main className='checkout-main'>
      {
        cartItems.map(cartItem => 
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
    </main>
    <footer className='total'>
      <span>Total: €{cartTotal}</span>
    </footer>
  </section>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
