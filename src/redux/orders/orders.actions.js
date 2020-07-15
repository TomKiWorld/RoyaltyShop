import ordersActionTypes from './orders.types';

export const updateOrderInFirebase = () => ({
  type: ordersActionTypes.UPDATE_ORDER_IN_FIREBASE
});

export const clearOrders = () => ({
  type: ordersActionTypes.CLEAR_ORDERS
});

export const fetchOrdersStart = () => ({
  type: ordersActionTypes.REQUEST_ORDERS_START
})

export const requestOrdersSuccess = ordersMap => ({
  type: ordersActionTypes.REQUEST_ORDERS_SUCCESS,
  payload: ordersMap
})

export const requestOrdersFailure = errorMessage => ({
  type: ordersActionTypes.REQUEST_ORDERS_FAILED,
  payload: errorMessage
})

export const setCurrentOrder = order => ({
  type: ordersActionTypes.SET_CURRENT_ORDER,
  payload: order
})

export const unsetCurrentOrder = () => ({
  type: ordersActionTypes.UNSET_CURRENT_ORDER
})
