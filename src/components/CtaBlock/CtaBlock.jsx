import React from 'react';

import CtaButton from '../CtaButton/CtaButton';

const CtaBlock = ({ title, subtitle, message, btnText, onBtnClick }) => {
  return (
    <div className='cta-block'>
      <div className='cta-block-box'>
        <h2 className='cta-block-title'>{title}</h2>
        <p className='cta-block-subtitle'>{subtitle}</p>
        <p className='cta-block-message'>{message}</p>
        <CtaButton
          onClick={onBtnClick}
        >{btnText}</CtaButton>
      </div>
    </div>
  );
}

export default CtaBlock;
