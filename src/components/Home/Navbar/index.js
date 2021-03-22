import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSearch
} from 'react-icons/ai'

const Navbar = () => {
  return (
    <header className="bg-white py-3 border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <Link to="/">
            <img src="/img/logo-type.png" alt="Instagram Logo" />
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex justify-center relative select-none cursor-text">
            <div
              className="absolute flex items-center"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <AiOutlineSearch size="0.9rem" className="text-gray-400" />
              <span className="text-sm ml-1 text-gray-400">Search</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 py-0.5 px-3 rounded w-9/12 h-7" />
          </div>
        </div>
        <div className="flex-1">
          <ul className="flex items-center justify-end">
            <li className="flex items-center ">
              <Link to="/">
                <AiFillHome size="1.5rem" />
              </Link>
            </li>
            <li className="flex items-center ml-5">
              <Link to="/direct/inbox">
                <AiOutlineMessage size="1.5rem" />
              </Link>
            </li>
            <li className="flex items-center ml-5">
              <Link to="/explore">
                <AiOutlineCompass size="1.5rem" />
              </Link>
            </li>
            <li className="flex items-center ml-5">
              <Link to="/activity">
                <AiOutlineHeart size="1.5rem" />
              </Link>
            </li>
            <li className="flex items-center ml-5">
              <Link
                to="/profile"
                className="w-8 h-8 inline-block overflow-hidden rounded-full"
              >
                <img className="w-full" src="/img/profile.jpeg" alt="Profile" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
