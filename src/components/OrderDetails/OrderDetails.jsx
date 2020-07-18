import React, { useEffect } from 'react';

import ItemDetails from '../ItemDetails/ItemDetails';

import './OrderDetails.scss';

const OrderDetails = ({ order }) => {
  useEffect(() => {
    const tableHeader = document.querySelector('.table-header');
    if (tableHeader) {
      tableHeader.scrollIntoView();
    }
  }, [order]);

  if (!order ) {
    return null;
  }
  const { id, date, total, orderItems } = order;
  const displayDate = date.seconds ? date.toDate().toDateString() : new Date(Date.parse(date)).toDateString();

  return (
    <div className='order-details'>
      <header className='table-header'>
        <div className='header-block'>
          <span>Order nr.</span>
        </div>
        <div className='header-block'>
          <span>Date</span>
        </div>
        <div className='header-block'>
          <span>Total</span>
        </div>
        <div className='header-block'>
          <span>Status</span>
        </div>
      </header>
      <main className='table-main'>
        <div className='order-row'>
          <span className='id'>{id}</span>
          <span className='date'>{displayDate}</span>
          <span className='total'>€{total}</span>
          <span className='status'>Processing</span>
        </div>
      </main>
      <div className='status-bar'>
        <span  className='status-bar-item'>
          <span className='status-bar-visual'>
            <span className='status-bar-circle done'></span>
            <span className='status-bar-strip done'></span>
          </span>
          <span className='status-bar-description'>
            <span className='status-bar-text'>Payment Received</span>
          </span>
        </span>
        <span  className='status-bar-item'>
          <span className='status-bar-visual'>
            <span className='status-bar-circle done'></span>
            <span className='status-bar-strip'></span>
          </span>
          <span className='status-bar-description'>
            <span className='status-bar-text'>Processing</span>
          </span>
        </span>
        <span  className='status-bar-item'>
          <span className='status-bar-visual'>
            <span className='status-bar-circle'></span>
            <span className='status-bar-strip'></span>
          </span>
          <span className='status-bar-description'>
            <span className='status-bar-text'>Out for delivery</span>
          </span>
        </span>
        <span  className='status-bar-item'>
          <span className='status-bar-visual'>
            <span className='status-bar-circle'></span>
          </span>
          <span className='status-bar-description'>
            <span className='status-bar-text'>Delivered</span>
          </span>
        </span>
      </div>
      <div className='container'>
        <header className='table-header'>
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
        </header>
        {
          orderItems.map(item => (
            <ItemDetails 
              key={item.id} 
              item={item} />
          ))
        }
      </div>
    </div>
  )
};

export default OrderDetails;
