import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Button = ({ children, variant = "primary", className, onClick, ...props }) => {
  // 1. BASE STYLE: Sharp corners, monospaced tracking, and hidden overflow for the shutter
  const baseStyle = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-[10px] font-black uppercase tracking-[0.3em] rounded-sm transition-all duration-300 outline-none overflow-hidden border";
  
  const variants = {
    // Primary: Solid Blueprint look
    primary: "bg-foreground text-background border-foreground shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    // Ghost: Bordered Technical look
    ghost: "bg-transparent text-foreground border-black/10 dark:border-white/10 hover:border-blue-500",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }} 
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      {/* 2. THE SHUTTER EFFECT: A background that fills from the bottom on hover */}
      <div className="absolute inset-0 z-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1]" />

      {/* 3. CORNER ANCHORS: Small technical brackets that appear on the vertices */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* 4. SCANLINE OVERLAY: Subtle technical lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[linear-gradient(transparent_0%,white_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_2s_linear_infinite]" />

      {/* 5. BUTTON CONTENT */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
        {children}
      </span>

      {/* CSS for the scanline animation */}
      <style jsx>{`
        @keyframes scan {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
      `}</style>
    </motion.button>
  );
};