import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({collection}) => {
  const { title, items } = collection;
  return (
  <section className='collection-page'>
    <h1 className='collection-title'>Royalty {title}</h1>    
    <div className='collection-items'>
      {
        items.map(item => (
          <CollectionItem 
            key={item.id} 
            item={item} />
        ))
      }
    </div>
  </section>
)};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
