import React from 'react'
import Navbar from './Home/Navbar/Navbar'

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <main className="mt-20 max-w-4xl mx-auto flex">{children}</main>
  </>
)

export default Layout
