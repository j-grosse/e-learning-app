import { createContext, useState, useEffect } from 'react';
import axios from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const setState = (user, loading, errors) => {
    setUser(user);
    setLoading(loading);
    setErrors(errors);
  };
  useEffect(() => {
    axios
      .get('auth/currentUser')
      .then((res) => setState(res.data.user, false, null))
      .catch((e) => {
        setState(null, false, null);
        console.log(e.message);
      });
  }, []);


  const login = async (user) => {
    setLoading(true);
    try {
      const res = await axios.post('auth/login', user);

      setState(res.data.user, false, null);
      console.log(
        '🚀 ~ file: Auth.jsx:40 ~ login ~ res.data.user:',
        res.data.user
      );
      navigate('/dashboard');
    } catch (error) {
      console.log(error.response);
      setState(null, false, error.response.data);
    }
  };

  const register = async (user) => {
    setLoading(true);
    try {
      const res = await axios.post('auth/register', user);
      console.log('🚀 ~ file: Auth.jsx:40 ~ register ~ user:', user);
      setState(res.data.user, false, null);
      navigate('/');
    } catch (error) {
      console.log(error.response);
      setState(null, false, error.response.data.errors);
    }
  };
  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post('auth/logout', {}); // res is in deed used. line is needed for successful logout
      setState(null, false, null);
      navigate("/");
      // window.location.reload();  //optional reload at logout
    } catch (error) {
      console.log(error.response);
      setState(null, false, error.response.errors);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, loading, errors, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
