import React from 'react';
import PropTypes from 'prop-types';

import ss from './Section.sass';

const Section = ({ children, title }) => (
  <div className={ss.section}>
    <div className={ss.header}>
      {title}
    </div>
    <div className={ss.content}>
      {children}
    </div>
  </div>
);

Section.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default Section;
