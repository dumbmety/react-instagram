import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSearch
} from 'react-icons/ai'

import './index.css'

const Navbar = () => {
  return (
    <header id="main-header">
      <div className="main-header__wrapper">
        <div>
          <Link to="/">
            <img src="/img/logo-type.png" alt="Instagram Logo" />
          </Link>
        </div>
        <div>
          <div className="main-header__search">
            <div className="main-header__search--wrapper">
              <AiOutlineSearch size="0.9rem" />
              <span>Search</span>
            </div>
            <div className="main-header__search--background" />
          </div>
        </div>
        <div>
          <ul className="main-header__links">
            <li className="main-header__link">
              <Link to="/">
                <AiFillHome size="1.5rem" />
              </Link>
            </li>
            <li className="main-header__link">
              <Link to="/direct/inbox">
                <AiOutlineMessage size="1.5rem" />
              </Link>
            </li>
            <li className="main-header__link">
              <Link to="/explore">
                <AiOutlineCompass size="1.5rem" />
              </Link>
            </li>
            <li className="main-header__link">
              <Link to="/activity">
                <AiOutlineHeart size="1.5rem" />
              </Link>
            </li>
            <li className="main-header__link">
              <Link to="/profile" className="main-header__link--profile">
                <img src="/img/profile.jpeg" alt="Profile" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
