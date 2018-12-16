import { LOAD_REPOS, REPO } from './types';
import { normalizeRepoData } from './utils';

const initialState = {
  isLoading: false,
  loadingError: false,
  filterTerm: '',
  byId: {},
  allIds: [],
  activeRepo: null,
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

    case REPO.SHOW_DETAIL:
      return {
        ...state,
        activeRepo: action.payload.name,
      };

    case REPO.FILTER: {
      const { payload: { term } } = action;
      return {
        ...state,
        filterTerm: term,
      };
    }

    default:
      return state;
  }
};

export default repos;
