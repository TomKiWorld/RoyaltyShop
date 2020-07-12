import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

console.log(process.env.REACT_APP_SERVER)

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_API;
  const onToken = token => {
    axios({
      url: process.env.REACT_APP_SERVER,
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
