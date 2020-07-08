import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import PageTitle from '../PageTitle/PageTitle';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ collections }) => (
  <section className='collections-overview'>
    <PageTitle title={'Royalty Collections'} />
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
