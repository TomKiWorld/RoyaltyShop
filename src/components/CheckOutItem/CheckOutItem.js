import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckOutItem = ({cartItem, addItem, removeItem, clearITeam}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt={`${name} item`} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <span 
        className='arrow'
        onClick={()=> removeItem(cartItem)}>&#10094;</span>
      <span className='value'>{quantity}</span>      
      <span 
        className='arrow'
        onClick={()=> addItem(cartItem)}>&#10095;</span>
    </span>
    <span className='price'>€{price}</span>
    <div 
      onClick={(() => clearITeam(cartItem))}
      className='remove-button'>&#10005;</div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearITeam: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);
