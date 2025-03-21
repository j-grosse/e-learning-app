import { NavLink } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const RegisterForm = ({ user, errors, handleChange, handleSubmit }) => {
  const inputStyle =
    'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const labelStyle = 'block text-sm mb-2';

  return (
    <section className="bg-background dark:bg-gray-900 rounded-lg py-2">
      <div className="flex flex-col items-center px-6 py-8 mx-auto">
        <div className="w-full bg-background rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-t from-primary-50 to-primary-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
            </h1>

            {errors?.username && (
              <p className="text-danger">{errors?.username.message}</p>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className={labelStyle}>
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  value={user.username}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="username"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={labelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email3"
                  value={user.email}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className={labelStyle}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password0"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                  minLength={8}
                  title="Password should contain numbers and letters and be 8 characters long"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className={labelStyle}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                  minLength={8}
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
                  Next
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
};

export default RegisterForm;
