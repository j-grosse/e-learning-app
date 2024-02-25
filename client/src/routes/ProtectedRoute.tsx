import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);
  // Outlet is used to render the child routes and components based on the current route
  return <>{!loading && <>{user ? <Outlet /> : <Navigate to="/" />}</>}</>;
};

export default ProtectedRoute;
