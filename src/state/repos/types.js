/* eslint-disable import/prefer-default-export */
import {
  REQUEST, SUCCESS, FAILURE, SHOW_DETAIL,
} from '~/shared/constants/actions';
import { appTypes } from '~/shared/utils/actions';

const projects = appTypes.defineAction('repos');

export const LOAD_REPOS = projects.defineAction('LOAD_REPOS', [
  REQUEST,
  SUCCESS,
  FAILURE,
]);

export const REPO = projects.defineAction('REPO', [
  SHOW_DETAIL,
  `LOAD_CONTRIBUTORS_${REQUEST}`,
  `LOAD_CONTRIBUTORS_${SUCCESS}`,
  `LOAD_CONTRIBUTORS_${FAILURE}`,
]);
