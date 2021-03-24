import React from 'react';

import Posts from './Posts';
import Story from './Story';

const Main = () => {
  return (
    <main className="w-full px-3 lg:w-8/12 lg:pr-5">
      <Story />
      <Posts />
    </main>
  );
};

export default Main;
