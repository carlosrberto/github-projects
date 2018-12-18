/* eslint-disable import/prefer-default-export */
export const normalizeRepoData = (data) => {
  const allIds = data.sort((a, b) => (
    b.watchers_count - a.watchers_count
  )).map(item => item.id);
  const { byId, byName } = data.reduce((acc, item) => {
    acc.byId[item.id] = { ...item };
    acc.byName[item.name] = item.id;

    return acc;
  }, { byId: {}, byName: {} });

  return {
    allIds,
    byId,
    byName,
  };
};
