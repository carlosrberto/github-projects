import React from 'react';

import Header from '~/ui/Header';
import Content from '~/ui/Content';
import Card from '~/ui/Card';
import SearchInput from '~/ui/SearchInput';

import ss from './Sidebar.sass';

const Sidebar = () => (
  <React.Fragment>
    <Header>
      <div className={ss.header}>
        <SearchInput />
      </div>
    </Header>
    <Content>
      <Card>
        react
      </Card>
      <Card>
        graph-ql
      </Card>
      <Card>
        reason
      </Card>
      <Card>
        flow
      </Card>
    </Content>
  </React.Fragment>
);

export default Sidebar;
