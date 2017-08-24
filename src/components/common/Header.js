import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <ul className="left active">
        <li>
          <IndexLink to="/">
            <i class="material-icons" aria-hidden="true">
              Home
            </i>
          </IndexLink>
        </li>
        <li>
          <Link to="/about">
            <i class="material-icons" aria-hidden="true">
              About
            </i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
