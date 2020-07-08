import React from 'react';
import { ReactComponent as UnderAttack } from '../../assets/under-attack.svg';
import { ReactComponent as Underline } from '../../assets/underline.svg';

const ErrorPage = () => (
  <section className='short-page container'>
    <h1 className='page-title'>Something went terribly wrong</h1>
    <Underline className='page-title-underline'/>
    <UnderAttack className='main-image' />
    <p>While you were trying to load this page a dragon attacked the kingdom.</p>
    <p>Do not worry, our fearless knights came to the rescue.</p>
    <p>Please try reloading the page or go back and try again.</p>
  </section>
);

export default ErrorPage;
