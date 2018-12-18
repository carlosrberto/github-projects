import React from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { connect } from 'react-redux';
import { filterRepos } from '~/state/repos/actions';

import ss from './RepoSearch.sass';

const RepoSearch = ({ value, onChange }) => (
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

RepoSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (event) => {
    dispatch(filterRepos({ term: event.target.value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoSearch);
