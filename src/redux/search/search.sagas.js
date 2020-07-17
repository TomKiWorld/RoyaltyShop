import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import { selectItems, selectSearchField, selectCollectionsFilter } from './search.selectors';
import { setFilteredItems } from './search.actions';
import { filterItems } from './search.utils';
import shopActionTypes from '../shop/shop.types';
import searchActionTypes from './search.types';

export function* addAllItems() {
  const items = yield select(selectItems);
  yield put(setFilteredItems(items))
}

export function* setFilteredItemsAfterChange() {
  const items = yield select(selectItems);
  const searchField = yield select(selectSearchField);
  const collectionsFilter = yield select(selectCollectionsFilter);
  const filteredItems = filterItems(items, searchField, collectionsFilter );
  yield put(setFilteredItems(filteredItems));
}

export function* onFilterChange() {
  yield takeLatest([
    searchActionTypes.SET_COLLECTIONS_FILTER,
    searchActionTypes.CHANGE_SEARCH_FIELD
  ], setFilteredItemsAfterChange)
}

export function* onRequestCollectionSuccess() {
  yield takeLatest(shopActionTypes.REQUEST_COLLECTIONS_SUCCESS, addAllItems)
}

export function* searchSagas() {
  yield all([
    call(onRequestCollectionSuccess),
    call(onFilterChange)
  ])
}
