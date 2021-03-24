import React from 'react';

import Posts from './Posts';
import Story from './Story';

const Main = () => {
  return (
    <main className="w-8/12 pr-5">
      <Story />
      <Posts />
    </main>
  );
};

export default Main;
