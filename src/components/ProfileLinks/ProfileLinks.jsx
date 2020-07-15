import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOutStart } from '../../redux/user/user.actions';

const PUBLIC_URL = process.env.PUBLIC_URL;

const closeDropDown = () => {
  const background = document.querySelector('.dropdown-background');
  return background ? setTimeout(() => background.classList.remove('open'), 1000) : null;
}

const ProfileLinks = ({ signOutStart }) => {
  return (
    <React.Fragment>
      <Link
        className='nav-title nav-option'
        to={`${PUBLIC_URL}/account`}>
          Account
      </Link>
      <div 
        className='nav-option sign-out' 
        onClick={() => {
          signOutStart();
          closeDropDown()
          }
        }>Sign Out</div>
    </React.Fragment>
  );
};

const mapStateToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(null, mapStateToProps)(ProfileLinks);
