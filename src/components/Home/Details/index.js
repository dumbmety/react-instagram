import React from 'react';

import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from './Footer';

const Details = () => {
  return (
    <aside className="w-4/12">
      <Profile />
      <Suggestions />
      <Footer />
    </aside>
  );
};

export default Details;
