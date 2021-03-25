import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Actions from './Actions';
import Links from './Links';
import Logo from './Logo';
import Mobile from './Mobile';
import Search from './Search';

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
            <Logo />
            <Search
              hide={handleHideSearch}
              open={openSearch}
              show={handleShowSearch}
            />
            <Links />
          </div>
          <Mobile />
        </div>
      </header>
      <Actions />
    </>
  );
};

export default Navbar;
