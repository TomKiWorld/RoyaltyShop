import React from 'react';

import './DropDownMessage.scss';

const DropDownMessage = ({ children, onClose }) => {
  if (!children) {
    return null
  }

  return (
    <section className='drop-down-message'>
      <div className='drop-down-message-content'>
        <span 
          className='drop-down-message-close'
          onClick={onClose}>&#10005;</span>
        { children }
      </div>
    </section>
  )
};

export default DropDownMessage;
