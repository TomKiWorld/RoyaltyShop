import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle';
import { ReactComponent as UnderAttack } from '../../assets/under-attack.svg';

const ErrorPage = () => (
  <section className='short-page container'>
    <PageTitle title={'Something went terribly wrong'}/>
    <UnderAttack className='main-image' />
    <p>While you were trying to load this page a dragon attacked the kingdom.</p>
    <p>Do not worry, our fearless knights came to the rescue.</p>
    <p>Please try reloading the page or go back and try again.</p>
  </section>
);

export default ErrorPage;
