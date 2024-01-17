import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);
  return <>{!loading && <>{user ? <Outlet /> : <Navigate to="/" />}</>}</>;
};

export default ProtectedRoute;
