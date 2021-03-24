import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Suggestions = () => {
  return (
    <section className="suggestions">
      <header>
        <h2>Suggestions For You</h2>
        <Link to="/">See All</Link>
      </header>
      <ul>
        <li className="user">
          <div className="user__content">
            <Link to="/">
              <img src="/img/users/ryanswich.jpg" alt="ryanswich" />
            </Link>
            <div className="text">
              <Link to="/" className="username">
                ryanswich
              </Link>
              <span className="status">New to Instagram</span>
            </div>
          </div>
          <button>Follow</button>
        </li>
        <li className="user">
          <div className="user__content">
            <Link to="/">
              <img src="/img/users/jakobowsky.jpg" alt="jakobowsky" />
            </Link>
            <div className="text">
              <Link to="/" className="username">
                jakobowsky
              </Link>
              <span className="status">New to Instagram</span>
            </div>
          </div>
          <button>Follow</button>
        </li>
        <li className="user">
          <div className="user__content">
            <Link to="/">
              <img src="/img/users/joeel56.jpg" alt="joeel56" />
            </Link>
            <div className="text">
              <Link to="/" className="username">
                joeel56
              </Link>
              <span className="status">New to Instagram</span>
            </div>
          </div>
          <button>Follow</button>
        </li>
        <li className="user">
          <div className="user__content">
            <Link to="/">
              <img src="/img/users/andrew.eugene.jpg" alt="andrew.eugene" />
            </Link>
            <div className="text">
              <Link to="/" className="username">
                andrew.eugene
              </Link>
              <span className="status">New to Instagram</span>
            </div>
          </div>
          <button>Follow</button>
        </li>
        <li className="user">
          <div className="user__content">
            <Link to="/">
              <img src="/img/users/marziuxd.jpg" alt="marziuxd" />
            </Link>
            <div className="text">
              <Link to="/" className="username">
                marziuxd
              </Link>
              <span className="status">New to Instagram</span>
            </div>
          </div>
          <button>Follow</button>
        </li>
      </ul>
    </section>
  );
};

export default Suggestions;
