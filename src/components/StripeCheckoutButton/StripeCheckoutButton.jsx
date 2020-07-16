import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';
import Preloader from '../Preloader/Preloader';

import { updateOrderInFirebase } from '../../redux/orders/orders.actions';


const StripeCheckoutButton = ({ price, updateOrderInFirebase, setDropdown }) => {
  const [loading, setLoading] = useState(false)
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_API;
  const onToken = token => {
    setLoading(true);
    axios({
      url: process.env.REACT_APP_SERVER,
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      updateOrderInFirebase();
      setLoading(false);
      setDropdown(true);
    })
    .catch(error => {
      console.log('Payment error: ', error)
      alert('There was an issue with your payment! Please make sure you use the provided credit card.');
    });
  };

  return (
    <React.Fragment>
      { loading ? <Preloader /> : null}
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
    </React.Fragment>
  )
};

const mapDispatchToProps = dispatch => ({
  updateOrderInFirebase: () => dispatch(updateOrderInFirebase())
});

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton));
