import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle';
import { ReactComponent as ComingSoonSVG } from '../../assets/horse-carriage.svg';

const ComingSoonPage = () => (
  <section className='short-page container'>
    <PageTitle title={'Coming Soon!'}/>
    <ComingSoonSVG className='main-image' />
    <p>The kingdom is expanding and growing into a wonderful place to be.</p>
    <p>That is why we are working hard on making all the pages needed as fast as possible.</p>
    <p>We hope to have this page ready for you soon! Don't give up!</p>
  </section>
);

export default ComingSoonPage;
