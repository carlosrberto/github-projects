import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '~/components/Sidebar';
import Main from '~/components/Main';

import ss from './Root.sass';

const Root = () => (
  <div className={ss.root}>
    <div className={`${ss.container} ${ss.show_sidebar}`}>
      <div className={ss.sidebar}>
        <Sidebar />
      </div>

      <div className={ss.main}>
        <Main />
      </div>
    </div>
  </div>
);

Root.propTypes = {
  sidebar: PropTypes.node,
  children: PropTypes.node,
};

export default Root;
