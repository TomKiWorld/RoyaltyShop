import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


import EmptyList from '../EmptyList/EmptyList';
import OrdersOverview from '../OrdersOverview/OrdersOverview';
import OrderDetails from '../OrderDetails/OrderDetails';

import { selectCurrentOrder } from '../../redux/orders/orders.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { unsetCurrentOrder } from '../../redux/orders/orders.actions';

const OrderHistory = ({ orders, currentOrder, unsetCurrentOrder }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentOrder]);

  return (
    !orders.length ?
    <EmptyList title={`No orders placed so far`} />
    :
    <div 
      className='orders-container' 
      style={{ 
        left: currentOrder ? '-100%' : 0}}>
      <OrdersOverview orders={orders} />
      <div className='order-details-container'>
        <p
          className='pointer' 
          onClick={unsetCurrentOrder}>
          &#10594; Back to Orders overview</p>
        <OrderDetails order={currentOrder} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  unsetCurrentOrder: () => dispatch(unsetCurrentOrder())
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentOrder: selectCurrentOrder
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderHistory));
