import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Fixed Import
import { 
  Search, Home, Code, Mail, Briefcase, 
  Terminal, CornerDownLeft, Command, 
  Cpu, Hash, Shield
} from "lucide-react";

export const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setIsOpen]);

  const navigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const commands = [
    { icon: Home, label: "NAV_TO_ROOT", desc: "Jump to Hero Section", action: () => navigate("home") },
    { icon: Code, label: "FETCH_SKILLS", desc: "View Technical Registry", action: () => navigate("skills") },
    { icon: Briefcase, label: "LIST_PROJECTS", desc: "Open Deployment Archive", action: () => navigate("projects") },
    { icon: Mail, label: "INIT_SESSION", desc: "Establish Connection", action: () => navigate("contact") },
  ];

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-1000 flex items-start justify-center p-4 sm:p-20">
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-2xl bg-background/90 glass border border-blue-500/20 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500" />

            {/* Header */}
            <div className="flex items-center px-6 py-5 border-b border-black/10 dark:border-white/5 bg-black/5 dark:bg-white/5">
              <Terminal className="w-5 h-5 text-blue-500 mr-4" />
              <div className="flex-1 flex items-center">
                <span className="text-blue-500 font-mono text-sm mr-2 font-black tracking-widest uppercase">
                  Execute_&gt;
                </span>
                <input 
                  autoFocus 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="RUN_COMMAND_ID..." 
                  className="w-full bg-transparent outline-none text-foreground placeholder-gray-600 font-mono text-sm uppercase tracking-widest" 
                />
              </div>
            </div>

            {/* Command List */}
            <div className="max-h-[60vh] overflow-y-auto p-3">
              <p className="px-4 py-3 text-[10px] font-mono text-gray-800/80 dark:text-gray-500 font-black uppercase tracking-[0.4em]">
                Registry_Modules
              </p>
              <div className="space-y-1">
                {filtered.map((item, i) => (
                  <button 
                    key={i} 
                    onClick={item.action} 
                    className="w-full group flex items-center justify-between px-4 py-4 hover:bg-blue-500/10 rounded-sm transition-all border border-transparent hover:border-blue-500/30 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-black/5 dark:bg-white/5 rounded-sm group-hover:bg-blue-500/20 group-hover:text-blue-500 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-mono font-black text-foreground group-hover:text-blue-500 tracking-widest uppercase">
                          {item.label}
                        </p>
                        <p className="text-[10px] font-mono text-gray-800/80 dark:text-gray-500 uppercase tracking-tighter opacity-70">
                          // {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="hidden group-hover:flex items-center gap-2">
                      <span className="text-[9px] font-mono text-blue-500 uppercase font-bold tracking-widest">Invoke</span>
                      <CornerDownLeft className="w-3 h-3 text-blue-500" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-black/5 dark:bg-white/5 border-t border-black/10 dark:border-white/5 px-6 py-3 flex justify-between items-center">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-gray-800/80 dark:text-gray-500" />
                  <span className="text-[8px] font-mono text-gray-800/80 dark:text-gray-500 uppercase tracking-widest">Security: Active</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400 uppercase">esc to exit</span>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-black/5 dark:bg-white/5 rounded-sm border border-black/10 dark:border-white/10 text-[9px] font-mono">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_0%,#3b82f6_50%,transparent_100%)] bg-size-[100%_4px] animate-[scan_3s_linear_infinite]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};