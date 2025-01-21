import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Navigate, NavLink } from 'react-router-dom';

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   email: '',
  //   password: '',
  // });

  const handleClick = () => {
    navigate('/login');
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('CONTEXT', context);
  //   context.login(user);
  //   <Navigate to="/dashboard" />;
  // };

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
        className="px-5 hover:text-foreground dark:hover:text-background"
        type="button"
        onClick={handleClick}
      >
        Login
      </button>
    </>
  );
  // }
};

export default Login;
