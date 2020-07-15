import { createSelector } from 'reselect';
import { getOrdersArrayForPreview } from './orders.utils'

const selectOrderHistory = state => state.orderHistory;

export const selectOrders = createSelector(
  [selectOrderHistory],
  orderHistory => orderHistory.orders
);

export const selectOrdersForPreview = createSelector(
  [selectOrderHistory],
  orders => getOrdersArrayForPreview(orders)
);

export const selectCurrentOrder = createSelector(
  [selectOrderHistory],
  orderHistory => orderHistory.currentOrder
);
