import React from 'react';
import PropTypes from 'prop-types';
import { GoMarkGithub } from 'react-icons/go';

import Header from '~/ui/Header';
import Content from '~/ui/Content';
import ReadmeFile from '~/ui/ReadmeFile';
import Section from '~/ui/Section';

import ss from './Main.sass';

const Main = ({ repo }) => (repo ? (
  <React.Fragment>
    <Header>
      <h2 className={ss.header}>
        <GoMarkGithub className={ss.iconOcto} /> {repo.full_name}
      </h2>
    </Header>
    <Content>
      <div className={ss.content}>
        <Section title="About">
          <p>{repo.description}</p>
        </Section>
        <Section title="Contributors">
          <p>lorem</p>
        </Section>
        <ReadmeFile />
      </div>
    </Content>
  </React.Fragment>
) : null);

Main.propTypes = {
  repo: PropTypes.object,
};

export default Main;
