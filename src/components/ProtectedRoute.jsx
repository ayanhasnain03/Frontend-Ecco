
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({isAuthenticated, children, adminRoute, isAdmin, redirect="/"}) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;
  if (adminRoute && !isAdmin) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
}

export default ProtectedRoute