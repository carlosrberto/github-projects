import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadReposRequest, showRepoDetail } from '~/state/repos/actions';
import Sidebar from './Sidebar';
import RepoDetail from './RepoDetail';

import ss from './App.sass';

export class App extends React.Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.loadReposRequest({
      org: params.org,
    });

    this.props.showRepoDetail({ name: params.repo });
  }

  componentDidUpdate(prevProps) {
    const { params } = this.props.match;
    const { params: prevParams } = prevProps.match;

    if (params.org !== prevParams.org) {
      // update org
      this.props.loadReposRequest({
        org: params.org,
      });
    }

    if (params.repo !== prevParams.repo) {
      // update repo
      this.props.showRepoDetail({ name: params.repo });
    }
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <div className={ss.app}>
        <div className={`${ss.container} ${ss.show_sidebar}`}>
          <div className={ss.sidebar}>
            <Sidebar />
          </div>

          <div className={ss.main}>
            <RepoDetail />
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

export default connect(
  null,
  {
    loadReposRequest,
    showRepoDetail,
  },
)(App);
