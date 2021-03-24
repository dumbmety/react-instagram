import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Profile = () => {
  return (
    <header className="profile">
      <div className="flex items-center">
        <Link to="/" className="profile__image">
          <div className="profile__image--wrapper">
            <img src="/img/users/neysidev.jpeg" alt="Mehdi Neysi" />
          </div>
        </Link>
        <div>
          <Link to="/profile" className="profile__username">
            neysidev
          </Link>
          <h3 className="profile__name">Mehdi Neysi</h3>
        </div>
      </div>
      <button className="profile__button">Switch</button>
    </header>
  );
};

export default Profile;
