import React from 'react';

import Header from '~/ui/Header';
import Content from '~/ui/Content';
import ReadmeFile from '~/ui/ReadmeFile';
import Contributors from '~/ui/Contributors';

import ss from './Main.sass';

const Main = () => (
  <React.Fragment>
    <Header>
      <h2 className={ss.header}>facebook/react</h2>
    </Header>
    <Content>
      <div className={ss.content}>
        <Contributors />
        <ReadmeFile />
      </div>
    </Content>
  </React.Fragment>
);

export default Main;
