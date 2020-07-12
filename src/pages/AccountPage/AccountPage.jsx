import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import Preloader from '../../components/Preloader/Preloader';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './AccountPage.scss'

const AccountPage = ({ currentUser }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!currentUser) {
    return (
      <Preloader />
    )
  }

  const { displayName, createdAt } = currentUser;
  let memberSince = createdAt.toDate().toDateString();

  console.log(memberSince)

  return (
    <section className='account-page'>
      <HeaderBanner imageUrl={`https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=1200&q=100`}>
        <div className='account-welcome'>
          <div className='account-welcome-background'>
            <h2>Hey {displayName}</h2>
          </div>
        </div>
      </HeaderBanner>
      <div className='container'>
        <p>RoyaltyShop member since: {memberSince}</p>
      </div>

    </section>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AccountPage);
