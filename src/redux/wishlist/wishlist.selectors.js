import { createSelector } from 'reselect';

const selectWishList = state => state.wishlist;

export const selectWishListItems = createSelector(
  [selectWishList],
  wishlist => wishlist.wishListItems
);
