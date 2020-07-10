import { takeLatest, call, all, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
  requestCollectionsSuccess,
  requestCollectionsFailure
} from './shop.actions';

import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(requestCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(requestCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.REQUEST_COLLECTIONS_START, 
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}
