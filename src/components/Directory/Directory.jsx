import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../MenuItem/MenuItem';

const Directory = ({ sections }) => (
  <div className='directory-menu container'>
    {
      sections.map(({ id, ...sectionProps }) => (
        <MenuItem 
          key={id} 
          {...sectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
