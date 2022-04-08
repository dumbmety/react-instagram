import React from "react"
import Navbar from "./Home/Navbar/Navbar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="mt-20 max-w-4xl mx-auto flex">{children}</main>
    </>
  )
}
