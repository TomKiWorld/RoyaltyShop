import React from 'react';

import './TwoImagesTitleBlock.scss';

const TwoImagesTitleBlock = ({ title, subtitle, imageOne, imageTwo }) => {
  return (
    <div className='two-images-title-block'>
      <div className='image-container'>
        <div className='image-block'  style={{ backgroundImage: `url(${imageOne})` }} />
      </div>
      <div className='title-container'>
        <div className='title-block'>
          <h2>{title}</h2>
          { subtitle ? <p>{subtitle}</p> : null }
        </div>
      </div>
      <div className='image-container'>
        <div className='image-block'  style={{ backgroundImage: `url(${imageTwo})` }} />        
      </div>
    </div>
  );
}

export default TwoImagesTitleBlock;
