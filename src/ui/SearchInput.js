import React from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

import ss from './SearchInput.sass';

const SearchInput = ({ value, onChange }) => (
  <span className={ss.wrapper}>
    <input
      value={value}
      onChange={onChange}
      placeholder="filter projects"
      className={ss.input}
    />
    <GoSearch className={ss.icon} size="1.6em" />
  </span>
);

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
