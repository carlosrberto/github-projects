import React from 'react';
import { GoMarkGithub } from 'react-icons/go';

import Header from '~/ui/Header';
import Content from '~/ui/Content';
import ReadmeFile from '~/ui/ReadmeFile';
import Section from '~/ui/Section';

import ss from './Main.sass';

const Main = () => (
  <React.Fragment>
    <Header>
      <h2 className={ss.header}>
        <GoMarkGithub className={ss.iconOcto} /> facebook/react
      </h2>
    </Header>
    <Content>
      <div className={ss.content}>
        <Section title="About">
          <p>lorem</p>
        </Section>
        <Section title="Contributors">
          <p>lorem</p>
        </Section>
        <ReadmeFile />
      </div>
    </Content>
  </React.Fragment>
);

export default Main;
