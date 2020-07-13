
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Directory from '../Directory/Directory';
import CollectionItem from '../CollectionItem/CollectionItem';

import { selectWishListItems } from '../../redux/wishlist/wishlist.selectors';

const WishList = ({ wishListItems }) => (
  !wishListItems.length ?
    <div className='empty-title'>
      <h2>Your wish list is empty</h2>
      <p>Take a look at our collections</p>
      <Directory />
    </div>
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
})

export default withRouter(connect(mapStateToProps)(WishList));
