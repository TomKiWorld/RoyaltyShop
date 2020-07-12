import React from 'react';

import './HeaderTitleBlock.scss';

const HeaderTitleBlock = ({ title, subtitle }) => {
  return (
    <div className='header-title-block'>
      <div className='title-container'>
        <h2>{title}</h2>
        { subtitle ? <p><i>{subtitle}</i></p> : null }
      </div>
    </div>
  );
}

export default HeaderTitleBlock;
