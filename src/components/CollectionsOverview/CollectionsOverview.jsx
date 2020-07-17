import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


import HeaderBanner from '../HeaderBanner/HeaderBanner';
import TwoImagesTitleBlock from '../TwoImagesTitleBlock/TwoImagesTitleBlock';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import BenefitsBanner from '../BenefitsBanner/BenefitsBanner';

const CollectionsOverview = ({ collections }) => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collections]);

  return (
    <React.Fragment>
      <HeaderBanner 
        imageUrl={`https://images.unsplash.com/photo-1594339944668-083133c6a48a?w=1200&q=10`}>
        <TwoImagesTitleBlock 
          title={`Royalty Collections`}
          subtitle={new Date().getFullYear()}
          imageOne={`https://i.ibb.co/7CQVJNm/blue-tank.jpg`}
          imageTwo={`https://i.ibb.co/RvwnBL8/pink-shirt.jpg`}
        />
      </HeaderBanner>
      <section className='collections-overview container'>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview 
              key={id} 
              { ...otherCollectionProps }/>
          ))
        }
      </section>
      <BenefitsBanner />
    </React.Fragment>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
