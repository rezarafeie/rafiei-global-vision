
import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/constants/brand';

type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Hook for responsive design that will be consistent across all projects
 * @param breakpoint - The breakpoint to check against
 * @returns boolean indicating if the current viewport is at least as wide as the breakpoint
 */
export function useMediaQuery(breakpoint: BreakpointKey): boolean {
  const query = `(min-width: ${BREAKPOINTS[breakpoint]}px)`;
  
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query));
    }
    
    const matchMedia = window.matchMedia(query);
    
    // Initial check
    handleChange();
    
    // Listen for changes
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }
    
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}
