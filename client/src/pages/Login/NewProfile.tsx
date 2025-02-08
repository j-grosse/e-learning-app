import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/ui/button';

function NewProfile({ user, errors, handleChange, handleProfileSubmit }) {
  // pass the orginal user as prop to here (Register) -> add more attribute to it
  // const context = useContext(AuthContext);
  // const errors = context.errors;

  const inputStyle =
    'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const labelStyle = 'block text-sm mb-2';

  return (
    <section className="bg-gray-50 dark:bg-gray-900 rounded-lg py-2">
      <div className="flex flex-col items-center px-6 py-8 mx-auto">
        <div className="w-full bg-background rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-t from-primary-50 to-primary-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg">
            <h1 className="font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Profile
            </h1>
            {errors?.username && (
              <p className="text-danger">{errors?.username.message}</p>
            )}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleProfileSubmit}
            >
              <div>
                {/*  <form className="form" onSubmit={handleProfileSubmit}> */}
                {/* <label htmlFor="">userType</label>
                {errors?.userType && (
                  <p className="text-danger">{errors?.userType.message}</p>
                )}
                <input
                  type="text"
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
                    type="text"
                    name="company"
                    value={user.company}
                    onChange={handleChange}
                    required
                  /> */}

                <label htmlFor="" className={labelStyle}>
                  firstName{' '}
                </label>
                {errors?.firstName && (
                  <p className="text-danger">{errors?.firstName.message}</p>
                )}
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="" className={labelStyle}>
                  lastName{' '}
                </label>
                {errors?.lastName && (
                  <p className="text-danger">{errors?.lastName.message}</p>
                )}
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="" className={labelStyle}>
                  address{' '}
                </label>
                {errors?.address && (
                  <p className="text-danger">{errors?.address.message}</p>
                )}
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="" className={labelStyle}>
                  zipcode{' '}
                </label>
                {errors?.zipcode && (
                  <p className="text-danger">{errors?.zipcode.message}</p>
                )}
                <input
                  type="text"
                  name="zipcode"
                  value={user.zipcode}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                  pattern="\d{1,10}"
                  title="Enter number"
                />
              </div>
              <div>
                <label htmlFor="" className={labelStyle}>
                  city{' '}
                </label>
                {errors?.city && (
                  <p className="text-danger">{errors?.city.message}</p>
                )}
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="" className={labelStyle}>
                  phone{' '}
                </label>
                {errors?.phone && (
                  <p className="text-danger">{errors?.phone.message}</p>
                )}
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                  pattern="\d{1,10}"
                  title="Enter number"
                />
              </div>
              <div>
                <label htmlFor="" className={labelStyle}>
                  image{' '}
                </label>
                {errors?.image && (
                  <p className="text-danger">{errors?.image.message}</p>
                )}
                <input
                  type="text"
                  name="image"
                  value={user.image}
                  onChange={handleChange}
                  className={inputStyle}
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
              <div className="text-center">
                <Button type="submit" variant="submitFull">
                  Register
                </Button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <NavLink
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-4"
                >
                  Log In
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewProfile;
