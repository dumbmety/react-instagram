import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="mb-5">
        <li className="inline text-gray-400">
          <Link to="/about">About</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/help">Help</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/blog">Press</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/developer">API</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/privacy">Privacy</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/terms">Terms</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/locations">Locations</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/directory/profiles">Top Accounts</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/directory/hashtags">Hashtags</Link>
        </li>
        <li className="inline text-gray-400">
          <Link to="/select-language">Languages</Link>
        </li>
      </ul>
      <p className="text-gray-400 font-semibold uppercase">
        &copy; 2021 instagram from facebook
      </p>
    </footer>
  )
}

export default Footer
