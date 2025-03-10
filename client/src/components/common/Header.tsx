import { useState, useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

// import Logo from '../../assets/images/jayLogo.png';
// import Logo from '../../assets/elearnlogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import { ModeToggle } from '../ui/mode-toggle';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinkStyle =
    'text-sm hover:text-primary dark:hover:text-primary';

  const authMenuItems = (
    <>
      {/* Conditional rendering of Login/Logout */}
      {user ? (
        <>
          <NavLink
            className={navLinkStyle}
            to="/dashboard/course"
            onClick={isMenuOpen ? toggleMenu : null}
          >
            Dashboard
          </NavLink>
          <NavLink
            className={navLinkStyle}
            to="/"
            onClick={() => {
              logout(user);
              isMenuOpen ? toggleMenu() : null;
            }}
          >
            Logout
          </NavLink>
          <ModeToggle />
        </>
      ) : (
        <>
          <NavLink className={navLinkStyle} to="/login" onClick={isMenuOpen ? toggleMenu : null}>
            Login
          </NavLink>
          <NavLink className={navLinkStyle} to="/register" onClick={isMenuOpen ? toggleMenu : null}>
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
      <nav className="relative shadow-sm bg-background">
        <div className="flex dark:text-foreground flex-wrap items-center justify-between px-2 mx-auto lg:pr-6 py-2 max-w-screen-2xl shadow-lg">
          {/* Logo */}
          <div>
            <div className="text-md font-bold text-primary-800 whitespace-nowrap dark:text-white transition-transform duration-200 transform hover:scale-105">
              <NavLink
                to="/"
                className="text-primary hover:text-foreground dark:hover:text-foreground"
              >
                {/* <img src={Logo} width="40" alt="Logo"/> */}
                iCreate
              </NavLink>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden items-center md:flex space-x-4">
            <NavLink className={navLinkStyle} to="/">
              Courses
            </NavLink>
            <NavLink className={navLinkStyle} to="/about">
              About
            </NavLink>
            {/* <NavLink className={navLinkStyle} to="/">
              Contact
            </NavLink> */}
            <div></div>
            <div className="flex items-center md:order-2 space-x-4">
              {authMenuItems}
            </div>
          </div>

          {/* hamburger menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-30 ">
            <div className="flex justify-end items-start mt-12">
              <div
                ref={menuRef}
                className="text-background dark:text-foreground bg-foreground/50 dark:bg-foreground/15 p-3 rounded-l-md shadow-lg"
              >
                <div className="flex flex-col space-y-1">
                  <NavLink className={navLinkStyle} to="/" onClick={toggleMenu}>
                    Courses
                  </NavLink>
                  <NavLink
                    className={navLinkStyle}
                    to="/about"
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                  {/*  <NavLink
                    className={navLinkStyle}
                    to="/dashboard/course"
                    onClick={toggleMenu}
                  >
                    Contact
                  </NavLink> */}
                  <div className="flex flex-col space-y-1">{authMenuItems}</div>
                </div>
              </div>
            </div>
            </div>
          )}

          {/* Hamburger menu icon */}
          <div className="md:hidden my-0">
            <button
              type="button"
              className="dark:text-white focus:outline-none pt-1"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="w-3 h-3" />
              ) : (
                <FaBars className="w-3 h-3" />
              )}
            </button>
          </div>
          </div>
      </nav>
    </>
  );
};

export default Header;
