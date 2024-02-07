import { useState, useContext } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import Login from '../Login';
import Register from '../Register';
// import Logo from '../../assets/logo.png';
// import elearnlogo from '../../assets/elearnlogo.png';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* <nav className="relative bg-white border-gray-200 dark:bg-gray-800"> */}
      <nav className="relative bg-gradient-to-r from-primary-100 to-primary-100 border-gray-200 dark:bg-gray-800 shadow-lg">
        <div className="px-4 py-1 lg:px-6 flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-primary-800 self-center text-xl font-bold whitespace-nowrap dark:text-white hover-zoom">
              <NavLink to="/">
                {/* <img
                  src={elearnLogo}
                  className="h-6 sm:h-9"
                  alt="Cat Logo"
                  style={{ filter: 'invert(0.3)' }}
                /> */}
                <span className="ml-1 text-1xl">E-Learn</span>
              </NavLink>
            </div>
          </div>

          {/* Conditional rendering of Login/Logout */}
          {user ? (
            <div className="flex items-center lg:order-2">
              <button></button>
              <div className="text-primary-800 hover:text-primary-500 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-gray-800">
                <NavLink to="/dashboard">
                  <button>
                    Welcome <br />
                    {user.username}
                  </button>
                </NavLink>
              </div>

              <div className="text-gray-800 dark:text-white bg-primary-200 hover:bg-primary-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 shadow-lg">
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center  items-center lg:order-2">
              <div>
                <Login />
              </div>

              <div>
                <Register />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;