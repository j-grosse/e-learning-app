import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { useNavigate, Navigate, NavLink } from 'react-router-dom';

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleClick = () => {
      navigate('/login');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CONTEXT', context);
    context.login(user);
    <Navigate to="/dashboard" />;
  };

  if (!context.loading && context.user) {
    return <Navigate to="/dashboard" />;
  }
  
  // if (!context.loading && !context.user) {
    return (
      <>
        {/* <!-- Modal toggle --> */}
        <button
          data-modal-show="authentication-modal"
          data-modal-target="authentication-modal" // id of target element
          data-modal-toggle="authentication-modal"
          className="block mx-3 text-primary-800 bg-primary-200 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"
          type="button"
          onClick={handleClick}
        >
          Login
        </button>

        {/* <!-- Main modal --> */}
        <div
          id="authentication-modal"
          tab-index="-1"
          aria-hidden="false"
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative  rounded-lg shadow dark:bg-gray-700 bg-gradient-to-t from-primary-50 to-primary-100">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white shadow-lg"
                data-modal-hide="authentication-modal"
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
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Log in
                </h3>

                {/* form start */}

                <form
                  className="space-y-6"
                  action="/dashboard"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Remember me checkbox */}

                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm text-primary-600 hover:underline dark:text-primary-500">
                      <NavLink to="/">Lost Password?</NavLink>
                    </div>
                  </div>
                  <button
                    type="submit"                     
                    className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"
                  >
                    Log in
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{' '}
                    <div className="text-primary-600 hover:underline dark:text-primary-500">
                      <NavLink to="/register">Create account</NavLink>
                    </div>
                  </div>
                </form>

                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  // }
};

export default Login;
