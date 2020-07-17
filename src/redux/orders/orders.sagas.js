import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import { firestore, setOrderDocument, convertOrdersSnapshotToMap } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { clearOrders, requestOrdersSuccess, requestOrdersFailure, fetchOrdersStart, setCurrentOrder } from './orders.actions';
import { selectCartItems, selectCartTotal } from '../cart/cart.selectors';
import { getOrderNumber } from './orders.utils';
import userActionTypes from '../user/user.types';
import ordersActionTypes from './orders.types';

export function* onClearOrders() {
  yield put(clearOrders());
}

export function* addOrderToFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const createdAt = new Date();
      const orderNr = getOrderNumber(currentUser, createdAt);
      const cartTotal = yield select(selectCartTotal);
      const cartItems = yield select(selectCartItems);

      const orderToAdd = {
        id: orderNr,
        date: createdAt,
        total: cartTotal,
        orderItems: cartItems
      }
      yield setOrderDocument(currentUser.id, orderToAdd);
      yield put(fetchOrdersStart());
      yield put(setCurrentOrder(orderToAdd));

    } catch (error) {
      console.log(error);
    }
  }
}

export function* fetchOrdersAsync() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const ordersRef = firestore.collection('orders').where('userId', '==', currentUser.id);
      const snapshot = yield ordersRef.get();
      const ordersMap = yield call(convertOrdersSnapshotToMap, snapshot);
      yield put(requestOrdersSuccess(ordersMap));
    } catch (error) {
      yield put(requestOrdersFailure(error.message));
    }
  }
}

export function* fetchOrdersAsyncStart() {
  yield takeLatest(ordersActionTypes.REQUEST_ORDERS_START,fetchOrdersAsync);
}

export function* onPaymentSuccess() {
  yield takeLatest(ordersActionTypes.UPDATE_ORDER_IN_FIREBASE, addOrderToFirebase)
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, onClearOrders)
}

export function* ordersSagas() {
  yield all([
    call(onSignOutSuccess), 
    call(onPaymentSuccess), 
    call(fetchOrdersAsyncStart)
  ])
}
