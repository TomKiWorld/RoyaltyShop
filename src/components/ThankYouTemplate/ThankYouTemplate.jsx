import React from 'react';
import { withRouter } from 'react-router-dom';

import HeaderBanner from '../HeaderBanner/HeaderBanner';
import CtaButton from '../CtaButton/CtaButton';

import './ThankYouTemplate.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

const ThankYouTemplate = ({ title, imageUrl, children, history }) => {
  const dispalyTitle = !title ? `For being our customer` : title;
  return (
    <div className='thank-you-template'>
      <HeaderBanner imageUrl={imageUrl}>
        <div className='thank-you-template-title'>
          <h2>Thank you</h2>
          <p>{ dispalyTitle} </p>
        </div>
      </HeaderBanner>
      <p className='warning-message'>Just a reminder, This is a Demo site.</p>
      {children}
      <div className='continue-block container'>
        <div className='continue-block-link'>
          <p>Continue</p>
          <CtaButton
            onClick={() => history.push(`${PUBLIC_URL}/shop`)}
          >Shopping</CtaButton>
        </div>
        <div className='continue-block-link'>
          <p>Go to</p>
          <CtaButton
            onClick={() => history.push(`${PUBLIC_URL}/account`)}
          >Order History</CtaButton>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ThankYouTemplate);

