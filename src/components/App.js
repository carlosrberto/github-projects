import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '~/components/Sidebar';
import Main from '~/components/Main';

import ss from './App.sass';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { params } = this.props.match;
    const { params: prevParams } = prevProps.match;

    if (params.org !== prevParams.org) {
      // update org
      console.log('call org fetch'); /* eslint-disable-line no-console */
    }

    if (params.repo !== prevParams.repo) {
      // update repo
      console.log('call repo fetch', params.repo); /* eslint-disable-line no-console */
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
};

export default App;
