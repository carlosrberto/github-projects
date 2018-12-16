import reducer from './reducer';
import * as actions from './actions';

const initialState = {
  isLoading: false,
  loadingError: false,
  filterTerm: '',
  byId: {},
  allIds: [],
  filteredIds: [],
  activeId: null,
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
        allIds: [1],
      });
  });

  it('should handle `filterRepos` action', () => {
    const state = {
      filterTerm: '',
      byId: {
        1: { name: 'lorem ipsum' },
        2: { name: 'ipsum dolor lorem' },
        3: { name: 'dolor' },
        4: { name: 'ipsum' },
        5: { name: 'lorem' },
      },
      allIds: [1, 2, 3, 4, 5],
      filteredIds: [],
    };

    expect(reducer(state, actions.filterRepos({ term: 'lo' })))
      .toEqual({
        ...state,
        filterTerm: 'lo',
        filteredIds: [1, 2, 3, 5],
      });
  });
});
