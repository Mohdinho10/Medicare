/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function ProtectedRoutes({ children, allowedRoles }) {
  const { user } = useUser();

  const isAllowed = allowedRoles.includes(user?.role);
  const accessibleRoute =
    user && isAllowed ? children : <Navigate to="/login" replace />;

  return accessibleRoute;
}

export default ProtectedRoutes;
