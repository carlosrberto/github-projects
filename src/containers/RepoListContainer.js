import { connect } from 'react-redux';
import RepoList from '~/components/RepoList';

const mapStateToProps = state => ({
  items: state.repos.allIds
    .map(
      id => state.repos.byId[id],
    )
    .filter(
      item => item.name.includes(state.repos.filterTerm),
    ),
});

const RepoListContainer = connect(
  mapStateToProps,
)(RepoList);

export default RepoListContainer;
