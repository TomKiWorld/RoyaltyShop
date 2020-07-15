import React from 'react';

const ItemDetails = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className='item-details'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name} item`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>€{price}</span>
    </div>
  )
};

export default ItemDetails;
