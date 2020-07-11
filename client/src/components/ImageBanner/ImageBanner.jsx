import React from 'react';

const ImageBanner = ({ imageUrl, children }) => {
  return (
    <div className='image-banner' style={{ backgroundImage: `url(${imageUrl})` }}>
      {children}
    </div>
  );
}

export default ImageBanner;
