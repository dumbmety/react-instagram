import React from 'react';
import Story from './Story';

const Main = () => {
  return (
    <main className="w-8/12 pr-5">
      <Story />
      <section>
        <article>Post 1</article>
        <article>Post 2</article>
        <article>Post 3</article>
      </section>
    </main>
  );
};

export default Main;
