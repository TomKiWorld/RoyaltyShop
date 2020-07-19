import React from 'react';
import { ReactComponent as RoyaltyLogo } from '../../assets/royalty-logo.svg';

import './BenefitsBanner.scss';

const BenefitsBanner = () => {
  return (
    <div className='benefits-banner container'>
      <div className='benefits-banner-box'>
        <RoyaltyLogo className='logo' />
        <h3 className='benefits-banner-title'><span>Quality</span> Products</h3>
      </div>
      <div className='benefits-banner-box'>
        <RoyaltyLogo className='logo' />
        <h3 className='benefits-banner-title'><span>Quick</span> Delivery</h3>
      </div>
      <div className='benefits-banner-box'>
        <RoyaltyLogo className='logo' />
        <h3 className='benefits-banner-title'><span>Free</span> Shipment</h3>
      </div>
    </div>
  );
}

export default BenefitsBanner;
