import { connect } from 'react-redux';
import App from '~/components/App';
import { loadReposRequest, showRepoDetail } from '~/state/repos/actions';

const AppContainer = connect(
  null,
  {
    loadReposRequest,
    showRepoDetail,
  },
)(App);

export default AppContainer;
