import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { ReactComponent as Underline } from '../../assets/underline.svg';

import './CollectionPage.scss';

const CollectionPage = ({collection}) => {
  if (!collection) {
    return <Redirect to='/not-found' />;
  }
  const { title, items } = collection;
  return (
  <section className='collection-page'>
    <h1 className='page-title'>Royalty {title}</h1>
    <Underline className='page-title-underline'/>
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
