import React from 'react';

import Header from '~/ui/Header';
import Content from '~/ui/Content';
import RepoSearchContainer from '~/containers/RepoSearchContainer';
import RepoListContainer from '~/containers/RepoListContainer';

import ss from './Sidebar.sass';

const Sidebar = () => (
  <React.Fragment>
    <Header>
      <div className={ss.header}>
        <RepoSearchContainer />
      </div>
    </Header>
    <Content>
      <RepoListContainer />
    </Content>
  </React.Fragment>
);

export default Sidebar;
