
import MockAdapter from 'axios-mock-adapter';
import { api, getRepositories, getContributors } from './index';

const mock = new MockAdapter(api);

describe('getRepositories', () => {
  const data = { status: true };
  beforeAll(() => {
    mock.onGet('/orgs/facebook/repos').reply(200, data);
  });
  it('should call correct endpoint', async () => {
    const response = await getRepositories('facebook');
    expect(response.config.url).toEqual('/orgs/facebook/repos');
  });

  it('should return status code 200', async () => {
    const response = await getRepositories('facebook');
    expect(response.status).toEqual(200);
  });

  it('should return correct data', async () => {
    const response = await getRepositories('facebook');
    expect(response.data).toEqual(data);
  });
});

describe('getContributors', () => {
  const data = { status: true };
  beforeAll(() => {
    mock.onGet('/repos/facebook/react/stats/contributors').reply(200, data);
  });

  it('should call correct endpoint', async () => {
    const response = await getContributors('facebook', 'react');
    expect(response.config.url).toEqual('/repos/facebook/react/stats/contributors');
  });

  it('should return status code 200', async () => {
    const response = await getContributors('facebook', 'react');
    expect(response.status).toEqual(200);
  });

  it('should return correct data', async () => {
    const response = await getContributors('facebook', 'react');
    expect(response.data).toEqual(data);
  });
});
