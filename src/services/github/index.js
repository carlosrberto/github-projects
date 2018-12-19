import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const getRepos = org => api.get(`/orgs/${org}/repos`);

export const getRepo = (org, repo) => api.get(`/repos/${org}/${repo}`);

export const getReadme = (org, repo) => api.get(`/repos/${org}/${repo}/readme`);

export const getContributors = (org, project) => api.get(`/repos/${org}/${project}/stats/contributors`);
