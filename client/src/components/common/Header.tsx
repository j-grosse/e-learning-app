import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import Login from '../Login';
import Register from '../Register';

import Logo from '../../assets/images/brain-logo.png';
// import elearnlogo from '../../assets/elearnlogo.png';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* <nav className="relative bg-white border-gray-200 dark:bg-gray-800"> */}
      <nav className="relative shadow-lg bg-primary">
        <div className="flex flex-wrap items-center justify-between px-4 py-1 mx-auto lg:px-6 max-w-screen-xxl">
          {/* Logo */}
          <div className="flex items-center">
            <div className="self-center text-xl font-bold text-primary-800 whitespace-nowrap dark:text-white hover-zoom">
              <NavLink to="/">
                <img
                  src={Logo}
                  className="h-6 sm:h-9"
                  alt="Logo"
                  // style={{ filter: 'invert(0.3)' }}
                />
                <span className="ml-1 text-1xl">E-Learn</span>
              </NavLink>
            </div>
          </div>

          <ul className="flex items-center">
            <li className="px-4 py-2">
              <NavLink to="/dashboard">
                <div>About</div>
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink to="/dashboard">
                <div>Courses</div>
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink to="/dashboard">
                <div>Contact</div>
              </NavLink>
            </li>
          </ul>

          {/* Conditional rendering of Login/Logout */}
          {user ? (
            <div className="flex items-center lg:order-2">
              <div className="text-primary-800 hover:text-primary-500 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-gray-800">
                <button className="rounded-md px-2 py-0.5">
                  <NavLink to="/dashboard">
                    {user.username}'s <br />
                    dashboard
                  </NavLink>
                </button>
              </div>

              <div className="text-gray-800 dark:text-white bg-primary-200 hover:bg-primary-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center lg:order-2">
              <div>
                <Login />
              </div>

              <div>
                <Register />
              </div>

              {/* hamburger menu */}
              {/* <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg shadow-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button> */}
            </div>
          )}

          {/* <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li key="1">
              <div className="block py-2 pl-3 pr-4 text-gray-700 transform border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:scale-105">
                <NavLink to="/orders/checkout">Checkout</NavLink>
              </div>
            </li>
            <li key="2">
              <div className="block py-2 pl-3 pr-4 text-gray-700 transform border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:scale-105">
                <NavLink to="/orders/new">New Order</NavLink>
              </div>
            </li>
            <li key="3">
              <div className="block py-2 pl-3 pr-4 text-gray-700 transform border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:scale-105">
                <NavLink to="/dashboard">My Profile</NavLink>
              </div>
            </li>
            <li key="4">
              <div className="block py-2 pl-3 pr-4 text-gray-700 transform border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:scale-105">
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </li>
          </ul>
        </div> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
