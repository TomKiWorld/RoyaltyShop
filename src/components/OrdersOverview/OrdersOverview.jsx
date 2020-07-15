import React from 'react';

import OrderRow from '../OrderRow/OrderRow';

const OrdersOverview = ({ orders }) => {
  return (
    <div className='orders-overview'>
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
        <div className='header-block'>
          <span>Details</span>
        </div>
      </header>
      <main className='table-main'>
        {
          orders.map(order =>{
            return <OrderRow key={order.id} order={order} />}
          )
        }
      </main>
      <footer className='table-footer'>
        <p>You can view more details regarding each order by pressing the details button</p>
      </footer>
    </div>
  )
};

export default OrdersOverview;
