import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const ShopLinks = ({ sections, dispatch, header }) => (
  <React.Fragment>
    <Link 
      className='nav-title nav-option' 
      to='/shop'>
      Collections
    </Link>
    {
      sections.map(({ id, title, linkUrl }) => (
        <Link 
          key={id} 
          className='nav-option' 
          to={`/${linkUrl}`}>
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
