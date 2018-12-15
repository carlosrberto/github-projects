import reducer from './reducer';
import * as actions from './actions';

const initialState = {
  isLoading: false,
  loadingError: false,
  byId: {},
  allIds: [],
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

  it('should handle `loadReposFailure` action', () => {
    const payload = {
      data: [{ id: 1, name: 'foo' }],
    };

    expect(reducer(initialState, actions.loadReposFailure(payload)))
      .toEqual({
        ...initialState,
        loadingError: true,
      });
  });
});