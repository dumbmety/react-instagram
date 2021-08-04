import Navbar from './Home/Navbar/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-20 max-w-4xl mx-auto flex">{children}</main>
    </>
  )
}
