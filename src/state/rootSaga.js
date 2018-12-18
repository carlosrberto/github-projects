import { all, fork } from 'redux-saga/effects';

import { watchRepos } from './repos/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchRepos),
  ]);
}
