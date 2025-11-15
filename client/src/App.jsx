import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AuthCallbackPage from './pages/AuthCallbackPage';

import ProtectedRoute from './components/ProtectedRoute';

const useAuth = () => {
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};

function App() {
  const isAuth = useAuth();

  return (
    <div>
      <Routes>
        <Route 
          path="/login" 
          element={isAuth ? <Navigate to="/dashboard" /> : <LoginPage />} 
        />
        <Route path="/auth-success" element={<AuthCallbackPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/" 
          element={isAuth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />
      </Routes>
    </div>
  );
}

export default App;