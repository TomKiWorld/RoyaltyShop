import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_API;

  const onToken = token => {
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Payment Info'
      name='RoyaltyShop'
      currency='EUR'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is €${price}`}
      amount={ priceForStripe }
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
