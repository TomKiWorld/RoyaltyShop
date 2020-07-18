import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RoyaltyLogo } from '../../assets/royalty-logo.svg';

const PUBLIC_URL = process.env.PUBLIC_URL;

const LinkedLogo = ({ handleClick }) => {
  return (
    <Link 
      className='logo-container' 
      onClick={handleClick ? handleClick : null}
      to={PUBLIC_URL} aria-label='Home page' >
      <RoyaltyLogo className='logo' />
    </Link>
  );
}

export default LinkedLogo;
