import React from 'react';
import { Link } from 'react-router-dom';

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
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="w-10 h-10 mr-3 rounded-full object-cover"
                src="/img/users/ryanswich.jpg"
                alt="ryanswich"
              />
            </Link>
            <div className="flex flex-col">
              <Link to="/" className="text-sm font-semibold hover:underline">
                ryanswich
              </Link>
              <span className="text-xs text-gray-500">New to Instagram</span>
            </div>
          </div>
          <button className="text-sm text-lightBlue-500 font-semibold focus:outline-none">
            Follow
          </button>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="w-10 h-10 mr-3 rounded-full object-cover"
                src="/img/users/jakobowsky.jpg"
                alt="jakobowsky"
              />
            </Link>
            <div className="flex flex-col">
              <Link to="/" className="text-sm font-semibold hover:underline">
                jakobowsky
              </Link>
              <span className="text-xs text-gray-500">New to Instagram</span>
            </div>
          </div>
          <button className="text-sm text-lightBlue-500 font-semibold focus:outline-none">
            Follow
          </button>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="w-10 h-10 mr-3 rounded-full object-cover"
                src="/img/users/joeel56.jpg"
                alt="joeel56"
              />
            </Link>
            <div className="flex flex-col">
              <Link to="/" className="text-sm font-semibold hover:underline">
                joeel56
              </Link>
              <span className="text-xs text-gray-500">New to Instagram</span>
            </div>
          </div>
          <button className="text-sm text-lightBlue-500 font-semibold focus:outline-none">
            Follow
          </button>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="w-10 h-10 mr-3 rounded-full object-cover"
                src="/img/users/andrew.eugene.jpg"
                alt="andrew.eugene"
              />
            </Link>
            <div className="flex flex-col">
              <Link to="/" className="text-sm font-semibold hover:underline">
                andrew.eugene
              </Link>
              <span className="text-xs text-gray-500">New to Instagram</span>
            </div>
          </div>
          <button className="text-sm text-lightBlue-500 font-semibold focus:outline-none">
            Follow
          </button>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="w-10 h-10 mr-3 rounded-full object-cover"
                src="/img/users/marziuxd.jpg"
                alt="marziuxd"
              />
            </Link>
            <div className="flex flex-col">
              <Link to="/" className="text-sm font-semibold hover:underline">
                marziuxd
              </Link>
              <span className="text-xs text-gray-500">New to Instagram</span>
            </div>
          </div>
          <button className="text-sm text-lightBlue-500 font-semibold focus:outline-none">
            Follow
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Suggestions;
