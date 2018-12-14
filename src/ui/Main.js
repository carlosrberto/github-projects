import React from 'react';
import PropTypes from 'prop-types';

import ss from './Main.sass';

const Main = ({ sidebar, children }) => (
  <div className={ss.main}>
    <div className={`${ss.container} ${ss.show_sidebar}`}>
      <div className={ss.sidebar}>
        {sidebar}
      </div>

      <div className={ss.content}>
        {children}
      </div>
    </div>
  </div>
);

Main.propTypes = {
  sidebar: PropTypes.node,
  children: PropTypes.node,
};

export default Main;
