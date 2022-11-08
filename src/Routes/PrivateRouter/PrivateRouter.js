import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    );
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRouter;
