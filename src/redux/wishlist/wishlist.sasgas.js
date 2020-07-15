import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import { getUserWishListRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { clearWishList, setWishListFromFirebase } from './wishlist.actions';
import { selectWishListItems } from './wishlist.selectors';
import userActionTypes from '../user/user.types';
import wishlistTypes from './wishlist.types';

export function* onClearWishList() {
  yield put(clearWishList());
}

export function* updateWishListInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const wishListRef = yield getUserWishListRef(currentUser.id);
      const wishListItems = yield select(selectWishListItems);
      yield wishListRef.update({ wishListItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkWishListFromFirebase({ payload: user }) {
  const wishListRef = yield getUserWishListRef(user.id);
  const wishListSnapshot = yield wishListRef.get();
  yield put(setWishListFromFirebase(wishListSnapshot.data().wishListItems));
}

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkWishListFromFirebase);
}

export function* onWishListChange() {
  yield takeLatest(
    [
      wishlistTypes.TOGGLE_ITEM
    ],
    updateWishListInFirebase
  );
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, onClearWishList)
}

export function* wishListSagas() {
  yield all([
    call(onSignOutSuccess), 
    call(onWishListChange), 
    call(onUserSignIn)
  ])
}
