import searchActionTypes from './search.types';

import { createCollectionFilter } from './search.utils';

export const setSearchField = text => ({
  type: searchActionTypes.CHANGE_SEARCH_FIELD, 
  payload: text
});

export const setCollectionFilter = (collection, collectionsFilter) => ({
  type: searchActionTypes.SET_COLLECTIONS_FILTER,
  payload: createCollectionFilter(collection, collectionsFilter)
});

export const setFilteredItems = items => ({
  type: searchActionTypes.SET_FILTERED_ITEMS,
  payload: items
});
