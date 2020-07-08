import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';

import PageTitle from '../../components/PageTitle/PageTitle';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({collection}) => {
  if (!collection) {
    return <Redirect to='/not-found' />;
  }
  const { title, items } = collection;
  return (
  <section className='collection-page'>
    <PageTitle title={`Royalty ${title}`} />
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
