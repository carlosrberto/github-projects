import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepoListItem from './RepoListItem';

export const RepoList = ({ items }) => (
    <React.Fragment>
      {items.map(id => (
        <RepoListItem key={`repo-${id}`} id={id} />
      ))}
    </React.Fragment>
);

RepoList.propTypes = {
  items: PropTypes.array,
};

const mapStateToProps = state => ({
  items: state.repos.allIds
    .filter(
      id => state.repos.byId[id].name.includes(state.repos.filterTerm),
    ),
});

export default connect(
  mapStateToProps,
)(RepoList);
