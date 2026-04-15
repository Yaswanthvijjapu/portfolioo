import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { Activity } from "lucide-react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring for the bar animation
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // State to hold the numeric percentage for the HUD
  const [percent, setPercent] = useState(0);

  // Update the numeric state as the user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  return (
    <div className="fixed bottom-10 right-10 z-[100] hidden md:flex flex-col items-end gap-3 pointer-events-none">
      
      {/* 1. DATA READOUT (Percentage & Label) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 bg-background/80 backdrop-blur-md border border-black/10 dark:border-white/10 p-3 rounded-sm shadow-2xl"
      >
        <div className="flex flex-col items-end">
          <p className="text-[9px] font-mono text-blue-500 font-black tracking-[0.3em] uppercase leading-none mb-1">
            Sync_Progress
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black font-mono tabular-nums tracking-tighter">
              {percent < 10 ? `0${percent}` : percent}
            </span>
            <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">%</span>
          </div>
        </div>
        
        <div className="w-[1px] h-10 bg-black/10 dark:bg-white/10" />
        
        <div className="flex flex-col justify-center">
          <Activity className={`w-4 h-4 ${percent > 0 ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'} animate-pulse`} />
          <p className="text-[8px] font-mono text-gray-800/80 dark:text-gray-500 uppercase mt-1">Active</p>
        </div>
      </motion.div>

      {/* 2. SEGMENTED BIT-BAR (The Visual Indicator) */}
      <div className="relative w-64 h-2 bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 p-[2px] rounded-sm overflow-hidden">
        
        {/* The Background Grid (Segments) */}
        <div className="absolute inset-0 flex justify-between px-1 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-gray-300 dark:bg-white/10" />
          ))}
        </div>

        {/* The Fill (Animated Progress) */}
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* 3. TECHNICAL METADATA (Blueprint Style) */}
      <div className="flex gap-4">
        <p className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          Sector: {percent < 25 ? '01_HERO' : percent < 50 ? '02_STACK' : percent < 75 ? '03_WORKS' : '04_END'}
        </p>
        <div className="w-1 h-1 rounded-full bg-blue-500 self-center" />
        <p className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          Buffer: OK
        </p>
      </div>

    </div>
  );
};