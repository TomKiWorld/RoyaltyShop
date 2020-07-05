import React from 'react';

const CtaButton = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted ': '' }cta-button`}
    {...otherProps}>
    { children}
  </button>
)

export default CtaButton;