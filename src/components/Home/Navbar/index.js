import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IoSearchOutline,
  IoCloseCircle,
  IoHome,
  IoChatbubbleOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoAddCircleOutline
} from 'react-icons/io5';

import './index.css';

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleShowSearch = () => setOpenSearch(true);
  const handleHideSearch = () => setOpenSearch(false);

  document.addEventListener('click', event => {
    if (!document.querySelector('#search-open')) return;

    event.target.closest('.main-header__search--close') ||
    event.target.closest('.main-header__search--close-wrapper') ||
    event.target.closest('.main-header__search--close-background') ||
    event.target.closest('.main-header__search--open') ||
    event.target.closest('.main-header__search--open svg') ||
    event.target.closest('.main-header__search--open button') ||
    event.target.closest('.main-header__search--open input')
      ? handleShowSearch()
      : handleHideSearch();
  });

  return (
    <>
      <header id="main-header">
        <div className="main-header__wrapper">
          <div className="main-header__desktop">
            <div>
              <Link to="/">
                <img src="/img/logo-type.png" alt="Instagram Logo" />
              </Link>
            </div>
            <div className="main-header__desktop--search">
              {openSearch ? (
                <div id="search-open" className="main-header__search--open">
                  <IoSearchOutline size="0.9rem" className="left-2" />
                  <button onClick={handleHideSearch} className="right-2">
                    <IoCloseCircle size="0.9rem" className="right-0" />
                  </button>
                  <input
                    ref={element => element && element.focus()}
                    type="text"
                    placeholder="Search"
                  />
                </div>
              ) : (
                <div
                  id="search-close"
                  onClick={handleShowSearch}
                  className="main-header__search--close"
                >
                  <div className="main-header__search--close-wrapper">
                    <IoSearchOutline size="0.9rem" />
                    <span>Search</span>
                  </div>
                  <div className="main-header__search--close-background" />
                </div>
              )}
            </div>
            <div>
              <ul className="main-header__links">
                <li className="main-header__link">
                  <Link to="/">
                    <IoHome size="1.5rem" />
                  </Link>
                </li>
                <li className="main-header__link">
                  <Link to="/direct/inbox">
                    <IoChatbubbleOutline size="1.5rem" />
                  </Link>
                </li>
                <li className="main-header__link">
                  <Link to="/explore">
                    <IoCompassOutline size="1.5rem" />
                  </Link>
                </li>
                <li className="main-header__link">
                  <Link to="/activity">
                    <IoHeartOutline size="1.5rem" />
                  </Link>
                </li>
                <li className="main-header__link">
                  <Link to="/profile" className="main-header__link--profile">
                    <img src="/img/users/neysidev.jpeg" alt="Mehdi Neysi" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-header__mobile">
            <Link to="/">
              <img src="/img/logo-type.png" alt="Instagram Logo" />
            </Link>
            <Link to="/direct/inbox">
              <IoChatbubbleOutline size="1.5rem" />
            </Link>
          </div>
        </div>
      </header>
      <div id="main-header__mobile--actions">
        <Link to="/" className="main-header__mobile--action">
          <IoHome size="1.5rem" />
        </Link>
        <Link to="/search" className="main-header__mobile--action">
          <IoSearchOutline size="1.5rem" />
        </Link>
        <Link to="/add-post" className="main-header__mobile--action">
          <IoAddCircleOutline size="1.5rem" />
        </Link>
        <Link to="/activity" className="main-header__mobile--action">
          <IoHeartOutline size="1.5rem" />
        </Link>
        <Link to="/profile" className="main-header__mobile--action">
          <img src="/img/users/neysidev.jpeg" alt="neysidev" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
