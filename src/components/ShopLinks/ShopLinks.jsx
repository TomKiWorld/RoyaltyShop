import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const PUBLIC_URL = process.env.PUBLIC_URL;

const ShopLinks = ({ sections, handleClick }) => (
  <div className='shop-links'>
    <Link 
      className='nav-title nav-option pointer'
      onClick={handleClick ? handleClick : null}
      to={`${PUBLIC_URL}/shop`}>
      Collections
    </Link>
    {
      sections.map(({ id, title, linkUrl }) => (
        <Link 
          key={id} 
          className='nav-option pointer' 
          onClick={handleClick ? handleClick : null}
          to={`${PUBLIC_URL}/${linkUrl}`}>
            { title }
        </Link>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(ShopLinks);
