import React from 'react';
import PropTypes from 'prop-types';

import ss from './Card.sass';

const Card = ({ children }) => (
  <div className={ss.card}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
