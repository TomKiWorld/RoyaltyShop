import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';


const ProfileLinks = () => {
  return (
    <React.Fragment>
      <Link
        className='nav-title nav-option' 
        to='/profile'>
          Profile
      </Link>
      <Link 
        className='nav-option' 
        to='/profile/order-history'>
          Order History
      </Link>
      <Link 
        className='nav-option' 
        to='/profile/wish-list'>
          Wish list
      </Link>
      <div 
        className='nav-option sign-out' 
        onClick={ () => auth.signOut() }>Sign Out</div>
    </React.Fragment>
  );
}

export default ProfileLinks;
