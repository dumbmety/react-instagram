import { useState } from 'react'

import Actions from './Actions'
import Links from './Links'
import Logo from './Logo'
import Mobile from './Mobile'
import Search from './Search'

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false)

  const handleShowSearch = () => setOpenSearch(true)
  const handleHideSearch = () => setOpenSearch(false)

  document.addEventListener('click', event => {
    if (!document.querySelector('#search-open')) return

    event.target.closest('#search-close') ||
    event.target.closest('#search-close-wrapper') ||
    event.target.closest('#search-close-background') ||
    event.target.closest('#search-open') ||
    event.target.closest('#search-open svg') ||
    event.target.closest('#search-open button') ||
    event.target.closest('#search-open input')
      ? handleShowSearch()
      : handleHideSearch()
  })

  return (
    <>
      <header className="bg-white py-2 border-b border-gray-200 fixed top-0 left-0 w-full">
        <div className="main-header__wrapper">
          <div className="hidden md:flex max-w-4xl mx-auto items-center px-5 lg:px-0">
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
  )
}

export default Navbar
