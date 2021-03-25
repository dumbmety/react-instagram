import React from 'react';
import { Link } from 'react-router-dom';
import Suggestion from './Suggestion';

const Suggestions = () => {
  return (
    <section className="mb-5">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-500">
          Suggestions For You
        </h2>
        <Link to="/" className="text-sm text-gray-800">
          See All
        </Link>
      </header>
      <ul className="space-y-3">
        <Suggestion username="ryanswich" userImg="ryanswich" />
        <Suggestion username="jakobowsky" userImg="jakobowsky" />
        <Suggestion username="joeel56" userImg="joeel56" />
        <Suggestion username="andrew.eugene" userImg="andrew.eugene" />
        <Suggestion username="marziuxd" userImg="marziuxd" />
      </ul>
    </section>
  );
};

export default Suggestions;
