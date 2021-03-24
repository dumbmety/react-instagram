import React from 'react';

import Posts from './Posts';
import Story from './Story';

import './index.css';

const Main = () => {
  return (
    <main id="main">
      <Story />
      <Posts />
    </main>
  );
};

export default Main;
