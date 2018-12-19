import { LOAD_REPOS, REPO } from './types';
import { normalizeRepoData } from './utils';

const initialState = {
  isLoading: false,
  loadingError: false,
  filterTerm: '',
  byId: {},
  byName: {},
  allIds: [],
  readmeByName: {},
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
      const byId = {
        ...state.byId,
        ...normalizedData.byId,
      };
      const byName = {
        ...state.byName,
        ...normalizedData.byName,
      };
      const allIds = [
        ...state.allIds,
        ...normalizedData.allIds.filter(
          // keep away any previously added id
          id => !state.allIds.includes(id),
        ),
      ];

      return {
        ...state,
        isLoading: false,
        loadingError: false,
        byId,
        byName,
        allIds,
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
        activeRepo: action.payload.repo,
      };

    case REPO.LOAD_README_SUCCESS: {
      const { repo, contents } = action.payload;
      return {
        ...state,
        readmeByName: {
          ...state.readmeByName,
          [repo]: contents,
        },
      };
    }

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
