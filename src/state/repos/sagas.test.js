import { call, put, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { getRepos } from '~/services/github';
import { LOAD_REPOS, REPO } from './types';
import {
  workerLoadReposRequest,
  workerLoadRepo,
  watchRepos,
  workerLoadReadme,
} from './sagas';
import { loadReposSuccess, loadReposFailure } from './actions';

describe('workerLoadReposRequest', () => {
  const gen = cloneableGenerator(workerLoadReposRequest)({
    payload: {
      org: 'facebook',
    },
  });

  it('should call `getRepos`', () => {
    expect(gen.next().value).toEqual(call(getRepos, 'facebook'));
  });

  it('should dispatch `loadReposSuccess` on success', () => {
    const clone = gen.clone();
    const data = { value: '' };
    expect(clone.next({ data }).value).toEqual(put(loadReposSuccess({ data })));
    expect(clone.next().done).toBeTruthy();
  });

  it('should dispatch `loadReposFailure` on failure', () => {
    const clone = gen.clone();
    expect(clone.throw().value).toEqual(put(loadReposFailure()));
    expect(clone.next().done).toBeTruthy();
  });
});

describe('watchRepos', () => {
  const gen = watchRepos();

  it('should watch for action`', () => {
    expect(gen.next().value).toEqual(takeLatest(LOAD_REPOS.REQUEST, workerLoadReposRequest));
    expect(gen.next().value).toEqual(takeLatest(REPO.SHOW_DETAIL, workerLoadRepo));
    expect(gen.next().value).toEqual(takeLatest(REPO.LOAD_README_REQUEST, workerLoadReadme));
    expect(gen.next().done).toBeTruthy();
  });
});
