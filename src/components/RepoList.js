import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Card from '~/ui/Card';

const RepoList = ({ items }) => (
    <React.Fragment>
      {items.map(item => (
        <Card key={`repo-${item.id}`}>
          <Link to={`/${item.full_name}/`}>{item.name}</Link>
        </Card>
      ))}
    </React.Fragment>
);

RepoList.propTypes = {
  items: PropTypes.array,
};

export default RepoList;
