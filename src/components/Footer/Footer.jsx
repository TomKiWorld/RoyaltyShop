import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import LinkedLogo from '../LinkedLogo/LinkedLogo';
import ShopLinks from '../ShopLinks/ShopLinks';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

const PUBLIC_URL = process.env.PUBLIC_URL;

const Footer = ({ currentUser }) => {
  return (
    <footer className='site-footer'>
      <div className='footer-nav'>
        <div className='footer-section'>
          <LinkedLogo />
          <Link className='nav-option' to={PUBLIC_URL}>
            Home
          </Link>
          <Link className='nav-option' to={`${PUBLIC_URL}/contact`}>
            Contact
          </Link>
        </div>
        <div className='footer-section'>          
          <ShopLinks />
        </div>
        <div className='footer-section'>
            {
              currentUser ?
              <ProfileLinks currentUser={ currentUser } />
              :
              <Link className='nav-option' to={`${PUBLIC_URL}/signin`}>
                Sign In
              </Link>
            }
        </div>
      </div>
      <p>Made with <span>&hearts;</span> by <a className='tomki-link' href='https://github.com/TomKiWorld' target='_blank' rel='noopener noreferrer'>TomKiWorld</a></p>
    </footer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Footer);
