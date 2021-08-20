import { Link, useLocation } from 'react-router-dom'

export default function DirectTabs() {
  const location = useLocation()

  const isPrimary = location.pathname === '/direct/inbox'
  const isGeneral = location.pathname === '/direct/inbox/general'

  return (
    <ul className="flex flex-1 items-center uppercase text-sm">
      <li
        className={`flex flex-1 justify-center font-semibold border-b ${
          isPrimary
            ? 'text-gray-800 border-gray-800'
            : 'text-gray-400 border-gray-200'
        }`}
      >
        <Link to="/direct/inbox" className="inline-block py-3 px-4">
          Primary
        </Link>
      </li>
      <li
        className={`flex flex-1 justify-center  border-b ${
          isGeneral
            ? 'text-gray-800 border-gray-800'
            : 'text-gray-400 border-gray-200'
        }`}
      >
        <Link to="/direct/inbox/general" className="inline-block py-3 px-4">
          General
        </Link>
      </li>
    </ul>
  )
}
