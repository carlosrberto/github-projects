import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from './types';
import { loadReposSuccess, loadReposFailure } from './actions';
import { getRepos } from '~/services/github';

export function* workerLoadReposRequest({ payload: { org } }) {
  try {
    const { data } = yield call(getRepos, org);
    yield put(loadReposSuccess({ data }));
  } catch (error) {
    yield put(loadReposFailure());
  }
}

export function* watchRepos() {
  yield takeLatest(LOAD_REPOS.REQUEST, workerLoadReposRequest);
}
