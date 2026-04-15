import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Globe } from "lucide-react";
import { Button } from "../ui/Button";
import { PORTFOLIO_DATA } from "../../portfolioData";

export const Hero = () => {
  const { name, role, description } = PORTFOLIO_DATA.hero;
  const { socials } = PORTFOLIO_DATA;

  // Split name for staggered technical animation
  const nameArray = name.split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      
      {/* 1. THE ARCHITECTURAL GRID (Technical Developer Background) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle SVG Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
        
        {/* Horizontal & Vertical Axis Lines */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        
        {/* Metadata Floating Labels (Top Left/Bottom Right) */}
        <div className="absolute top-32 left-10 hidden xl:block">
          <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-[0.5em] rotate-90 origin-left">
            System.v2026.Build
          </p>
        </div>
        <div className="absolute bottom-10 right-10 hidden xl:block text-right">
          <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-[0.5em]">
            Loc_Ind_Lat_17.38
          </p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        
        {/* 2. THE STATUS BAR (Technical Badge) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="px-4 py-1.5 rounded-sm border border-blue-500/30 bg-blue-500/5 backdrop-blur-md">
            <span className="text-[10px] font-mono font-bold text-blue-500 tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              STATUS: READY_TO_CODE
            </span>
          </div>
          <div className="hidden sm:block h-[1px] w-12 bg-gray-300 dark:bg-white/10" />
          <p className="hidden sm:block text-[10px] font-mono text-gray-800/80 dark:text-gray-500 tracking-widest uppercase">
            Uptime: 99.9%
          </p>
        </motion.div>

        {/* 3. THE CENTERPIECE (Bold Engineering Typography) */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-10 -left-10 text-6xl font-black text-black/5 dark:text-gray-500/5 select-none"
          >
            &lt;DEV&gt;
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-center">
            {name.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block mr-4 last:mr-0">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (wordIdx * 5 + charIdx) * 0.05,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="inline-block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xl md:text-2xl font-mono text-blue-500 font-bold mb-6 tracking-tight uppercase">
            {role.replace("|", " // ")}
          </h2>
          
          <p className="max-w-2xl text-center text-gray-800/80 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-12 border-l-2 border-blue-500/20 pl-6">
            {description}
          </p>

          {/* 4. THE ACTION COMMANDS (Functional Buttons) */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <Button 
              onClick={() => document.getElementById('projects').scrollIntoView({behavior: "smooth"})}
              className="bg-black dark:bg-white text-white dark:text-black rounded-sm px-10 py-5 group"
            >
              INIT_WORKSPACE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex gap-3">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-4 border border-black/10 dark:border-white/10 hover:border-blue-500 hover:text-blue-500 transition-all rounded-sm bg-background"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 5. THE TECHNICAL FOOTER (Stats/Stacks) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/10 dark:border-white/10 pt-10"
        >
          {[
            { label: "ENGINE", icon: Cpu, val: "MERN" },
            { label: "RUNTIME", icon: Terminal, val: "Node.JS" },
            { label: "REGION", icon: Globe, val: "Global" },
            { label: "OBJECTIVE", icon: Globe, val: "Solutions" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 text-blue-500">
                <stat.icon className="w-3 h-3" />
                <span className="text-[10px] font-mono font-black tracking-widest">{stat.label}</span>
              </div>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-300">{stat.val}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};