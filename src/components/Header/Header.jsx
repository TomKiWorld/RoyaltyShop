import React from 'react';
import { connect } from 'react-redux';
import LinkedLogo from '../LinkedLogo/LinkedLogo';
import Navigation from '../Navigation/Navigation';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

const Header = ({ hidden }) => {
  return (
    <header className='container'>
      <div className='site-header'>
        <LinkedLogo />
        <Navigation />
        <CartIcon />
      </div>
      { hidden ? null : <CartDropDown /> }
    </header>
  );
}

const mapStateToProps = ({cart: { hidden }}) => ({
  hidden
})

export default connect(mapStateToProps)(Header);
