import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Centrera länken i mitten */}
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          UtvecklarForum
        </Link>
      </div>

      <div className="navbar-end">{/* Ta bort knappen "Kontakta oss" */}</div>
    </div>
  );
};

export default Navbar;
