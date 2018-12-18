import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoMarkGithub } from 'react-icons/go';
import Header from '~/ui/Header';
import Content from '~/ui/Content';
import ReadmeFile from '~/ui/ReadmeFile';
import Section from '~/ui/Section';

import ss from './RepoDetail.sass';

const RepoDetail = ({ repo }) => (repo ? (
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

RepoDetail.propTypes = {
  repo: PropTypes.object,
};

const mapStateToProps = (state) => {
  const id = state.repos.byName[state.repos.activeRepo];
  return {
    repo: state.repos.byId[id],
  };
};

export default connect(
  mapStateToProps,
)(RepoDetail);
