import { call, put, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { getRepos } from '~/services/github';
import { LOAD_REPOS } from './types';
import { workerLoadReposRequest, watchRepos } from './sagas';
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
  });

  it('should dispatch `loadReposFailure` on failure', () => {
    const clone = gen.clone();
    expect(clone.throw().value).toEqual(put(loadReposFailure()));
  });
});

describe('watchRepos', () => {
  const gen = watchRepos();

  it('should watch for action`', () => {
    expect(gen.next().value).toEqual(takeLatest(LOAD_REPOS.REQUEST, workerLoadReposRequest));
  });
});
