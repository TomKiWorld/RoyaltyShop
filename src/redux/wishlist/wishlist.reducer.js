import WishlistTypes from './wishlist.types';
import { toggleWishListItem } from './wishlist.utils';

const INITAL_STATE = {
  wishListItems: []
}

const wishListReducer = ( state = INITAL_STATE, action ) => {
  switch (action.type) {
    case WishlistTypes.TOGGLE_ITEM:
      return {
        ...state,
        wishListItems: toggleWishListItem(state.wishListItems, action.payload)
      }
    case WishlistTypes.CLEAR_WISH_LIST:
      return {
        ...state,
        wishListItems: []
      }
    case WishlistTypes.SET_LIST_FROM_FIREBASE:
      return {
        ...state,
        wishListItems: action.payload
      };
    default:
      return state;
  }
}

export default wishListReducer;
