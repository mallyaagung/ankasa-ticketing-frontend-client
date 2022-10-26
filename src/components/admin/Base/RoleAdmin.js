import React from "react";
import { Navigate } from "react-router-dom";
const roleAdmin = ({ children }) => {
  const level = localStorage.getItem("token");
  if (level === 2) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default roleAdmin;
