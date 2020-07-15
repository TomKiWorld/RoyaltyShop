import wishlistTypes from './wishlist.types';
import { toggleWishListItem } from './wishlist.utils';

const INITAL_STATE = {
  wishListItems: []
}

const wishListReducer = ( state = INITAL_STATE, action ) => {
  switch (action.type) {
    case wishlistTypes.TOGGLE_ITEM:
      return {
        ...state,
        wishListItems: toggleWishListItem(state.wishListItems, action.payload)
      }
    case wishlistTypes.CLEAR_WISH_LIST:
      return {
        ...state,
        wishListItems: []
      }
    case wishlistTypes.SET_LIST_FROM_FIREBASE:
      return {
        ...state,
        wishListItems: action.payload
      };
    default:
      return state;
  }
}

export default wishListReducer;
