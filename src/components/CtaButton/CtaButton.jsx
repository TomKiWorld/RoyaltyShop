import React from 'react';

const CtaButton = ({ children, ...otherProps }) => (
  <button
    className='cta-button'
    {...otherProps}>
    { children}
  </button>
)

export default CtaButton;
