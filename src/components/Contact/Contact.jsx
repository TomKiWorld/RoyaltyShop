import React, { useState } from 'react';

import DropDownMessage from '../DropDownMessage/DropDownMessage';
import ThankYouTemplate from '../ThankYouTemplate/ThankYouTemplate';
import EmailTemplate from '../EmailTemplate/EmailTemplate';
import FormInput from '../FormInput/FormInput';
import CtaButton from '../CtaButton/CtaButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Contact = () => {
  const [dropdown, setDropdown] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectErr, setSubjectErr] = useState('');
  const [orderNr, setOrderNr] = useState('');
  const [content, setContent] = useState('');
  const [contentErr, setContentErr] = useState('');

  const onClose = () => {
    setDropdown(false);
    setEmail('');
    setSubject('');
    setOrderNr('');
    setContent('');
  }

  const renderDropDown = (dropdown) => {
    if(!dropdown || !email || !subject || !content) {
      return null
    }

    return (
      <DropDownMessage
        onClose={onClose}>
        <ThankYouTemplate 
          imageUrl={`https://images.unsplash.com/photo-1515356619894-b89131037e3d?w=800&q=100`}
          title={`For your message`}>
          <EmailTemplate 
            email={email}
            subject={subject}
            orderNr={orderNr}
            content={content}
          />
        </ThankYouTemplate>
      </DropDownMessage>
    )
  }

  const handleSubmit =  e => {
    e.preventDefault();

    if (!email) {
      setEmailErr('Please enter your Email to continue');
      return;
    }

    if (!subject) {
      setSubjectErr('Please enter a subject to continue');
      return;
    }

    if (!content) {
      setContentErr('Please enter a message to continue');
      return;
    }

    setEmailErr('');
    setSubjectErr('');
    setContentErr('');
    setDropdown(true);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Email'
          error={emailErr}
          name='email' 
          type='email' 
          value={ email } 
          handleChange={(e) =>  setEmail(e.target.value)}
          required />
        <FormInput 
          label='Subject'
          error={subjectErr}
          name='subject' 
          type='text' 
          value={ subject } 
          handleChange={(e) =>  setSubject(e.target.value)}
          required />
        <FormInput 
          label='Order nr.'
          name='subject' 
          type='text' 
          value={ orderNr } 
          handleChange={(e) =>  setOrderNr(e.target.value)} />
        <textarea 
          className='message-content'
          rows='5'
          name='content' 
          form='contact-form'
          value={ content } 
          onChange={(e) =>  setContent(e.target.value)}>
        </textarea>
        {
          contentErr ?
          (
            <ErrorMessage>{contentErr}</ErrorMessage>
          )
          : null
        }
        <CtaButton 
            type='submit'>Send</CtaButton>
      </form>
      { renderDropDown(dropdown) } 
    </React.Fragment>
  )
};

export default Contact;
