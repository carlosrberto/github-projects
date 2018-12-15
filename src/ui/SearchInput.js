import React from 'react';
import { GoSearch } from 'react-icons/go';

import ss from './SearchInput.sass';

const SearchInput = () => (
  <span className={ss.wrapper}>
    <input placeholder="filter projects" className={ss.input} />
    <GoSearch className={ss.icon} size="1.6em" />
  </span>
);

export default SearchInput;
