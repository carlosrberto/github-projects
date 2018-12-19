import {
  call, put, take, takeLatest, select,
} from 'redux-saga/effects';
import { LOAD_REPOS, REPO } from './types';
import {
  loadReposSuccess,
  loadReposFailure,
  showRepoDetail,
  loadReadmeFailure,
} from './actions';
import {
  getRepos,
  getRepo,
  getReadme,
} from '~/services/github';
// import history from '~/routes/history';

export function* workerLoadReposRequest({ payload: { org } }) {
  try {
    const { data } = yield call(getRepos, org);
    yield put(loadReposSuccess({ data }));
    // const firstRepo = yield select(state => state.repos.activeRepo);
  } catch (error) {
    yield put(loadReposFailure());
  }
}

export function* workerLoadReadme({ payload: { org, repo } }) {
  try {
    const { data } = yield call(getReadme, org, repo);
    console.log('readme', data); // eslint-disable-line no-console
    // yield put(loadReadmeSuccess({ data }));
    // const firstRepo = yield select(state => state.repos.activeRepo);
  } catch (error) {
    yield put(loadReadmeFailure());
  }
}

export function* workerLoadRepo({ payload: { org, repo } }) {
  yield take(LOAD_REPOS.SUCCESS);
  const activeRepo = yield select(state => state.repos.byName[repo]);
  if (!activeRepo) {
    const { data } = yield getRepo(org, repo);
    yield put(loadReposSuccess({ data: [data] }));
    yield put(showRepoDetail({ org, repo }));
  }
}

export function* watchRepos() {
  yield takeLatest(LOAD_REPOS.REQUEST, workerLoadReposRequest);
  yield takeLatest(REPO.SHOW_DETAIL, workerLoadRepo);
  yield takeLatest(REPO.LOAD_README_REQUEST, workerLoadReadme);
}

export function* initialize() {
  // yield put(loadReposRequest({ org: 'facebook' }));
}
