import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Navigation = ({ currentUser }) => {
  return (
    <nav className='nav'>
      <Link className='nav-option' to='/shop'>
        Shop
      </Link>
      <Link className='nav-option' to='/contact'>
        Contact
      </Link>
      {
        currentUser ?
        <div className='nav-option' onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className='nav-option' to='/signin'>
          Sign In
        </Link>
      }
    </nav>
  );
}

const mapStateToProps = ({user: { currentUser }}) => ({
  currentUser
})

export default connect(mapStateToProps)(Navigation);
