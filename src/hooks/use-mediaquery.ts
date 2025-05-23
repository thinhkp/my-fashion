"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  // Initialize with false and update after mount to avoid hydration issues
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return;
    
    // Create the media query
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);
    
    // Define the listener function
    const updateMatches = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    
    // Add event listener
    media.addEventListener("change", updateMatches);
    
    // Clean up
    return () => {
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);
  
  return matches;
}