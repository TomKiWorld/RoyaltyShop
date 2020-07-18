import React from 'react';

const CtaButton = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted ': '' }cta-button pointer`}
    {...otherProps}>
    { children}
  </button>
)

export default React.memo(CtaButton);
