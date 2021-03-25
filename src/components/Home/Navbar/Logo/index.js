import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="/img/logo-type.png" alt="Instagram Logo" />
      </Link>
    </div>
  );
};

export default Logo;
