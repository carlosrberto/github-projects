import { connect } from 'react-redux';
import SearchInput from '~/ui/SearchInput';
import { filterRepos } from '~/state/repos/actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (event) => {
    dispatch(filterRepos({ term: event.target.value }));
  },
});

const RepoSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default RepoSearchContainer;
