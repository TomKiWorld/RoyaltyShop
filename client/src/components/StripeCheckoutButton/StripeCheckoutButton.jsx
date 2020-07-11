import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const PUBLIC_URL = process.env.PUBLIC_URL;

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_API;
  console.log(PUBLIC_URL)
  const onToken = token => {
    axios({
      url: `${PUBLIC_URL}/payment`,
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      alert('Payment successful');
    })
    .catch(error => {
      console.log('Payment error: ', error)
      alert('There was an issue with your payment! Please make sure you use the provided credit card.');
    });
  };

  return (
    <StripeCheckout 
      label='Payment Info'
      name='RoyaltyShop'
      currency='EUR'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is €${price}`}
      amount={ priceForStripe }
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
