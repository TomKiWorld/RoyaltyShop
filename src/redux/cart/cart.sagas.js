import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import userActionTypes from '../user/user.types';
import cartActionTypes from './cart.types';
import ordersActionTypes from '../orders/orders.types';

export function* onClearCart() {
  yield put(clearCart());
}

export function* onEmptyCart() {
  yield onClearCart();
  yield updateCartInFirebase();
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      cartActionTypes.ADD_ITEM,
      cartActionTypes.REMOVE_ITEM,
      cartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, onClearCart)
}

export function* onUpdateOrderSuccess() {
  yield takeLatest(ordersActionTypes.UPDATE_ORDER_IN_FIREBASE, onEmptyCart)
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess), 
    call(onCartChange), 
    call(onUserSignIn),
    call(onUpdateOrderSuccess)
  ])
}
