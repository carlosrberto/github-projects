import reducer from './reducer';
import * as actions from './actions';

const initialState = {
  isLoading: false,
  loadingError: false,
  filterTerm: '',
  byId: {},
  byName: {},
  allIds: [],
  activeRepo: null,
};

describe('repos reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle `loadReposRequest` action', () => {
    expect(reducer(initialState, actions.loadReposRequest()))
      .toEqual({
        ...initialState,
        isLoading: true,
      });
  });

  it('should handle `loadReposSuccess` action', () => {
    const payload = {
      data: [{ id: 1, name: 'foo' }],
    };

    expect(reducer(initialState, actions.loadReposSuccess(payload)))
      .toEqual({
        ...initialState,
        isLoading: false,
        byId: {
          1: { id: 1, name: 'foo' },
        },
        byName: { foo: 1 },
        allIds: [1],
      });
  });

  it('should handle `filterRepos` action', () => {
    expect(reducer(initialState, actions.filterRepos({ term: 'lo' })))
      .toEqual({
        ...initialState,
        filterTerm: 'lo',
      });
  });

  it('should handle `showRepoDetail` action', () => {
    expect(reducer(initialState, actions.showRepoDetail({ name: 'lorem' })))
      .toEqual({
        ...initialState,
        activeRepo: 'lorem',
      });
  });
});
