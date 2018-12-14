import React from 'react';
import ReactDOM from 'react-dom';
import Main from '~/ui/Main';

import '~/styles/global.sass';

ReactDOM.render(
  <Main sidebar={<div>Sidebar</div>}>
    <p>
      lorem ipsum
    </p>
  </Main>,
  document.getElementById('root'),
);

module.hot.accept();
