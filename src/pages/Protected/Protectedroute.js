import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const user = localStorage.getItem('user');
  return !!user;
};

export const ProtectedRoutes = () => {
  const isAuthenticated = useAuth();

  if (isAuthenticated) {
    return <Outlet />;
  }

  // Redirect to login if not authenticated
  return <Navigate to="/login" />;
};

export const PublicRoutes = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Outlet />;
  }

  // Redirect to dashboard if authenticated
  return <Navigate to="/dashboard" />;
};
