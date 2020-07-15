import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { unsetCurrentOrder } from '../../redux/orders/orders.actions';
import { selectCurrentOrder } from '../../redux/orders/orders.selectors';

import PageTitle from '../../components/PageTitle/PageTitle';
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';
import CtaButton from '../../components/CtaButton/CtaButton';
import DropDownMessage from '../../components/DropDownMessage/DropDownMessage';
import ThankYouTemplate from '../../components/ThankYouTemplate/ThankYouTemplate';
import OrderDetails from '../../components/OrderDetails/OrderDetails';

import './CheckOutPage.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

const CheckOutPage = ({ cartItems, cartTotal, currentUser, history, currentOrder, unsetCurrentOrder }) => {
  const [dropdown, setDropdown] = useState(true);
  useEffect(() => {
    unsetCurrentOrder();
  }, [cartItems]);

  const onClose = () => {
    setDropdown(false);
    unsetCurrentOrder();
  }

  const renderDropDown = (dropdown) => {
    if(!dropdown || !currentOrder) {
      return null
    }

    return (
      <DropDownMessage
        onClose={onClose}>
        <ThankYouTemplate 
          imageUrl={`https://images.unsplash.com/photo-1515356619894-b89131037e3d?w=1200&q=100`}
          title={`For your order`}>
          <OrderDetails order={currentOrder}/>
        </ThankYouTemplate>
      </DropDownMessage>
    )
  }

  return (
    <section className='checkout-page container'>
      <PageTitle title={'Checkout'} />
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
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </header>
      <main className='table-main'>
        {
          cartItems.map(cartItem => 
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
          )
        }
      </main>
      <footer className='table-footer'>
        <span className='total'>Total: €{cartTotal}</span>
        {
          !currentUser 
          ? 
          <div className='take-action'>
            <p>Please login to place an order</p>
            <CtaButton
              onClick={() => history.push(`${PUBLIC_URL}/signin`)}
              >Sign in</CtaButton>
          </div>
          :
          <StripeCheckoutButton price={cartTotal} setDropdown={setDropdown} />
        }
        <div className='warning-message'>
          <p>*Please use the following test credit card for payments*</p>
          <strong>4242 4242 4242 4242- Exp: 01/22 - CVV 123</strong>
        </div>
      </footer>
      { renderDropDown(dropdown) } 
    </section>
  )
};

const mapDispatchToProps = dispatch => ({
  unsetCurrentOrder: () => dispatch(unsetCurrentOrder())
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  currentUser: selectCurrentUser,
  currentOrder: selectCurrentOrder
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
