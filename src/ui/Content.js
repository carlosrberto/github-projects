import React from 'react';
import PropTypes from 'prop-types';

import ss from './Content.sass';

const Content = ({ children }) => (
  <div className={ss.content}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
