import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';
import { LOAD_REPOS } from './types';
import { loadReposRequest, loadReposSuccess, loadReposFailure } from './actions';
import { getRepos } from '~/services/github';
import history from '~/routes/history';

export function* workerLoadReposRequest({ payload: { org } }) {
  try {
    const { data } = yield call(getRepos, org);
    yield put(loadReposSuccess({ data }));
    const firstRepo = yield select(state => state.repos.activeRepo);
    yield call([history, history.push], `/${org}/${firstRepo}/`);
  } catch (error) {
    yield put(loadReposFailure());
  }
}

export function* watchRepos() {
  yield takeLatest(LOAD_REPOS.REQUEST, workerLoadReposRequest);
}

export function* initialize() {
  yield put(loadReposRequest({ org: 'facebook' }));
}
