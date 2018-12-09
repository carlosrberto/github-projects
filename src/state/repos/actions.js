import { LOAD_REPOS } from './types';

export const loadReposRequest = payload => ({ type: LOAD_REPOS.REQUEST, payload });
export const loadReposSuccess = payload => ({ type: LOAD_REPOS.SUCCESS, payload });
export const loadReposFailure = payload => ({ type: LOAD_REPOS.FAILURE, payload });
