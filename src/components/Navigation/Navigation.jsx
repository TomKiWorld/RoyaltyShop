import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as ProfileIcon }  from '../../assets/profile.svg';
import ShopLinks from '../ShopLinks/ShopLinks';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

const Navigation = ({ currentUser, toggleShopNav }) => {
  const getClosestTrigger =  (elem, selector) =>  {
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if ( elem.matches( selector ) ) return elem;
    }
    return null;
  };

  const getTriggerElement = (trigger) => {
    let element = trigger;
    if (!trigger.classList.contains('nav-trigger')) {
      element = getClosestTrigger(trigger, '.nav-trigger');
    }
    return element;
  }

  const handleClick = (trigger) => {
    const element = getTriggerElement(trigger);
    if (element.classList.contains('trigger-enter')) {
      handleLeave();
      return handleEnter(element);
    } else {
      return handleEnter(element);
    }
  }
  
  const handleEnter = (trigger) => {
    const element = getTriggerElement(trigger);
    const background = document.querySelector('.dropdown-background');
    const nav = document.querySelector('.site-header');
    background.classList.add('open');
    element.classList.add('trigger-enter');
    setTimeout(() => element.classList.add('trigger-enter-active'), 150);
    const dropdown = element.querySelector('.dropdown-links');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  const handleLeave = () => {
    const openDropdown = document.querySelector('.trigger-enter');
    if (!openDropdown) {
      return
    }
    const background = document.querySelector('.dropdown-background');
    openDropdown.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }

  return (
    <React.Fragment>
      <div className='dropdown-background'>
        <span className='arrow'></span>
      </div>
      <nav className='nav'>        
        <ul className='nav-list'>
          <li 
            className='nav-trigger'
            onClick={(e) => handleClick(e.target)}
            onMouseEnter={(e) => handleEnter(e.target)}
            onMouseLeave={() => handleLeave()}
          >
            Shop
            <div className='dropdown-links'>
              <ShopLinks />
            </div>
          </li>
          <li className='nav-option'>
            <Link to='/contact'>
              Contact
            </Link>
          </li>        
          {
            currentUser ?
            <li 
              className='nav-trigger'
              onClick={(e) => handleClick(e.target)}
              onMouseEnter={(e) => handleEnter(e.target)}
              onMouseLeave={() => handleLeave()}
            >
              <ProfileIcon className='profile-icon' />              
              <div className='dropdown-links'>
                <ProfileLinks />
              </div>
            </li>
            :
            <li className='nav-option'>
              <Link to='/signin'>
                Sign In
              </Link>
            </li>
          }
        </ul>
      </nav>
    </React.Fragment>      
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Navigation);
