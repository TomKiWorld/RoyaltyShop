import { createSelector } from 'reselect';

import { selectCollectionsForPreview } from '../shop/shop.selectors';
import { createItemsFromCollections } from './search.utils';

const selectSearch = state => state.search;

export const selectItems = createSelector(
  [selectCollectionsForPreview],
  collections => collections ? createItemsFromCollections(collections) : []
);

export const selectSearchField = createSelector(
  [selectSearch],
  search => search.searchField
);

export const selectCollectionsFilter = createSelector(
  [selectSearch],
  search => search.collectionsFilter
);

export const selectFilteredItems = createSelector(
  [selectSearch],
  search => search.filteredItems
);
