import React, { useState } from 'react';

const FaqToggle = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
        <button 
          className='faq-question'
          onClick={(() => setOpen(!open))}>{ question }</button>
        <div className={`faq-answer${ open ? ' visible' : '' }`} >
          <p>{ answer }</p>
        </div>
      </React.Fragment>
  );
}

export default FaqToggle;
