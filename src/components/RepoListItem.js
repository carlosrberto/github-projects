import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Card from '~/ui/Card';

export const RepoListItem = ({ item }) => (
    <Card>
      <Link to={`/${item.full_name}/`}>{item.name}</Link>
    </Card>
);

RepoListItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  item: state.repos.byId[ownProps.id],
});

export default connect(
  mapStateToProps,
)(RepoListItem);
