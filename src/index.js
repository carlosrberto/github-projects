import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import configureStore from '~/state/configureStore';
import history from '~/routes/history';
import Root from '~/routes/Root';

import '~/styles/global.sass';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
