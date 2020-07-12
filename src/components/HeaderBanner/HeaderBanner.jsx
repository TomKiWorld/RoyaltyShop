import React from 'react';

const HeaderBanner = ({ imageUrl, children }) => {
  return (
    <div className='header-banner' style={{ backgroundImage: `url(${imageUrl})` }}>
      {children}
    </div>
  );
}

export default HeaderBanner;
