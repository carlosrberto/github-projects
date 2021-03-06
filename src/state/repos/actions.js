import { LOAD_REPOS, REPO } from './types';

export const loadReposRequest = payload => ({
  type: LOAD_REPOS.REQUEST, payload,
});

export const loadReposSuccess = payload => ({
  type: LOAD_REPOS.SUCCESS, payload,
});

export const loadReposFailure = payload => ({
  type: LOAD_REPOS.FAILURE, payload,
});

export const showRepoDetail = payload => ({
  type: REPO.SHOW_DETAIL, payload,
});

export const loadReadmeRequest = payload => ({
  type: REPO.LOAD_README_REQUEST, payload,
});

export const loadReadmeSuccess = payload => ({
  type: REPO.LOAD_README_SUCCESS, payload,
});

export const loadReadmeFailure = payload => ({
  type: REPO.LOAD_README_FAILURE, payload,
});

export const loadRepoContributorsRequest = payload => ({
  type: REPO.LOAD_CONTRIBUTORS_REQUEST, payload,
});

export const loadRepoContributorsSuccess = payload => ({
  type: REPO.LOAD_CONTRIBUTORS_SUCCESS, payload,
});

export const loadRepoContributorsFailure = payload => ({
  type: REPO.LOAD_CONTRIBUTORS_FAILURE, payload,
});

export const filterRepos = payload => ({
  type: REPO.FILTER, payload,
});
