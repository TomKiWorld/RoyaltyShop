import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import CtaButton from '../../components/CtaButton/CtaButton';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import WishList from '../../components/WishList/WishList';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectOrdersForPreview } from '../../redux/orders/orders.selectors';
import { fetchOrdersStart, unsetCurrentOrder } from '../../redux/orders/orders.actions';

import './AccountPage.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

const AccountPage = ({ currentUser, orders, history, fetchOrdersStart, unsetCurrentOrder }) => {
  const [view, setView] = useState('');
  useEffect(() => {
    window.scrollTo(0, 200);
  }, [view]);

  if (!currentUser) {
    return (
      <HeaderBanner imageUrl={`https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=1200&q=100`}>
        <div className='temp-title'>
          <h2>Please Sign in to view your account</h2>
          <CtaButton
           onClick={() => history.push(`${PUBLIC_URL}/signin`)}
          >Sign in</CtaButton>
        </div>
      </HeaderBanner>
    )
  }

  const { displayName, createdAt } = currentUser;
  let memberSince = createdAt.toDate().toDateString();

  const renderSwitch = (view) =>  {
    switch(view) {
      case 'OrderHistory':
        return <OrderHistory orders={orders} />;
      case 'WishList':    
        return <WishList />;
      default:
      return ''
    }
  }

  return (
    <article className='account-page'>
      <HeaderBanner imageUrl={`https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=1200&q=100`}>
        <div className='account-welcome'>
          <div className='account-welcome-background'>
            <h2>Hello {displayName}</h2>
          </div>
        </div>
      </HeaderBanner>
      <div className='container'>
        <p>RoyaltyShop member since: {memberSince}</p>
          <header className='account-page-header'>
            <p>View your order history or wish list:</p>
            <div className='account-page-cta'>
              <CtaButton
                onClick={() => {
                  fetchOrdersStart();
                  unsetCurrentOrder();
                  setView('OrderHistory');
                }}
              >Order History</CtaButton>
              <CtaButton
                onClick={() => setView('WishList')}
              >Wish List</CtaButton>
            </div>
          </header>
          { view ? 
            <div className='account-page-display'>
              { renderSwitch(view) }
            </div> 
          : null }
      </div>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
  unsetCurrentOrder: () => dispatch(unsetCurrentOrder())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  orders: selectOrdersForPreview
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
