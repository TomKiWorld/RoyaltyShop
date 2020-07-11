import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const PUBLIC_URL = process.env.PUBLIC_URL;

const ShopLinks = ({ sections }) => (
  <React.Fragment>
    <Link 
      className='nav-title nav-option' 
      to={`${PUBLIC_URL}/shop`}>
      Collections
    </Link>
    {
      sections.map(({ id, title, linkUrl }) => (
        <Link 
          key={id} 
          className='nav-option' 
          to={`${PUBLIC_URL}/${linkUrl}`}>
            { title }
        </Link>
      ))
    }
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(ShopLinks);
