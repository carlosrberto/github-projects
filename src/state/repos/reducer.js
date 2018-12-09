import { LOAD_REPOS } from './types';
import { normalizeRepoData } from './utils';

const initialState = {
  isLoading: false,
  loadingError: false,
  byId: {},
  allIds: [],
  activeId: null,
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REPOS.REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_REPOS.SUCCESS: {
      const { payload: { data } } = action;
      const normalizedData = normalizeRepoData(data);
      return {
        ...state,
        isLoading: false,
        loadingError: false,
        byId: {
          ...state.byId,
          ...normalizedData.byId,
        },
        allIds: [
          ...state.allIds,
          ...normalizedData.allIds,
        ],
      };
    }
    case LOAD_REPOS.FAILURE:
      return {
        ...state,
        isLoading: false,
        loadingError: true,
      };
    default:
      return state;
  }
};

export default repos;
