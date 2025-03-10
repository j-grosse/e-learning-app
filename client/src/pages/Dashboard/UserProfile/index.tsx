import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from '../../../axiosInstance';
import { Button } from '@/components/ui/button';

const UserProfile = () => {
  // Where user could change information in user dashboard
  const { user } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(user);
  const [message, setMessage] = useState('');

  const inputStyle =
    'bg-background border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

  useEffect(() => {
    if (user) {
      setUserProfile(user);
    }
  }, [userProfile]);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(
      '🚀 ~ file: UserProfile.tsx:19 ~ handleUpdate ~ userProfile:',
      userProfile
    );
    axios
      .put(`/auth/${user._id}`, userProfile)
      .then((res) => res)
      .catch((e) => e.response?.data?.message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
    console.log(
      '🚀 ~ file: UserProfile.tsx:32 ~ handleChange ~ userProfile:',
      userProfile
    );
  };

  const handleFocus = () => {
    setMessage('Field cannot be changed for demo user.');
    setTimeout(() => {
      setMessage('');
    }, 1500);
  };

  {
    message && <p className="text-red-500">{message}</p>;
  }
  return (
    <>
      <section>
        <div className="max-w-2xl p-3 mb-3">
          <h2>Profile</h2>
          {message ? <p className="text-red-500">{message}</p> : <br />}
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="Username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  defaultValue={userProfile.username}
                  onChange={handleChange}
                  type="text"
                  name="Username"
                  id="Username"
                  className={inputStyle}
                  required
                  onFocus={handleFocus}
                  readOnly
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
                  defaultValue={userProfile.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="email"
                  className={inputStyle}
                  required
                  onFocus={handleFocus}
                  readOnly
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
                  defaultValue={userProfile.firstName}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={inputStyle}
                  placeholder={user.firstName}
                  required
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
                  defaultValue={userProfile.lastName}
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={inputStyle}
                  placeholder={user.lastName}
                  required
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
                  defaultValue={userProfile.address}
                  onChange={handleChange}
                  type="text"
                  name="address"
                  id="address"
                  className={inputStyle}
                  placeholder={user.address}
                  required
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
                  defaultValue={userProfile.city}
                  onChange={handleChange}
                  type="text"
                  name="city"
                  id="city"
                  className={inputStyle}
                  placeholder={user.city}
                  required
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
                  defaultValue={userProfile.phone}
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  id="phone"
                  className={inputStyle}
                  placeholder={user.phone}
                  required
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
                  defaultValue={userProfile.zipcode}
                  onChange={handleChange}
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  className={inputStyle}
                  placeholder={user.zipcode}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-12 space-6 gap-4">
              <Button type="submit" variant="submitFull" onClick={handleUpdate}>
                Update Profile
              </Button>

              <Button
                type="submit"
                variant="submitFull"
                className="border-red-500 dark:border-red-500 text-red-500 dark:text-red-500 dark:hover:text-white hover:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-900 shadow-lg"
                onClick={handleUpdate}
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
              </Button>
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

export default UserProfile;
