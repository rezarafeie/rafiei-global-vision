
/**
 * This file contains type definitions for Supabase that will be used
 * across all Rafiei Group projects when implementing the shared authentication system.
 * 
 * These types will be expanded once we connect to Supabase.
 */

// Basic user profile type that will be shared across all projects
export type UserProfile = {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
  last_sign_in?: string;
};

// Common auth state type
export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: UserProfile | null;
};

// Product-specific permissions
export type UserPermissions = {
  product_id: string;
  role: 'admin' | 'member' | 'viewer';
  features: string[];
};

// Full user with permissions
export type UserWithPermissions = UserProfile & {
  permissions: UserPermissions[];
};

// This will be expanded once we connect to Supabase
export type SupabaseConfig = {
  url: string;
  anonKey: string;
  authRedirectUrl: string;
};
