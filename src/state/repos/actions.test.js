import { LOAD_REPOS, REPO } from './types';
import {
  loadReposRequest,
  loadReposSuccess,
  loadReposFailure,
  showRepoDetail,
  loadRepoContributorsRequest,
  loadRepoContributorsSuccess,
  loadRepoContributorsFailure,
} from './actions';

const payload = {};

describe('repos actions', () => {
  it('should create action for `loadReposRequest`', () => {
    expect(loadReposRequest(payload))
      .toEqual({ type: LOAD_REPOS.REQUEST, payload });
  });

  it('should create action for `loadReposSuccess`', () => {
    expect(loadReposSuccess(payload))
      .toEqual({ type: LOAD_REPOS.SUCCESS, payload });
  });

  it('should create action for `loadReposFailure`', () => {
    expect(loadReposFailure(payload))
      .toEqual({ type: LOAD_REPOS.FAILURE, payload });
  });

  it('should create action for `showRepoDetail`', () => {
    expect(showRepoDetail(payload))
      .toEqual({ type: REPO.SHOW_DETAIL, payload });
  });

  it('should create action for `loadRepoContributorsRequest`', () => {
    expect(loadRepoContributorsRequest(payload))
      .toEqual({ type: REPO.LOAD_CONTRIBUTORS_REQUEST, payload });
  });

  it('should create action for `loadRepoContributorsSuccess`', () => {
    expect(loadRepoContributorsSuccess(payload))
      .toEqual({ type: REPO.LOAD_CONTRIBUTORS_SUCCESS, payload });
  });

  it('should create action for `loadRepoContributorsFailure`', () => {
    expect(loadRepoContributorsFailure(payload))
      .toEqual({ type: REPO.LOAD_CONTRIBUTORS_FAILURE, payload });
  });
});
