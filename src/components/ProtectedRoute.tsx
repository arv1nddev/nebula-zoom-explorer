import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/" replace />; // redirect to login page
  return children;
};

export default ProtectedRoute;
