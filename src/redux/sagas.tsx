import { takeEvery, put, call, SagaReturnType } from 'redux-saga/effects';
import ActionTypes from './types';
import { hidePreloader, showPreloader } from './actions/preloader';
import { getHotels } from '../utils/api';

type ServerResponse = SagaReturnType<typeof getHotels>;

export function* sagaWatcher() {
  yield takeEvery(ActionTypes.GET_HOTELS, sagaWorker);
}

function* sagaWorker(action: { payload: { location: string, checkIn: string, checkOut: string }, type: object}) {
  try {
    yield put(showPreloader());
    // const data: ServerResponse = yield call(getHotels, location, action.payload.checkIn, action.payload.checkOut, hidePreloader);
    const data: ServerResponse = yield call(getHotels);
    yield put({ type: ActionTypes.FETCH_HOTELS, payload: data });
    yield put(hidePreloader());
  } catch (err) {
    // yield put(console.log(err));
    yield put(hidePreloader());
  }
}
