import React from 'react';
import { ReactComponent as LostSVG } from '../../assets/lost.svg';
import { ReactComponent as Underline } from '../../assets/underline.svg';

const NotFoundPage = () => (
  <section className='short-page container'>
    <h1 className='page-title'>This Page is Lost in the Woods</h1>
    <Underline className='page-title-underline'/>
    <LostSVG className='main-image' />
    <p>You wandered off the main path, and reached a hidden garden.</p>
    <p>But there is nothing to find here. Get back on that horse and look for a page in the main navigation.</p>
    <p>Hopefully you'll find what you are looking for and we will all have a happy ending.</p>
  </section>
);

export default NotFoundPage;
