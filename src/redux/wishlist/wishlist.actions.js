import WishlistTypes from './wishlist.types';

export const toggleItem = item => ({
  type: WishlistTypes.TOGGLE_ITEM,
  payload: item
});

export const clearWishList = () => ({
  type: WishlistTypes.CLEAR_WISH_LIST
});

export const setWishListFromFirebase = cartItems => ({
  type: WishlistTypes.SET_LIST_FROM_FIREBASE,
  payload: cartItems
});

export const updateWishListInFirebase = () => ({
  type: WishlistTypes.UPDATE_LIST_IN_FIREBASE
});
