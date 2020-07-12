import React from 'react';

import './ExpendingTitle.scss';

const ExpendingTitle = ({ title, subtitle }) => {
  return (
    <div className='expending-title'>
      <h2>{title}</h2>
      { subtitle ? <p><i>{subtitle}</i></p> : null }
    </div>
  );
}

export default ExpendingTitle;
