import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { BiPackage } from 'react-icons/bi';
import { CiClock2 } from 'react-icons/ci';
import { BiSupport } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';

const NavbarSide = ({ displayPage, setDisplayPage }) => {
  const { user } = useContext(AuthContext);
  const [sidedisplay, setSideDisplay] = useState(true);
  const navigate = useNavigate();

  let selectedBtn = 'bg-primary-200 rounded-lg';
  const navToPage = (page) => {
    navigate(page);
  };

  return (
    <>
      {sidedisplay && user && (
        <div className="overflow-y-auto py-5 px-3 h-full bg-gradient-to-t from-primary-50 to-primary-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            <li className={displayPage === 5 ? selectedBtn : undefined}>
              <button
                onClick={() => {
                  setDisplayPage(5);
                }}
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary-300 dark:hover:bg-gray-700 group"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Overview
                </span>
              </button>
            </li>
            {user.userType === 'employee' && (
              <li className={displayPage === 3 ? selectedBtn : undefined}>
                <button
                  onClick={() => {
                    setDisplayPage(3);
                  }}
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-primary-300 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-sales"
                  data-collapse-toggle="dropdown-sales"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <BiPackage />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Incoming
                  </span>
                </button>
              </li>
            )}

            {user.userType === 'customer' && (
              <li className={displayPage === 4 ? selectedBtn : undefined}>
                <button
                  onClick={() => {
                    setDisplayPage(4);
                  }}
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-primary-300 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-sales"
                  data-collapse-toggle="dropdown-sales"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <BiPackage />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    New Order
                  </span>
                </button>
              </li>
            )}

            {/* 
              <li className={displayPage === 0 ? selectedBtn : undefined}>
              <button
                onClick={() => {
                  setDisplayPage(0);
                }}
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <CiClock2 />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  History
                </span>
              </button>
            </li> */}
            <li className={displayPage === 1 ? selectedBtn : undefined}>
              <button
                onClick={() => {
                  setDisplayPage(1);
                }}
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-primary-300 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <BsFillPersonFill />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Profile
                </span>
              </button>
            </li>

            {user.userType === 'customer' && (
              <li className={displayPage === 2 ? selectedBtn : undefined}>
                <button
                  onClick={() => {
                    setDisplayPage(2);
                  }}
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-primary-300 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <BiSupport />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Support
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
      {/* </aside> */}
    </>
  );
};

export default NavbarSide;
