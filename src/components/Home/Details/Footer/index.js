import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Footer = () => {
  return (
    <footer id="footer">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/blog">Press</Link>
        </li>
        <li>
          <Link to="/developer">API</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/terms">Terms</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/directory/profiles">Top Accounts</Link>
        </li>
        <li>
          <Link to="/directory/hashtags">Hashtags</Link>
        </li>
        <li>
          <Link to="/select-language">Languages</Link>
        </li>
      </ul>
      <p>&copy; 2021 instagram from facebook</p>
    </footer>
  );
};

export default Footer;
