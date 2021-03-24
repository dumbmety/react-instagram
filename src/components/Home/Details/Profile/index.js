import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <header className="my-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="bg-gray-300 p-0.5 rounded-full mr-5">
          <div className="bg-white p-0.5 rounded-full w-14 h-14 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src="/img/users/neysidev.jpeg"
              alt="Mehdi Neysi"
            />
          </div>
        </Link>
        <div>
          <Link to="/profile" className="font-semibold text-sm">
            neysidev
          </Link>
          <h2 className="font-semibold text-sm text-gray-400">Mehdi Neysi</h2>
        </div>
      </div>
      <button className="font-semibold text-sm text-lightBlue-500 focus:outline-none">
        Switch
      </button>
    </header>
  );
};

export default Profile;
