'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import API_BASE_URL from '@/utils/config';

interface User {
  id: string;
  email: string;
  // add other user fields if necessary
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      throw new Error('Login failed');
    }
  };

  const signup = async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      throw new Error('Signup failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const forgotPassword = async (email: string) => {
    const response = await fetch(`${API_BASE_URL}/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error('Failed to send reset password email');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user, // current logged in user
        login, // function to log in
        signup, // function to sign up
        logout, // function to log out
        forgotPassword, // function to send reset password email
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
