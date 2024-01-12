import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/Auth';
import { NavLink } from 'react-router-dom';

function NewProfile({ user, errors, handleChange, handleProfileSubmit }) {
  // pass the orginal user as prop to here (Register) -> add more attribute to it
  // const context = useContext(AuthContext);
  // const errors = context.errors;

  return (
    <section className="dark:bg-gray-900 rounded-lg">
      <div className="flex flex-col items-center justify-center mx-auto lg:py-0 ">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-t from-primary-50 to-primary-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8  mx-16">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Profile
            </h1>
            {errors?.username && (
              <p className="text-danger">{errors?.username.message}</p>
            )}
            <form className="space-y-4 md:space-y-6 text-right" onSubmit={handleProfileSubmit}>
              <div>
                {/*  <form className="form" onSubmit={handleProfileSubmit}> */}
                {/* <label htmlFor="">userType</label>
                {errors?.userType && (
                  <p className="text-danger">{errors?.userType.message}</p>
                )}
                <input
                  type="String"
                  name="userType"
                  value={user.userType}
                  onChange={handleChange}
                  required
                /> */}

                {/* <label htmlFor="">company</label>
                  {errors?.company && (
                    <p className="text-danger">{errors?.company.message}</p>
                  )}
                  <input
                    type="String"
                    name="company"
                    value={user.company}
                    onChange={handleChange}
                    required
                  /> */}

                <label htmlFor="">firstName </label>
                {errors?.firstName && (
                  <p className="text-danger">{errors?.firstName.message}</p>
                )}
                <input
                  type="String"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="">lastName </label>
                {errors?.lastName && (
                  <p className="text-danger">{errors?.lastName.message}</p>
                )}
                <input
                  type="String"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="">address </label>
                {errors?.address && (
                  <p className="text-danger">{errors?.address.message}</p>
                )}
                <input
                  type="String"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="">zipcode </label>
                {errors?.zipcode && (
                  <p className="text-danger">{errors?.zipcode.message}</p>
                )}
                <input
                  type="String"
                  name="zipcode"
                  value={user.zipcode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="">city </label>
                {errors?.city && (
                  <p className="text-danger">{errors?.city.message}</p>
                )}
                <input
                  type="String"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="">phone </label>
                {errors?.phone && (
                  <p className="text-danger">{errors?.phone.message}</p>
                )}
                <input
                  type="String"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="">image </label>
                {errors?.image && (
                  <p className="text-danger">{errors?.image.message}</p>
                )}
                <input
                  type="String"
                  name="image"
                  value={user.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{' '}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
              </p>
              <div className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                <NavLink to="/login"></NavLink>
                Login
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewProfile;
