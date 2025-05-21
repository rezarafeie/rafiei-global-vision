
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthState, UserProfile } from '@/lib/supabase-types';

// This is a placeholder AuthContext that will be replaced with Supabase auth
// once we implement the shared authentication system

type AuthContextType = {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, fullName: string) => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [authState, setAuthState] = useState<AuthState>({
    isLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // This will be replaced with actual Supabase auth initialization
  useEffect(() => {
    // Simulating auth check
    const checkAuth = async () => {
      setIsLoading(true);
      // This will be replaced with Supabase auth check
      const user = localStorage.getItem('user');
      
      if (user) {
        setAuthState({
          isLoading: false,
          isAuthenticated: true,
          user: JSON.parse(user) as UserProfile,
        });
      } else {
        setAuthState({
          isLoading: false,
          isAuthenticated: false,
          user: null,
        });
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);
  
  // Placeholder auth functions to be replaced with Supabase
  const login = async (email: string, password: string) => {
    // This will be replaced with Supabase auth
    console.log('Login with:', email, password);
  };
  
  const logout = async () => {
    // This will be replaced with Supabase auth
    localStorage.removeItem('user');
    setAuthState({
      isLoading: false,
      isAuthenticated: false,
      user: null,
    });
  };
  
  const register = async (email: string, password: string, fullName: string) => {
    // This will be replaced with Supabase auth
    console.log('Register with:', email, password, fullName);
  };
  
  return (
    <AuthContext.Provider value={{ authState, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
