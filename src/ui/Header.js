import React from 'react';
import PropTypes from 'prop-types';

import ss from './Header.sass';

const Header = ({ children }) => (
  <div className={ss.header}>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
