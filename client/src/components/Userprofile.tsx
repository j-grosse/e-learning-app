import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/Auth';
import axios from '../axiosInstance';
// import CatBox from '../assets/cat-box.png';

const Userprofile = () => {
  // Where user could change information in user dashboard
  const { user } = useContext(AuthContext);
  const [userProfile, SetUserProfile] = useState(user);

  const handlerUpdate = (e) => {
    e.preventDefault();
    console.log(
      '🚀 ~ file: Userprofile.jsx:12 ~ handlerUpdate ~ userProfile:',
      userProfile
    );
    axios
      .put(`/auth/${user._id}`, userProfile)
      .then((res) => res)
      .catch((e) => e.response?.data?.message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUserProfile({ ...userProfile, [name]: value });
    console.log(
      '🚀 ~ file: Userprofile.jsx:21 ~ handleChange ~ userProfile:',
      userProfile
    );
  };

  return (
    <>
      <section className="bg-primary-50/00 dark:bg-gray-900">
        <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Profile
        </h2>
        <div className="max-w-2xl  py-8 mx-auto lg:py-16">
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="Userame"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Userame
                </label>
                <input
                  value={user.username}
                  type="text"
                  name="Userame"
                  id="Userame"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  defaultValue=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  value={user.email}
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  defaultValue=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Firstname
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={user.firstName}
                  required
                  defaultValue=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lastname
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={user.lastName}
                  required
                  defaultValue=""
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={user.address}
                  required
                  defaultValue=""
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="city"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={user.city}
                  required
                  defaultValue=""
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={user.phone}
                  required
                  defaultValue=""
                />
              </div>
              <div>
                <label
                  htmlFor="zipcode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zipcode
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={user.zipcode}
                  required
                  defaultValue=""
                />
              </div>
            </div>
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={handlerUpdate}
                type="submit"
                className="text-white bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-lg"
              >
                Update Profile
              </button>
              <button
                type="button"
                className="text-red-500 inline-flex items-center hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete Account
              </button>
            </div>
          </form>
        </div>
        {/* <img
          className="mx-auto rounded-lg"
          src={CatBox}
          alt="cat in bike basket"
        />
        <br /> */}
      </section>
    </>
  );
};

export default Userprofile;
