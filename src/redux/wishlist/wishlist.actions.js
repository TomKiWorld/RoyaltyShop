import wishlistTypes from './wishlist.types';

export const toggleItem = item => ({
  type: wishlistTypes.TOGGLE_ITEM,
  payload: item
});

export const clearWishList = () => ({
  type: wishlistTypes.CLEAR_WISH_LIST
});

export const setWishListFromFirebase = cartItems => ({
  type: wishlistTypes.SET_LIST_FROM_FIREBASE,
  payload: cartItems
});

export const updateWishListInFirebase = () => ({
  type: wishlistTypes.UPDATE_LIST_IN_FIREBASE
});
