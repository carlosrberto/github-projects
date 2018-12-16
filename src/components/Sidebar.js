import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/facebook/react/">react</Link>
      </Card>
      <Card>
        <Link to="/facebook/graph-ql/">graph-ql</Link>
      </Card>
      <Card>
        <Link to="/facebook/reason/">reason</Link>
      </Card>
      <Card>
        <Link to="/facebook/graph-ql/">flow</Link>
      </Card>
    </Content>
  </React.Fragment>
);

export default Sidebar;
