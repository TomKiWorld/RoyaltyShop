import React from 'react';
import { connect } from 'react-redux';

import CtaButton from '../CtaButton/CtaButton';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div 
      className='collection-item'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
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

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
