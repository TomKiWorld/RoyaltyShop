import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as MenuIcon }  from '../../assets/menu.svg';
import { ReactComponent as ProfileIcon }  from '../../assets/profile.svg';
import { ReactComponent as ContactIcon }  from '../../assets/contact.svg';
import { ReactComponent as SearchIcon }  from '../../assets/search.svg';

import LinkedLogo from '../LinkedLogo/LinkedLogo';
import DropDownBar from '../DropDownBar/DropDownBar';
import ShopLinks from '../ShopLinks/ShopLinks';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import SearchBar from '../SearchBar/SearchBar';

import './Navigation.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

const Navigation = ({ currentUser }) => {
  const [viewBar, setViewBar] = useState(true);
  const [open, setOpen] = useState('search');

  const toggleBar = (navItem) => {
    if (open === navItem) {
      resetBar();
    } else {
      setViewBar(true);
      setOpen(navItem);
    }
  }

  const resetBar = () => {
    setViewBar(false);
    setOpen('');
  }

  const renderBar = () => {
    if (!viewBar || !open) {
      return null
    }

    return  (
      <DropDownBar>
        {renderSwitch(open)}
      </DropDownBar>
    )
  }

  const renderSwitch = (open) =>  {
    switch(open) {
      case 'shop':
        return <ShopLinks 
          handleClick={() => setViewBar(false)}
        />;
      case 'profile':    
        return <ProfileLinks 
          handleClick={() => setViewBar(false)}
        />;
      case 'search':    
        return <SearchBar 
          handleClick={() => setViewBar(false)}
        />;
      default:
      return null
    }
  }

  return (
    <React.Fragment>
      <LinkedLogo 
        handleClick={resetBar}
      />
      <nav className='nav'>
        <ul className='nav-list'>
          <li 
            className='nav-option nav-icon pointer'
            aria-label='shop'
            onClick={() => toggleBar('shop')}
          >
            <MenuIcon className='menu-icon' />
          </li>
          <ShopLinks handleClick={resetBar} />
          <li 
            className='nav-option nav-icon pointer'
            aria-label='search'
            onClick={() => toggleBar('search')}
          >
            <SearchIcon className='menu-icon' />
          </li>
          <li 
            className='nav-option nav-icon pointer'>
            <Link 
              aria-label='contact'
              to={`${PUBLIC_URL}/contact`}
              onClick={resetBar}>
              <ContactIcon className='menu-icon' />
            </Link>
          </li> 
          {
            currentUser ?
            <li 
              className='nav-option nav-icon pointer'
              onClick={() => toggleBar('profile')}
            >
              <ProfileIcon className='menu-icon' />
            </li>
            :
            <li className='nav-option nav-icon pointer'>
              <Link 
                aria-label='sign in'
                to={`${PUBLIC_URL}/signin`}
                onClick={resetBar}>
                <ProfileIcon className='menu-icon' />
              </Link>
            </li>
          }
        </ul>
      </nav>
      { renderBar() }
    </React.Fragment>      
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Navigation);
