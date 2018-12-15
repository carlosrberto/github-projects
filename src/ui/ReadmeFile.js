import React from 'react';
import { GoBook } from 'react-icons/go';

import ss from './ReadmeFile.sass';

const ReadmeFile = () => (
  <div className={ss.readme}>
    <div className={ss.header}>
      <GoBook className={ss.iconReadme} /> README.md
    </div>
    <div className={ss.content}>
      lorem ipsum
    </div>
  </div>
);

export default ReadmeFile;
