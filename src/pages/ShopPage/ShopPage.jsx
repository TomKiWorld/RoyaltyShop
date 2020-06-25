import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './ShopPage.scss';

const ShopPage = ({ collections }) => (
  <section className='shop-page container'>
    <h1>Collections</h1>
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
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
