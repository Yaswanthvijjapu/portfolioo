import { useState, useEffect } from "react";
import { Moon, Sun, Terminal as TerminalIcon, Cpu, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Layouts
import { CustomCursor } from "./components/layout/CustomCursor";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { CommandPalette } from "./components/layout/CommandPalette";

// Sections
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

import { PORTFOLIO_DATA } from "./portfolioData";

import { Logo } from "./components/ui/Logo";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [booting, setBooting] = useState(true);

  // Global Dark Mode Handler
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  // System Boot Sequence Effect
  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. THE SYSTEM BOOT OVERLAY */}
      <AnimatePresence>
        {booting && (
          <motion.div 
            exit={{ opacity: 0, filter: "blur(20px)" }}
            className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center font-mono p-6"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%", maxWidth: "200px" }}
              className="h-1 bg-blue-500 mb-4"
            />
            <p className="text-blue-500 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] animate-pulse uppercase text-center">
              Initializing_System_Registry...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      <CommandPalette isOpen={cmdOpen} setIsOpen={setCmdOpen} />

      {/* 2. PERIMETER METADATA (Technical HUD Decoration) */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-20 sm:opacity-30">
        <div className="absolute top-20 left-4 sm:top-10 sm:left-10 hidden md:block">
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 dark:text-gray-500 uppercase tracking-widest rotate-90 origin-left">
            <Cpu className="w-3 h-3 -rotate-90" /> <span>Core.Node_v20.x</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-4 sm:left-10 hidden md:block">
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 dark:text-gray-500 uppercase tracking-widest rotate-90 origin-left">
            <ShieldCheck className="w-3 h-3 -rotate-90" /> <span>Encryp.AES_256</span>
          </div>
        </div>
      </div>

      {/* 3. SYSTEM CONTROL BAR (The Responsive Navigation) */}
      <nav className="fixed top-0 left-0 w-full z-40 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center border-b border-black/10 dark:border-white/5 bg-background/80 backdrop-blur-md">
        
        {/* Brand / Logo Module */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 sm:w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center text-white font-black text-lg sm:text-xl shrink-0">
            {PORTFOLIO_DATA.hero.name.charAt(0)}
          </div>
          <div className="hidden lg:block">
            <p className="text-[9px] font-mono font-bold text-blue-500 leading-none mb-1 uppercase tracking-tighter">System_Registry</p>
            <p className="font-black text-sm tracking-tighter uppercase truncate max-w-[150px]">
              {PORTFOLIO_DATA.hero.name}
            </p>
          </div>
        </div>

        {/* Command Center & Logic Controls */}
        <div className="flex items-center gap-2 sm:gap-4 font-mono">
          
          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden md:flex gap-1">
            {[
              { label: 'SKILLS', id: 'skills' },
              { label: 'PROJECTS', id: 'projects' },
              { label: 'MILESTONES', id: 'experience' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 text-[10px] font-bold text-gray-800/80 dark:text-gray-400 hover:text-blue-500 hover:bg-blue-500/5 transition-all rounded-sm uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 border-l border-black/10 dark:border-white/10 pl-2 sm:pl-6">
            <button 
              onClick={() => setCmdOpen(true)}
              className="flex items-center gap-2 px-2.5 py-2 bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-sm hover:border-blue-500 transition-colors group"
            >
              <TerminalIcon className="w-4 h-4 text-blue-500" />
              <span className="hidden lg:block text-[10px] font-bold uppercase text-gray-800/80 dark:text-gray-400 group-hover:text-blue-500">Terminal</span>
              <kbd className="hidden xl:block px-1.5 py-0.5 bg-black/10 dark:bg-white/10 rounded text-[9px] font-mono">⌘K</kbd>
            </button>

            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 sm:p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-sm hover:scale-110 transition-transform flex items-center justify-center"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 4. MAIN REGISTRY CONTENT */}
      <main className="relative z-10 w-full pt-16">
        <Hero />
        
        {/* Horizontal Divider with Technical Specs */}
        <div className="w-full h-px bg-black/10 dark:bg-white/5 flex justify-center items-center px-4">
          <div className="px-2 sm:px-4 bg-background text-[8px] sm:text-[9px] font-mono text-gray-800/80 dark:text-gray-400 uppercase tracking-[0.3em] sm:tracking-[0.5em] whitespace-nowrap">
            Data_Buffer_Break
          </div>
        </div>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* 5. SYSTEM FOOTER */}
      <footer className="py-8 sm:py-12 border-t border-black/10 dark:border-white/5 flex flex-col items-center gap-4 sm:gap-6 px-6">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[9px] sm:text-[10px] font-mono text-gray-800/80 dark:text-gray-500 uppercase tracking-widest">
          <span>Latency: 24ms</span>
          <span className="hidden xs:inline">Status: Optimized</span>
          <span>Build: v4.0.2</span>
        </div>
        <div className="text-[9px] sm:text-[10px] font-mono text-gray-800/80 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} // ROOT_ACCESS_GRANTED // DESIGN_BY_YASWANTH
        </div>
      </footer>
    </div>
  );
}

export default App;