// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!Cookies.get('token'); // Check if token exists in cookies

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
