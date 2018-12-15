import React from 'react';
import ReactDOM from 'react-dom';
import Root from '~/components/Root';

import '~/styles/global.sass';

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);

module.hot.accept();
