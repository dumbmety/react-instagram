import { useState } from 'react'

import Actions from './Actions'
import Links from './Links'
import Logo from './Logo'
import Mobile from './Mobile'
import Search from './Search'

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState<boolean>(false)

  return (
    <>
      <header className="bg-white py-2 border-b border-gray-200 fixed top-0 left-0 w-full">
        <div className="main-header__wrapper">
          <div className="hidden md:flex max-w-4xl mx-auto items-center px-5 lg:px-0">
            <Logo />
            <Search
              open={openSearch}
              onOpen={() => setOpenSearch(true)}
              onClose={() => setOpenSearch(false)}
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
