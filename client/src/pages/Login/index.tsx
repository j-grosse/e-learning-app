import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const errors = context.errors;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: 'c@paw.com',
    password: '12345678',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CONTEXT', context);
    context.login(user);
    setLoading(false);
    navigate('/dashboard/course');
  };

  if (loading) return <p>Loading...</p>;

  if (!context.loading && context.user) {
    navigate('/dashboard/course');
  }

  // if (!context.loading && !context.user) {
  return (
    <>
      <LoginForm
        user={user}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
  // }
};

export default Login;
