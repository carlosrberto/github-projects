import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '~/components/App';

const Root = () => (
  <Switch>
    <Route path="/:org/:repo(.*?)/" component={App} />
    <Route component={() => <h1>Not found!</h1>} />
  </Switch>
);

export default Root;
