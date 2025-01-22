import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

interface User {
  _id: string;
  username: string;
  email: string;
  userType: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  phone?: string;
  zipcode?: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  errors: any;
  login: (user: any) => Promise<void>;
  register: (user: any) => Promise<void>;
  logout: (user: any) => Promise<void>;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  loading: true,
  errors: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const setState = (user: User | null, loading: boolean, errors: any) => {
    setUser(user);
    setLoading(loading);
    setErrors(errors);
  };

  const loadUserData = () => {
    axios
      .get('auth/currentUser')
      .then((res) => setState(res.data.user, false, null))
      .catch((e) => {
        setState(null, false, null);
        console.log(e.message);
      });
    }

  useEffect(() => {
    loadUserData();
  }, []);

  const login = async (user) => {
    setLoading(true);
    try {
      const res = await axios.post('auth/login', user);

      setState(res.data.user, false, null);
      console.log(
        '🚀 ~ file: AuthContext.jsx:40 ~ login ~ res.data.user:',
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
      console.log('🚀 ~ file: Auth.tsx:48 ~ register ~ user:', user);
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
      navigate('/');
      console.log(res.data.message);
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
