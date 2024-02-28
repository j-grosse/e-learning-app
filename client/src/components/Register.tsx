import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import NewProfile from './NewProfile';
import RegisterForm from './RegisterForm';

const Register = () => {
  const context = useContext(AuthContext);
  const errors = context.errors;

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    // userType: '',
    // company: '',
    firstName: '',
    lastName: '',
    address: '',
    zipcode: '',
    city: '',
    phone: '',
    image: '',
  });

  if (!context.loading && context.user) {
    return <Navigate to="/dashboard" />;
  }

  const [formStage, setFormStage] = useState('register');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    // await context.register(user);
    setFormStage('profile');
    setLoading(false);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Update the user state with profile information
    const updatedUser = {
      ...user,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      zipcode: user.zipcode,
      city: user.city,
      phone: user.phone,
      image: user.image,
    };

    await context.register(updatedUser);
    setFormStage('registered');
    setLoading(false);
    <Navigate to="/dashboard" />;
  };

  if (loading) return <p>Loading...</p>;

  // if (!context.loading && !context.user) {
  return (
    <>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-show="register-modal"
        data-modal-target="register-modal" // id of target element
        data-modal-toggle="register-modal"
        className="text-primary-800 bg-primary-300 hover:bg-primary-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        type="button"
      >
        Register
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="register-modal"
        tab-index="-1"
        aria-hidden="false"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg shadow dark:bg-gray-700 bg-gradient-to-t from-primary-50 to-primary-100">
            {/* close X button */}

            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="register-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            {/* <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Register
              </h3> */}
            {/* form start */}
            {formStage === 'register' && (
              <RegisterForm
                user={user}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleRegister}
              />
            )}

            {formStage === 'profile' && (
              <NewProfile
                user={user}
                errors={errors}
                handleChange={handleChange}
                handleProfileSubmit={handleProfileSubmit}
              />
            )}

            {/* form end */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
  // }
};

export default Register;
