import React from 'react';
import { connect } from 'react-redux';

import CtaButton from '../CtaButton/CtaButton';

import { setCurrentOrder } from '../../redux/orders/orders.actions';

const OrderRow = ({ order, setCurrentOrder }) => {
  const { id, date, total } = order;
  const displayDate = date.seconds ? date.toDate().toDateString() : date;
  return (
    <div className='order-row'>
      <span>{id}</span>
      <span>{displayDate}</span>
      <span>€{total}</span>
      <span>Processing</span>
      <span className='details'>
        <CtaButton
          onClick={() => setCurrentOrder(order)}
        >Details</CtaButton>
      </span>      
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setCurrentOrder: order => dispatch(setCurrentOrder(order))
});

export default connect(null, mapDispatchToProps)(OrderRow);
