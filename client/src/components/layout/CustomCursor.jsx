import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Detect theme dynamically
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkTheme(isDark);
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateMousePos = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractable = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('[role="button"]') ||
                            target.closest('input') ||
                            target.closest('textarea');
      setIsHovering(!!isInteractable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Theme Colors: Matches your Blueprint Theme
  const themeColor = isDarkTheme ? "#3b82f6" : "#2563eb"; // Blue 500 / Blue 600

  return (
    // Only show on Desktop
    <div className="hidden lg:block">
      
      {/* 1. COORDINATE READOUT (Trailing HUD Text) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 flex flex-col gap-0.5"
        animate={{
          x: mousePos.x + 20,
          y: mousePos.y + 20,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
      >
        <span className="text-[8px] font-mono font-black text-blue-500 uppercase tracking-tighter bg-background/50 backdrop-blur-sm px-1">
          X:{Math.round(mousePos.x)}
        </span>
        <span className="text-[8px] font-mono font-black text-blue-500 uppercase tracking-tighter bg-background/50 backdrop-blur-sm px-1">
          Y:{Math.round(mousePos.y)}
        </span>
      </motion.div>

      {/* 2. OUTER CORNER BRACKETS (Targeting HUD) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - (isHovering ? 25 : 15),
          y: mousePos.y - (isHovering ? 25 : 15),
          width: isHovering ? 50 : 30,
          height: isHovering ? 50 : 30,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Four L-Brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: themeColor }} />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" style={{ borderColor: themeColor }} />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" style={{ borderColor: themeColor }} />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: themeColor }} />
      </motion.div>

      {/* 3. CENTRAL CROSSHAIR DOT */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          x: mousePos.x - 2,
          y: mousePos.y - 2,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {/* Horizontal Axis Line */}
        <div className={`absolute h-[1px] bg-blue-500/30 transition-all duration-300 ${isHovering ? 'w-10' : 'w-4'}`} />
        {/* Vertical Axis Line */}
        <div className={`absolute w-[1px] bg-blue-500/30 transition-all duration-300 ${isHovering ? 'h-10' : 'h-4'}`} />
        
        {/* The Sharp Core Pixel */}
        <div 
          className="w-1.5 h-1.5 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
          style={{ backgroundColor: themeColor }} 
        />
      </motion.div>

      {/* 4. DATA BIT STREAM (Subtle micro-particles) */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 pointer-events-none z-[9997] border border-blue-500 rounded-sm"
            style={{ 
              x: mousePos.x - 15, 
              y: mousePos.y - 15, 
              width: 30, 
              height: 30 
            }}
          />
        )}
      </AnimatePresence>

    </div>
  );
};