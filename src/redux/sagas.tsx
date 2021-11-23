import { takeEvery, put, call } from 'redux-saga/effects';
import ActionTypes from './types';
import { hidePreloader, showPreloader } from './actions';
import { getHotels } from '../utils/api';

export function* sagaWatcher() {
  yield takeEvery(GET_HOTELS, sagaWorker);
}

function* sagaWorker({ payload: { location, checkIn, checkOut }}) {
  try {
    yield put(showPreloader());
    const data = yield call(getHotels, location, checkIn, checkOut, hidePreloader);
    yield put({ type: FETCH_HOTELS, payload: data });
    yield put(hidePreloader());
  } catch (err) {
    yield put(console.log(err));
    yield put(hidePreloader());
  }
}
