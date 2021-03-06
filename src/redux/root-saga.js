import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { wishListSagas } from './wishlist/wishlist.sasgas';
import { ordersSagas } from './orders/orders.sagas';
import { searchSagas } from './search/search.sagas';

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
    call(wishListSagas),
    call(ordersSagas),
    call(searchSagas)
  ]);
};
