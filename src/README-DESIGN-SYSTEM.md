
# Rafiei Group Design System

This design system is used across all Rafiei Group products to maintain consistency in UI, UX, and branding.

## Core Components

### Shared Constants

Brand-related constants are stored in `src/constants/brand.ts`. These include:

- Brand colors
- Typography settings
- Product information
- Company details
- Common breakpoints
- Z-index layers

### Common Components

- `ProductCard`: A standardized component for displaying products across all Rafiei applications
- `ProductGrid`: A grid layout for displaying multiple products
- `SectionTitle`: Consistent section titles with optional subtitles
- Layout components (`Layout.tsx`, `MainLayout.tsx`, `AuthLayout.tsx`)

### Shared Hooks

- `useMediaQuery`: For consistent responsive design
- `useAuth`: For shared authentication (to be implemented with Supabase)

## Implementing in Other Projects

1. Copy the core components, hooks, and constants to each project
2. Maintain the same structure and naming conventions
3. Keep file paths consistent (`@/components/`, `@/hooks/`, etc.)

## Authentication (Coming Soon)

Authentication will be implemented using Supabase to allow shared user accounts across all Rafiei projects.

### Implementation Plan

1. Connect all projects to the same Supabase instance
2. Use the same authentication flows and user tables
3. Share session cookies across subdomains
4. Implement proper CORS settings for cross-domain requests

### Types

Shared types for authentication and user profiles are defined in `src/lib/supabase-types.ts`.

## Next Steps

1. Connect to Supabase using Lovable's native integration
2. Complete the AuthContext implementation with Supabase
3. Create shared user tables and RLS policies
4. Implement cross-domain authentication
