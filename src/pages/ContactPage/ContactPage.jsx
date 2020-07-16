import React from 'react';

import Contact from '../../components/Contact/Contact';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import FaqSection from '../../components/FaqSection/FaqSection';

import './ContactPage.scss';

const ContactPage = () => (
  <section className='contact-page'>
    <div className='contact-page-split'>
      <div className='contact-page-split-content'>
        <h1>Contact us</h1>
        <Contact />
      </div>
      <HeaderBanner
        imageUrl={`https://images.unsplash.com/photo-1527698334848-f475f9d99449`}
      />
    </div>
    <FaqSection />
  </section>
);

export default ContactPage;
