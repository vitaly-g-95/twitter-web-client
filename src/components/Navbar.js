import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navbar = ({ children }) => (
  <nav className="navbar navbar-expand navbar-light bg-light mb-4">
    <ul className="navbar-nav mr-auto">
      {routes.map(({ exact, path, name }, i) => (
        <li
          key={i}
          className="nav-item"
        >
          <NavLink
            exact={exact}
            to={path}
            className="nav-link"
            activeClassName="active"
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>

    <div className="w-auto">
      {children}
    </div>
  </nav>
);

export default Navbar;
