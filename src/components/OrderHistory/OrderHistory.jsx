import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const OrderHistory = ({ cartItems }) => (
  <div className='order-history'>
    <div className='order-history-overview'>
      <h2>Overview</h2>
    </div>
    <div className='order-history-status'>
      <h2>Status</h2>
    
    </div>
    <div className='order-history-single'>
      <h2>Single</h2>
      
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(OrderHistory));
