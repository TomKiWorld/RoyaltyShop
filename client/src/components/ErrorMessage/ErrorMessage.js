import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <p className='warning-message'>{children}</p>
  );
}

export default ErrorMessage;
