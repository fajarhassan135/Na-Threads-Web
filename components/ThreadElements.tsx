import React from 'react';

// Simplified Thread Pattern Background Component (dimmed)
export const ThreadPatternBackground = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-5 ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0">
      <defs>
        <pattern id="threadPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M0,30 Q15,15 30,30 Q45,45 60,30" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#threadPattern)" />
    </svg>
  </div>
);

// Logo Component
export const Logo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <div className={`relative ${className}`}>
    <svg width={size} height={size} viewBox="0 0 100 100" className="relative z-10">
      {/* Globe/Circle background */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="3"/>
      
      {/* Globe grid lines */}
      <path d="M50,5 Q50,25 50,50 Q50,75 50,95" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
      <path d="M5,50 Q25,50 50,50 Q75,50 95,50" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
      <path d="M50,5 Q25,25 50,50 Q75,75 50,95" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M50,5 Q75,25 50,50 Q25,75 50,95" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.7"/>
      
      {/* NA Text */}
      <text x="50" y="60" textAnchor="middle" fill="#D4AF37" fontSize="28" fontWeight="bold" fontFamily="serif">
        NA
      </text>
    </svg>
  </div>
);

// Simplified Thread Lines (dimmed)
export const ThreadLines = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-5 ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0">
      <path d="M0,100 Q200,50 400,100 Q600,150 800,100" stroke="#D4AF37" strokeWidth="1" fill="none" className="animate-pulse" />
      <path d="M0,200 Q300,150 600,200 Q700,250 800,200" stroke="#0C1C27" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
    </svg>
  </div>
);

// Clean Industrial Frame Component (simplified)
export const IndustrialFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Simple border */}
    <div className="border-2 border-slate-200 bg-white p-6 relative shadow-lg rounded-lg">
      {children}
    </div>
  </div>
);

// Simplified Thread Texture Overlay
export const ThreadTexture = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-5 ${className}`}>
    <div className="w-full h-full bg-gradient-to-br from-transparent via-[#D4AF37]/10 to-transparent"></div>
  </div>
);

// Simple Bobbin Shape Component (simplified for compatibility)
export const BobbinShape = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <div className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-[#D4AF37]/20 rounded-full ${className}`} />
);

// Simple Spinning Thread Component (simplified for compatibility)
export const SpinningThread = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/20 border-t-[#D4AF37] animate-spin"></div>
  </div>
);