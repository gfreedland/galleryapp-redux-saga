import { all } from 'redux-saga/effects';
import {
  albumSaga
  // import other watchers from this file
} from './albumSaga';
// import watchers from other files
import { photoSaga } from './photoSaga';

export default function* rootSaga() {
  yield all([
    albumSaga(),
    photoSaga()
    // add other watchers to the array
  ]);
}
