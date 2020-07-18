import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOutStart } from '../../redux/user/user.actions';

const PUBLIC_URL = process.env.PUBLIC_URL;

const ProfileLinks = ({ signOutStart, handleClick }) => {

  const signOutClick = () => {
    if (handleClick) {
      handleClick();
    }
    signOutStart();
  }

  return (
    <React.Fragment>
      <Link
        className='nav-title nav-option pointer'
        onClick={handleClick ? handleClick : null}
        to={`${PUBLIC_URL}/account`}>
          Account
      </Link>
      <div 
        className='nav-option sign-out pointer' 
        onClick={() => signOutClick() }>Sign Out</div>
    </React.Fragment>
  );
};

const mapStateToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(null, mapStateToProps)(ProfileLinks);
