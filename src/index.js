import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import history from '~/routes/history';
import Root from '~/routes/Root';

import '~/styles/global.sass';

ReactDOM.render(
  <Router history={history}>
    <Root />
  </Router>,
  document.getElementById('root'),
);

module.hot.accept();
