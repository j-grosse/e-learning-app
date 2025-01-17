import { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import Login from '../Login';
import Register from '../Register';

import Logo from '../../assets/images/jayLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import { ModeToggle } from '../mode-toggle';
// import elearnlogo from '../../assets/elearnlogo.png';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkStyle = 'hover:text-foreground dark:hover:text-background';

  const authActions = (
    <>
      {/* Conditional rendering of Login/Logout */}

      {user ? (
        <div className="flex items-center lg:order-2 space-x-4">
          <NavLink className={navLinkStyle} to="/dashboard/enrollments">
            Dashboard
          </NavLink>
          <NavLink className={navLinkStyle} to="/" onClick={logout}>
            Logout
          </NavLink>
          <ModeToggle />
        </div>
      ) : (
        <div className="flex items-center lg:order-2">
          <Login />
          <Register />
          <ModeToggle />
        </div>
      )}
    </>
  );

  return (
    <>
      {/* <nav className="relative bg-white border-gray-200 dark:bg-gray-800"> */}
      <nav className="relative shadow-lg bg-primary">
        <div className="flex text-background dark:text-foreground flex-wrap items-center justify-between px-4 py-1 mx-auto lg:px-6 max-w-screen-xxl shadow-lg">
          {/* Logo */}
          <div className="flex items-center">
            <div className="self-center text-xl font-bold text-primary-800 whitespace-nowrap dark:text-white hover:scale-105">
              <NavLink className={navLinkStyle} to="/">
                E-Learn
              </NavLink>
            </div>
          </div>

          <div className="hidden items-center lg:flex space-x-4 py-3">
            <NavLink className={navLinkStyle} to="/dashboard/enrollments">
              Courses
            </NavLink>
            <NavLink className={navLinkStyle} to="/dashboard/enrollments">
              About
            </NavLink>
            <NavLink className={navLinkStyle} to="/dashboard/enrollments">
              Contact
            </NavLink>
            {authActions}
          </div>

          {/* hamburger menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="flex flex-col space-y-2 p-4">
                <NavLink
                  className={navLinkStyle}
                  to="/dashboard/enrollments"
                  onClick={toggleMenu}
                >
                  Courses
                </NavLink>
                <NavLink
                  className={navLinkStyle}
                  to="/dashboard/enrollments"
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
                <NavLink
                  className={navLinkStyle}
                  to="/dashboard/enrollments"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </div>
              {authActions}
            </div>
          )}

          {/* hamburger menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white dark:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
