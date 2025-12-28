"use client"
import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Page Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Subtle Professional Grid Overlay */}
      {/* Increased opacity from 0.08 to 0.15 for better visibility */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id="grid" 
              width="60" 
              height="60" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 60 0 L 0 0 0 60" 
                fill="none" 
                stroke="#0b162c" 
                strokeWidth="1.5" /* Slightly thicker lines */
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Directional Mask: 
          Moving the 'transparent' center to the top-left (0% 0%) 
          forces the 'white' (visibility) toward the bottom-right.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,transparent_0%,white_100%)] opacity-90" />
    </div>
  );
};

export default GridBackground;