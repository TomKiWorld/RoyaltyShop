import React from 'react';

import './DropDownBar.scss';

const DropDownBar = ({ children }) => {
  return (
    <div className='drop-down-bar'>
      {children}
    </div>
  )
};

export default DropDownBar;
