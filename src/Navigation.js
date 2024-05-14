import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css"; // Import CSS file for styling

function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" activePath={location.pathname}>
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/personal-details" activePath={location.pathname}>
            Personal Details
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/education" activePath={location.pathname}>
            Education
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/experience" activePath={location.pathname}>
            Experience
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activePath={location.pathname}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Custom NavLink component to apply active class dynamically
function NavLink({ to, activePath, children }) {
  const isActive = activePath === to;

  return (
    <Link to={to} className={isActive ? "nav-link active" : "nav-link"}>
      {children}
    </Link>
  );
}

export default Navigation;
