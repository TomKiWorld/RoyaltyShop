import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
[selectShop],
shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
[selectCollections],
collections => 
collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParm => 
createSelector(
  [selectCollections],
  collections => collections ? collections[collectionUrlParm] : null
);

export const selectCollectionPending = createSelector(
  [selectShop],
  shop => shop.isPending
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
