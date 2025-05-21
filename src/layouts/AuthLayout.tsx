
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

/**
 * AuthLayout will handle authenticated routes
 * Currently it just renders the outlet, but will be enhanced with auth checks
 * once we implement the shared authentication system
 */
const AuthLayout = () => {
  // This will be replaced with actual auth check once we implement Supabase
  const isAuthenticated = false;
  
  // For now, redirect to home if not authenticated
  // This will be replaced with proper auth logic
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
