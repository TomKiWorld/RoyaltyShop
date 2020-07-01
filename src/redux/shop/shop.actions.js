import shopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const requestCollectionsStart = () => ({
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

export const requestCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(requestCollectionsStart());

    collectionRef.get().then( snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(requestCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(requestCollectionsFailure(error.message)));
  }
}
