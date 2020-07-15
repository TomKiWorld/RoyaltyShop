import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.REQUEST_COLLECTIONS_START
})

export const requestCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.REQUEST_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const requestCollectionsFailure = errorMessage => ({
  type: shopActionTypes.REQUEST_COLLECTIONS_FAILED,
  payload: errorMessage
})
