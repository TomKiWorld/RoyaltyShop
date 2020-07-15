import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CtaButton from '../CtaButton/CtaButton';
import { addItem } from '../../redux/cart/cart.actions';
import { toggleItem } from '../../redux/wishlist/wishlist.actions';
import { selectWishListItems } from '../../redux/wishlist/wishlist.selectors';

import { ReactComponent as Heart } from '../../assets/heart.svg';

const CollectionItem = ({ item, addItem, toggleItem, wishListItems }) => {
  const { imageUrl, name, price, id } = item;
  const isFavorite = (wishListItems.filter(wishListItem => wishListItem.id === id ).length) > 0;

  return (
    <div 
      className='collection-item'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <Heart 
        onClick={() => toggleItem(item)}
        className='wish-list-icon'
        fill={ isFavorite ? 'black' : 'white'}
        stroke={ isFavorite ? 'white' : 'black'}
        />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>€{price}</span>
      </div>
      <CtaButton 
        onClick={() => addItem(item)}
        inverted>Add to Cart</CtaButton>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  wishListItems: selectWishListItems
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleItem: item => dispatch(toggleItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
