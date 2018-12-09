import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const getRepos = org => api.get(`/orgs/${org}/repos`);

export const getContributors = (org, project) => api.get(`/repos/${org}/${project}/stats/contributors`);
