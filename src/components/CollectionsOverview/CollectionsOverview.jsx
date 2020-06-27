import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { ReactComponent as Underline } from '../../assets/underline.svg';

const CollectionsOverview = ({ collections }) => (
  <section className='collections-overview'>
    <h1 className='page-title'>Royalty Collections</h1>
    <Underline className='page-title-underline'/>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview 
          key={id} 
          { ...otherCollectionProps }/>
      ))
    }
  </section>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
