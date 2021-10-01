import { put, takeEvery, all, call } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log('incrementAsync called on INCREMENT_ASYNC action dispatch');
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: call incrementAsync task on each INCREMENT_ASYNC action dispatched
export function* watchIncrementAsync() {
  console.log('saga function watch called instantly');
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
