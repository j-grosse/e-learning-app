import { NavLink } from 'react-router-dom';
import { Button } from '../../components/ui/button';

// const LoginForm = ({ user, handleChange, handleSubmit }) => {
const LoginForm = ({ user, errors, handleChange, handleSubmit }) => {
  const inputStyle =
    'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const labelStyle = 'block text-sm mb-2';

  return (
    <section className="bg-gray-50 dark:bg-gray-900 rounded-lg py-2">
      <div className="flex flex-col items-center px-6 py-8 mx-auto">
        <div className="w-full bg-background rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg">
            <h1 className="font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>

            {errors?.username && (
              <p className="text-danger">{errors?.username.message}</p>
            )}

            <form
              className="space-y-6"
              // action="/dashboard"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="email" className={labelStyle}>
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email2"
                  className={inputStyle}
                  placeholder="name@company.com"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className={labelStyle}>
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password2"
                  placeholder="••••••••"
                  className={inputStyle}
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

                <div className="text-sm text-primary-500 hover:underline dark:text-foreground">
                  <NavLink to="/">Lost Password?</NavLink>
                </div>
              </div>
              <div className="text-center">
                <Button type="submit" variant="submitFull">
                  Log in
                </Button>
              </div>
              {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?
                    <div className="text-blue-700 hover:underline dark:text-blue-500">
                      <NavLink to="/register">Create account</NavLink>
                    </div>
                  </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
