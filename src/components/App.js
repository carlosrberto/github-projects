import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '~/components/Sidebar';
import Main from '~/components/Main';

import ss from './App.sass';

class App extends React.Component {
  componentDidMount() {
    const { params } = this.props.match;
    const { loadReposRequest, showRepoDetail } = this.props;

    loadReposRequest({
      org: params.org,
    });

    showRepoDetail({ name: params.repo });
  }

  componentDidUpdate(prevProps) {
    const { loadReposRequest, showRepoDetail } = this.props;
    const { params } = this.props.match;
    const { params: prevParams } = prevProps.match;

    if (params.org !== prevParams.org) {
      // update org
      loadReposRequest({
        org: params.org,
      });
    }

    if (params.repo !== prevParams.repo) {
      // update repo
      showRepoDetail({ name: params.repo });
    }
  }

  render() {
    const { match } = this.props;
    return (
      <div className={ss.app}>
        <div className={`${ss.container} ${ss.show_sidebar}`}>
          <div className={ss.sidebar}>
            <Sidebar />
          </div>

          <div className={ss.main}>
            <Main
              title={`${match.params.org}/${match.params.repo}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  sidebar: PropTypes.node,
  children: PropTypes.node,
  match: PropTypes.object,
  loadReposRequest: PropTypes.func,
  showRepoDetail: PropTypes.func,
};

export default App;
