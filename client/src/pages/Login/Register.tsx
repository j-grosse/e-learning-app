import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import NewProfile from './NewProfile';
import RegisterForm from './RegisterForm';

const Register = () => {
  const context = useContext(AuthContext);
  const errors = context.errors;
  const navigate = useNavigate();

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
    navigate('/dashboard');
  };

  if (loading) return <p>Loading...</p>;

  // if (!context.loading && !context.user) {
  return (
    <>
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
    </>
  );
  // }
};

export default Register;
