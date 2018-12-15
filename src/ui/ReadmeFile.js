import React from 'react';

import ss from './ReadmeFile.sass';

const ReadmeFile = () => (
  <div className={ss.readme}>
    <div className={ss.header}>
      README.md
    </div>
    <div className={ss.content}>
      lorem ipsum
    </div>
  </div>
);

export default ReadmeFile;
