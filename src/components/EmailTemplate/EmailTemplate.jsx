import React from 'react';

import './EmailTemplate.scss';

const EmailTemplate = ({ email, subject, orderNr, content }) => {
  return (
    <div className='email-template container'>
      <h3>We received the following message from you:</h3>
      <p>If this was a real site, we would have sent you an email to let you know
      we will get back to you within a few days.</p>
      <p>Instead, here is a summary of your message:</p>
      <div className='email-layout'>
        <p className='subject'><span>Subject:</span>{subject}</p>
        <p className='email'><span>From:</span>{email}</p>
        {
          orderNr ?
          <p className='orderNr'><span>orderNr:</span>{orderNr}</p>
          : null
        }
        <p className='content'>{content}</p>
      </div>
    </div>
  );
}

export default EmailTemplate;
