import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ className = "w-20 h-10" }) => {
  // We use the exact same easing and colors as your portfolio sections
  const transition = { duration: 2, ease: [0.16, 1, 0.3, 1] };

  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <svg 
        viewBox="0 0 140 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
      >
        {/* --- SYSTEM FRAME (The technical corner anchors) --- */}
        <path d="M2 12 V2 H12" stroke="#3b82f6" strokeWidth="1.5" />
        <path d="M128 2 H138 V12" stroke="#3b82f6" strokeWidth="1.5" />
        <path d="M138 38 V48 H128" stroke="#a855f7" strokeWidth="1.5" />
        <path d="M12 48 H2 V38" stroke="#a855f7" strokeWidth="1.5" />

        {/* --- THE 'Y' (Constructed from 3 segments) --- */}
        <g>
          {/* Left Branch */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...transition, delay: 0.2 }}
            d="M25 15 L40 28" 
            stroke="url(#blue-purple)" 
            strokeWidth="5" 
            strokeLinecap="square"
          />
          {/* Right Branch */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...transition, delay: 0.4 }}
            d="M55 15 L40 28" 
            stroke="url(#blue-purple)" 
            strokeWidth="5" 
            strokeLinecap="square"
          />
          {/* Stem */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...transition, delay: 0.6 }}
            d="M40 28 V42" 
            stroke="url(#blue-purple)" 
            strokeWidth="5" 
            strokeLinecap="square"
          />
        </g>

        {/* --- THE 'V' (Constructed from 2 segments) --- */}
        <g>
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...transition, delay: 0.8 }}
            d="M80 15 L100 42" 
            stroke="url(#blue-purple)" 
            strokeWidth="5" 
            strokeLinecap="square"
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...transition, delay: 1.0 }}
            d="M120 15 L100 42" 
            stroke="url(#blue-purple)" 
            strokeWidth="5" 
            strokeLinecap="square"
          />
        </g>

        {/* --- DATA BUS (The thin connection line) --- */}
        <motion.line 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          x1="55" y1="28" x2="80" y2="28" 
          stroke="#3b82f6" 
          strokeWidth="0.5" 
          strokeDasharray="2 2"
          opacity="0.5"
        />

        {/* --- METADATA LABELS --- */}
        <text x="135" y="8" fontSize="5" fontFamily="monospace" fill="#3b82f6" textAnchor="end" className="font-bold opacity-50 uppercase">Yaswanth_V</text>
        <text x="5" y="45" fontSize="5" fontFamily="monospace" fill="#a855f7" className="font-bold opacity-50 uppercase">Build_v4.0</text>

        <defs>
          <linearGradient id="blue-purple" x1="25" y1="15" x2="120" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};