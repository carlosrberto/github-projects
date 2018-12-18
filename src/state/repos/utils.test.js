import { normalizeRepoData } from './utils';

describe('normalizeRepoData', () => {
  it('should normalize data correctly', () => {
    const data = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];
    const normalizedData = normalizeRepoData(data);

    expect(normalizedData).toEqual({
      allIds: [1, 2],
      byId: {
        1: { id: 1, name: 'foo' },
        2: { id: 2, name: 'bar' },
      },
      byName: {
        foo: 1,
        bar: 2,
      },
    });
  });

  it('should not be a reference', () => {
    const data = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];
    const normalizedData = normalizeRepoData(data);

    expect(normalizedData['1']).not.toBe(data[0]);
  });
});
