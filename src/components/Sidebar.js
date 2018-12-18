import React from 'react';

import Header from '~/ui/Header';
import Content from '~/ui/Content';
import RepoList from './RepoList';
import RepoSearch from './RepoSearch';

import ss from './Sidebar.sass';

const Sidebar = () => (
  <React.Fragment>
    <Header>
      <div className={ss.header}>
        <RepoSearch />
      </div>
    </Header>
    <Content>
      <RepoList />
    </Content>
  </React.Fragment>
);

export default Sidebar;
