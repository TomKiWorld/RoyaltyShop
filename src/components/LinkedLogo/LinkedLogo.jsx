import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/royalty-logo.svg';

const LinkedLogo = () => {
  return (
    <Link className='logo-container' to='/' aria-label='Home page' >
      <Logo className='logo' />
    </Link>
  );
}

export default LinkedLogo;
