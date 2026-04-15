import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PORTFOLIO_DATA } from "../../portfolioData";
import { ChevronRight, Target, Zap } from "lucide-react";

const AchievementModule = ({ exp, index }) => {
  const Icon = exp.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className={`relative w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-24 last:mb-0`}
    >
      {/* 1. THE DATA CONNECTOR (Visual Bridge) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-full px-20 pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-0 h-full bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>

      {/* 2. THE CONTENT MODULE */}
      <div className="w-full md:w-5/12 group">
        <div className="relative glass p-8 rounded-sm border border-black/10 dark:border-white/5 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
          
          {/* Corner Brackets (Blueprint Aesthetic) */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/30" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500/30" />

          {/* Module Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-sm">
                <Icon className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                LOG_ID: 00{index + 1}
              </span>
            </div>
            <span className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 text-blue-500 font-mono text-[10px] font-bold">
              {exp.year}
            </span>
          </div>

          <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:text-blue-500 transition-colors">
            {exp.role}
          </h3>
          <p className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-4 tracking-tighter uppercase">
            // {exp.company}
          </p>
          <p className="text-gray-800/80 dark:text-gray-400 text-sm leading-relaxed mb-6">
            {exp.description}
          </p>

          {/* Module Footer (Metadata) */}
          <div className="pt-4 border-t border-black/10 dark:border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <Zap className="w-3 h-3 text-yellow-500" />
              <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-tighter">Status: Verified</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Scanline Effect on Hover */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity bg-[linear-gradient(transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_2s_linear_infinite]" />
        </div>
      </div>

      {/* 3. THE VISUAL ANCHOR (Opposite Side) */}
      <div className="hidden md:flex w-2/12 justify-center z-10">
        <motion.div 
          whileHover={{ scale: 1.2, rotate: 90 }}
          className="w-12 h-12 rounded-sm border-2 border-blue-500/20 bg-background flex items-center justify-center group"
        >
          <Target className="w-5 h-5 text-blue-500/40 group-hover:text-blue-500 transition-colors" />
        </motion.div>
      </div>

      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="py-32 px-6 relative container mx-auto bg-background"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] dark:opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black tracking-tighter text-black dark:text-gray-500 select-none">
          REGISTRY
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8 border-l-4 border-blue-500 pl-8">
          <div>
            <p className="text-[10px] font-mono text-blue-500 font-black tracking-[0.5em] uppercase mb-2">
              Experience_Terminal_v4.0
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Milestone <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Protocols.
              </span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm text-gray-500 font-mono leading-relaxed">
              // Sequential log of professional achievements, competitive rankings, and technical growth.
            </p>
          </div>
        </div>

        {/* Central Vertical Timeline Line (Vite/Blueprint Style) */}
        <div className="absolute left-1/2 top-[400px] bottom-0 w-[1px] bg-blue-500/10 hidden md:block">
          <motion.div 
            style={{ scaleY: pathLength }}
            className="w-full h-full bg-blue-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        {/* Modules Wrapper */}
        <div className="relative">
          {PORTFOLIO_DATA.achievements.map((exp, index) => (
            <AchievementModule key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
      `}</style>
    </section>
  );
};