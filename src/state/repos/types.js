/* eslint-disable import/prefer-default-export */
import { REQUEST, SUCCESS, FAILURE } from '~/shared/constants/actions';
import { appTypes } from '~/shared/utils/actions';

const projects = appTypes.defineAction('repos');

export const LOAD_REPOS = projects.defineAction('LOAD_REPOS', [
  REQUEST,
  SUCCESS,
  FAILURE,
]);
