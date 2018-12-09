import { LOAD_REPOS } from './types';
import { loadReposRequest, loadReposSuccess, loadReposFailure } from './actions';

describe('loadReposRequest', () => {
  it('should create action for `loadReposRequest`', () => {
    const payload = {};
    expect(loadReposRequest(payload)).toEqual({ type: LOAD_REPOS.REQUEST, payload });
  });
});

describe('loadReposSuccess', () => {
  it('should create action for `loadReposSuccess`', () => {
    const payload = {};
    expect(loadReposSuccess(payload)).toEqual({ type: LOAD_REPOS.SUCCESS, payload });
  });
});

describe('loadReposFailure', () => {
  it('should create action for `loadReposFailure`', () => {
    const payload = { error: {} };
    expect(loadReposFailure(payload)).toEqual({ type: LOAD_REPOS.FAILURE, payload });
  });
});
