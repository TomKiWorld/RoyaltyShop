import React from 'react';

import FAQ_DATA from './FaqSection.data';

import PageTitle from '../PageTitle/PageTitle';
import FaqToggle from '../FaqToggle/FaqToggle';

import './FaqSection.scss';

const faqData = FAQ_DATA.questions;

const FaqSection = () => {
  return (
    <article className='faq-section container'>
      <PageTitle title={`FAQ`} />
      <section className='faq-accordion'>
        {
          faqData.map((faq, index) => {
            return (
              <FaqToggle
                key={index}
                question={faq.question}
                answer={faq.answer}
              />)
          })
        }
      </section>
    </article>
  );
}

export default FaqSection;
