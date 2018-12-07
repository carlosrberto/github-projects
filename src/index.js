import React from 'react';
import ReactDOM from 'react-dom';

import SampleElement from './SampleElement';

ReactDOM.render(
  <div>React App, <SampleElement>sample styled element</SampleElement></div>,
  document.getElementById('root'),
);

module.hot.accept();
