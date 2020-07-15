
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import EmptyList from '../EmptyList/EmptyList';
import CollectionItem from '../CollectionItem/CollectionItem';

import { selectWishListItems } from '../../redux/wishlist/wishlist.selectors';

const WishList = ({ wishListItems }) => (
  !wishListItems.length ?
    <EmptyList title={`Your wish list is empty`} />
    :
    <div className='wish-list'>
    {
      wishListItems.map(item => (
          <CollectionItem 
            key={item.id} 
            item={item} />
        ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  wishListItems: selectWishListItems
});

export default withRouter(connect(mapStateToProps)(WishList));
