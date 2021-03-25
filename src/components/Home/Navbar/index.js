import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                  <svg
                    aria-label="Search &amp; Explore"
                    className="left-3"
                    fill="#A1A1AA"
                    height="0.7rem"
                    viewBox="0 0 48 48"
                    width="0.7rem"
                  >
                    <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z"></path>
                    <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
                  </svg>
                  <button onClick={handleHideSearch} className="right-2">
                    <svg
                      className="right-0"
                      fill="currentColor"
                      height="0.9rem"
                      stroke-width="0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      width="0.9rem"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"></path>
                      </g>
                    </svg>
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
                    <svg
                      aria-label="Search"
                      fill="#A1A1AA"
                      height="0.7rem"
                      viewBox="0 0 48 48"
                      width="0.7rem"
                    >
                      <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z"></path>
                      <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
                    </svg>
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
                    <svg
                      aria-label="Home"
                      fill="#262626"
                      height="22"
                      viewBox="0 0 48 48"
                      width="22"
                    >
                      <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="main-header__link">
                  <Link to="/direct/inbox">
                    <svg
                      aria-label="Direct"
                      fill="#262626"
                      height="22"
                      viewBox="0 0 48 48"
                      width="22"
                    >
                      <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="main-header__link">
                  <Link to="/explore">
                    <svg
                      aria-label="Find People"
                      fill="#262626"
                      height="22"
                      viewBox="0 0 48 48"
                      width="22"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="main-header__link">
                  <Link to="/activity">
                    <svg
                      aria-label="Activity Feed"
                      fill="#262626"
                      height="22"
                      viewBox="0 0 48 48"
                      width="22"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
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
              <svg
                aria-label="Direct"
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </header>
      <div id="main-header__mobile--actions">
        <Link to="/" className="main-header__mobile--action">
          <svg
            aria-label="Home"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
          </svg>
        </Link>
        <Link to="/search" className="main-header__mobile--action">
          <svg
            aria-label="Search &amp; Explore"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z"></path>
            <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
          </svg>
        </Link>
        <Link to="/add-post" className="main-header__mobile--action">
          <svg
            aria-label="New Post"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path>
            <path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>
            <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"></path>
          </svg>
        </Link>
        <Link to="/activity" className="main-header__mobile--action">
          <svg
            aria-label="Activity Feed"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </Link>
        <Link to="/profile" className="main-header__mobile--action">
          <img src="/img/users/neysidev.jpeg" alt="neysidev" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
