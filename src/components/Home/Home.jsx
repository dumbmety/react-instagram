import React from 'react';

import Navbar from './Navbar/Navbar';
import Details from './Details/Details';
import Main from './Main/Main';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 max-w-4xl mx-auto flex">
        <Main />
        <Details />
      </div>
    </>
  );
};

export default Home;
