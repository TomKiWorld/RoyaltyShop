import React, { useEffect } from 'react';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import ThreeImagesBlock from '../../components/ThreeImagesBlock/ThreeImagesBlock';
import ExpendingTitle from '../../components/ExpendingTitle/ExpendingTitle';
import Directory from '../../components/Directory/Directory';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import BenefitsBanner from '../../components/BenefitsBanner/BenefitsBanner';

import './HomePage.scss';

const images = [
  'https://i.ibb.co/QcvzydB/nikes-red.jpg',
  'https://i.ibb.co/mh3VM1f/polka-dot-shirt.jpg',
  'https://i.ibb.co/s96FpdP/brown-shearling.jpg'
]

const HomePage = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className='home-page'>
      <HeaderBanner imageUrl={`https://images.unsplash.com/photo-1432671431739-d0ba1dd6e3c7?w=1200&q=100`}>
        <ThreeImagesBlock images={images} />
        <ExpendingTitle 
          title={`RoyaltyShop`} 
          subtitle={`Dress to be`}
          />
      </HeaderBanner>
      <Directory />
      <ImageBanner imageUrl={`https://images.unsplash.com/photo-1515120138944-8b31a82f995a?w=1200&q=100`}>
        <CtaBlock
          title={`Check our`}
          subtitle={new Date().getFullYear()}
          message={`Collection`}
          btnText={`View collections`}
          onBtnClick={() => history.push(`/shop`)}
        />
      </ImageBanner>
      <BenefitsBanner />
    </section>
  )
};

export default HomePage;
