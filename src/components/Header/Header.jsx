import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LinkedLogo from '../LinkedLogo/LinkedLogo';
import Navigation from '../Navigation/Navigation';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ hideCart }) => {
  return (
    <header className='main-nav'>
      <div className='site-header container'>
        <LinkedLogo />
        <Navigation />
        <CartIcon />
      </div>
      { hideCart ? null : <CartDropDown /> }
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  hideCart: selectCartHidden
});

export default connect(mapStateToProps)(Header);
