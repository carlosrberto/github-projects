/* eslint-disable import/prefer-default-export */
export const normalizeRepoData = data => ({
  allIds: data.map(item => item.id),
  byId: data.reduce((acc, item) => {
    acc[item.id] = { ...item };
    return acc;
  }, {}),
});
