import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Database, Box, Activity } from "lucide-react";
import { PORTFOLIO_DATA } from "../../portfolioData";

const ProjectEntry = ({ project, index, onHover, isHovered, isAnythingHovered }) => {
  return (
    <motion.div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group py-12 border-b border-black/10 dark:border-white/5 flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-500 ${
        isAnythingHovered && !isHovered ? "lg:opacity-10 lg:blur-sm" : "opacity-100"
      }`}
    >
      {/* 1. MODULE METADATA (Vertical sidebar for each project) */}
      <div className="absolute left-0 top-12 hidden xl:flex flex-col items-center gap-4 -translate-x-16">
        <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 rotate-90 origin-center tracking-[0.3em]">
          SEQ_00{index + 1}
        </span>
        <div className="w-[1px] h-12 bg-blue-500/20" />
      </div>

      {/* --- MOBILE VISUAL UPLINK (Corner Bracket Style) --- */}
      <div className="block lg:hidden mb-8 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 z-20" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 z-20" />
        <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl">
           <img 
            src={project.image} 
            className="w-full h-full object-cover transform scale-110 group-active:scale-100 transition-transform duration-700" 
            alt={project.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <Box className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] font-mono font-black text-white uppercase tracking-widest">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* --- CORE REGISTRY DATA --- */}
      <div className="z-10 cursor-pointer max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-sm">
            <span className="text-[9px] font-mono font-bold text-blue-500 tracking-tighter">
              LOG_TYPE: {project.category.toUpperCase()}
            </span>
          </div>
        </div>
        
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-none mb-6 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-mono leading-relaxed max-w-xl border-l-2 border-black/10 dark:border-white/10 pl-6 group-hover:border-blue-500 transition-colors">
          // {project.description}
        </p>
      </div>

      {/* --- TECH STACK & LINKS (Data Chips Style) --- */}
      <div className="mt-8 lg:mt-0 flex flex-col lg:items-end gap-8 z-10">
        <div className="flex flex-wrap lg:justify-end gap-2 max-w-xs">
          {project.tech.map((t) => (
            <span key={t} className="text-[9px] font-mono font-black px-3 py-1 bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800/80 dark:text-gray-300 uppercase tracking-tighter">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-10">
          <a href={project.github} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-[10px] font-mono font-black text-gray-800/80 dark:text-gray-400 hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">
            <Github className="w-4 h-4 transition-transform group-hover/link:-translate-y-1" /> Source_Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-[10px] font-mono font-black text-gray-800/80 dark:text-gray-400 hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">
            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-1" /> Live_Uplink
          </a>
        </div>
      </div>

      {/* Subtle Scanline on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity bg-[linear-gradient(transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_2s_linear_infinite]" />
    </motion.div>
  );
};

export const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? PORTFOLIO_DATA.projects : PORTFOLIO_DATA.projects.slice(0, 4);

  return (
    <section id="projects" className="py-32 px-6 container mx-auto relative min-h-screen bg-background">
      
      {/* --- BACKGROUND ARCHITECTURAL TEXT --- */}
      <div className="absolute top-40 right-10 text-[15rem] font-black text-black/5 dark:text-gray-500/5 pointer-events-none select-none -z-10 tracking-tighter rotate-90 origin-right">
        ARCHIVE
      </div>

      {/* --- DESKTOP VISUAL UPLINK (Portal with Metadata) --- */}
      <div className="fixed top-1/2 right-[8%] -translate-y-1/2 w-[35vw] h-[45vh] hidden lg:block pointer-events-none z-0">
        <AnimatePresence mode="wait">
          {activeIdx !== null && (
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full p-4 border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm rounded-sm"
            >
              {/* Technical Frame Overlays */}
              <div className="absolute top-0 left-0 w-full p-2 flex justify-between text-[8px] font-mono text-blue-500/50 uppercase tracking-widest">
                <span>Buffer_Stream: Active</span>
                <span>Coord: 17.38 / 78.48</span>
              </div>
              
                    <div className="relative w-full h-full overflow-hidden transition-all duration-700">
                <img src={PORTFOLIO_DATA.projects[activeIdx].image} className="w-full h-full object-cover" alt="preview" />
                {/* Visual Glitch/Scan Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
              </div>

              <div className="absolute bottom-0 right-0 p-2 text-[8px] font-mono text-blue-500/50 uppercase">
                Render_Mode: Hardware_Accel
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 mb-32 border-l-4 border-blue-500 pl-8">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-500 font-mono text-[10px] font-black tracking-[0.5em] uppercase mb-4">
          Archive_Registry_v4.0
        </motion.p>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-tight">
          Selected <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Deployments.</span>
        </h2>
      </div>

      {/* --- REGISTRY LIST --- */}
      <div className="relative z-10 flex flex-col mb-20">
        {displayedProjects.map((project, idx) => (
          <ProjectEntry 
            key={project.id} 
            project={project} 
            index={idx} 
            onHover={setActiveIdx}
            isHovered={activeIdx === idx}
            isAnythingHovered={activeIdx !== null}
          />
        ))}
      </div>

      {/* --- SYSTEM INITIALIZE BUTTON (View More) --- */}
      {!showAll && PORTFOLIO_DATA.projects.length > 4 && (
        <div className="flex justify-center md:justify-start">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAll(true)}
            className="group relative flex items-center gap-10 px-10 py-5 bg-foreground text-background font-black uppercase tracking-[0.3em] text-[10px] rounded-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              Expand_Full_Registry <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </div>
      )}

      <style jsx>{`
        @keyframes scan {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
      `}</style>
    </section>
  );
};