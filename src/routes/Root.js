import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppContainer from '~/containers/AppContainer';

const Root = () => (
  <Switch>
    <Route path="/:org/:repo/" component={AppContainer} />
    <Route component={() => <h1>Not found!</h1>} />
  </Switch>
);

export default Root;
