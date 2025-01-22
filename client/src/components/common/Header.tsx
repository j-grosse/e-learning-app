import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

// import Logo from '../../assets/images/jayLogo.png';
// import Logo from '../../assets/elearnlogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import { ModeToggle } from '../mode-toggle';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkStyle = 'hover:text-foreground dark:hover:text-background';

  const authMenuItems = (
    <>
      {/* Conditional rendering of Login/Logout */}
      {user ? (
        <>
          <NavLink
            className={navLinkStyle}
            to="/dashboard/enrollments"
            onClick={toggleMenu}
          >
            Dashboard
          </NavLink>
          <NavLink
            className={navLinkStyle}
            to="/"
            onClick={() => {
              logout(user);
              toggleMenu();
            }}
          >
            Logout
          </NavLink>
          <ModeToggle />
        </>
      ) : (
        <>
          <NavLink className={navLinkStyle} to="/login" onClick={toggleMenu}>
            Login
          </NavLink>
          <NavLink className={navLinkStyle} to="/register" onClick={toggleMenu}>
            Register
          </NavLink>
          <ModeToggle />
        </>
      )}
    </>
  );

  return (
    <>
      {/* <nav className="relative bg-white border-gray-200 dark:bg-gray-800"> */}
      <nav className="relative shadow-lg bg-primary">
        <div className="flex text-background dark:text-foreground flex-wrap items-center justify-between px-4 mx-auto lg:px-6 max-w-screen-xxl shadow-lg">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-primary-800 whitespace-nowrap dark:text-white hover:scale-105">
              <NavLink className={navLinkStyle} to="/">
                {/* <img src={Logo} width="40" alt="Logo"/> */}
                E-Learn
              </NavLink>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden items-center md:flex space-x-4">
            <NavLink className={navLinkStyle} to="/dashboard/enrollments">
              Home
            </NavLink>
            <NavLink className={navLinkStyle} to="/dashboard/enrollments">
              About
            </NavLink>
            <NavLink className={navLinkStyle} to="/dashboard/enrollments">
              Contact
            </NavLink>
            <div></div>
            <div className="flex items-center md:order-2 space-x-4">
              {authMenuItems}
            </div>
          </div>

          {/* hamburger menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col ">
                <NavLink className={navLinkStyle} to="/" onClick={toggleMenu}>
                  Home
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
              <div className={`flex flex-col`}>{authMenuItems}</div>
            </div>
          )}

          {/* Hamburger menu icon */}
          <div className="md:hidden my-1">
            <button
              type="button"
              className="text-white dark:text-white focus:outline-none pt-1"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="w-4 h-5" />
              ) : (
                <FaBars className="w-4 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
