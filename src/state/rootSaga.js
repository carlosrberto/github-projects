import { all, fork } from 'redux-saga/effects';

import { initialize, watchRepos } from './repos/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchRepos),
    fork(initialize),
  ]);
}
