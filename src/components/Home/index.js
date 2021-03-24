import React from 'react';

import Navbar from './Navbar';
import Details from './Details';
import Main from './Main';

import './index.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Main />
        <Details />
      </div>
    </>
  );
};

export default Home;
