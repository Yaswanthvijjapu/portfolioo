import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../../portfolioData";
import { Code, Server, Wrench, Activity, Binary } from "lucide-react";

const SkillNode = ({ name, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -5, color: "#3b82f6" }}
    className="relative group px-3 py-2 border border-black/10 dark:border-white/10 bg-background/50 backdrop-blur-sm rounded-sm overflow-hidden"
  >
    <span className="absolute -right-1 -top-1 text-[8px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">
      0x{index.toString(16).toUpperCase()}
    </span>
    <span className="text-[10px] lg:text-xs font-mono font-bold uppercase tracking-wider relative z-10 block truncate">
      {name}
    </span>
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </motion.div>
);

// ── MOBILE: accordion row ──────────────────────────────────
const MobilePartition = ({ category, items, icon: Icon, isActive, onToggle, index }) => (
  <div className="border-b border-black/10 dark:border-white/5 last:border-b-0">
    {/* Header row — tap to expand/collapse */}
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-3 px-5 py-4 transition-colors duration-300 ${
        isActive ? "text-blue-500" : "text-gray-800/80 dark:text-gray-400"
      }`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-xs font-mono font-black uppercase tracking-[0.3em] flex-1 text-left">
        {category.replace(" & ", "_")}
      </span>
      {/* Active indicator bar */}
      <div className="flex gap-[3px] items-center">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className={`h-3 w-[2px] rounded-full transition-all duration-300 ${
              isActive
                ? i === 1 ? "bg-blue-500 h-4" : "bg-blue-400"
                : "bg-gray-300 dark:bg-white/20"
            }`}
          />
        ))}
      </div>
      <motion.span
        animate={{ rotate: isActive ? 90 : 0 }}
        transition={{ duration: 0.25 }}
        className="text-sm font-mono ml-1"
      >
        ›
      </motion.span>
    </button>

    {/* Expanded content */}
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-6 pt-2">
            {/* Module label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[9px] font-mono text-blue-500 font-bold tracking-widest uppercase">
                System_Module_{index + 1}
              </span>
              <div className="h-[1px] flex-1 bg-blue-500/20" />
            </div>

            {/* 2-column skill grid */}
            <div className="grid grid-cols-2 gap-2">
              {items.map((item, i) => (
                <SkillNode key={item} name={item} index={i} />
              ))}
            </div>

            {/* Footer metadata */}
            <div className="mt-5 pt-4 border-t border-black/10 dark:border-white/5 flex justify-between items-end">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-500" />
                  <span className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase">Latency: 0ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Binary className="w-3 h-3 text-blue-500" />
                  <span className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase">Integrity: Verified</span>
                </div>
              </div>
              <span className="text-[28px] font-black text-black/5 dark:text-gray-500/10 select-none">
                MOD_0{index + 1}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ── DESKTOP: original horizontal expanding partition ───────
const DesktopPartition = ({ category, items, icon: Icon, isActive, onHover, index }) => (
  <motion.div
    onMouseEnter={onHover}
    animate={{
      flex: isActive ? 4 : 1,
      backgroundColor: isActive ? "rgba(59, 130, 246, 0.03)" : "rgba(0,0,0,0)"
    }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="relative min-h-[500px] border-r border-black/10 dark:border-white/5 overflow-hidden group"
  >
    {/* Vertical strip */}
    <div className={`absolute top-0 left-0 h-full w-16 flex flex-col items-center py-10 transition-colors duration-500 ${isActive ? "text-blue-500" : "text-gray-800/80 dark:text-gray-400"}`}>
      <Icon className="w-6 h-6 mb-8" />
      <p className="writing-mode-vertical text-xs font-mono font-black uppercase tracking-[0.5em] whitespace-nowrap">
        {category.replace(" & ", "_")}
      </p>
    </div>

    {/* Expanded content */}
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="ml-16 p-10 h-full flex flex-col"
        >
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[10px] font-mono text-blue-500 font-bold tracking-widest uppercase">
                System_Module_{index + 1}
              </span>
              <div className="h-[1px] flex-1 bg-blue-500/20" />
            </div>
            <h3 className="text-4xl font-black tracking-tighter uppercase">{category}</h3>
          </div>

          {/* SVG circuit lines */}
          <div className="relative flex-1">
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <motion.path
                d="M 20 20 L 100 20 L 100 150 L 200 150"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            </svg>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {items.map((item, i) => (
                <SkillNode key={item} name={item} index={i} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-black/10 dark:border-white/5 flex justify-between items-end">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-green-500" />
                <span className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase">Latency: 0ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Binary className="w-3 h-3 text-blue-500" />
                <span className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase">Integrity: Verified</span>
              </div>
            </div>
            <span className="text-[40px] font-black text-black/5 dark:text-gray-500/10 select-none">MOD_0{index + 1}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {!isActive && (
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    )}
  </motion.div>
);

// ── MAIN COMPONENT ─────────────────────────────────────────
export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { title: "Frontend", icon: Code },
    { title: "Backend & DB", icon: Server },
    { title: "Languages & Tools", icon: Wrench },
  ];

  const getItems = (title) =>
    PORTFOLIO_DATA.skills.find(
      s => s.category === title || s.category.includes(title.split(" ")[0])
    )?.items || [];

  return (
    <section id="skills" className="py-20 lg:py-32 px-4 lg:px-6 container mx-auto relative bg-background overflow-hidden">

      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 lg:mb-20 gap-8">
        <div className="border-l-4 border-blue-500 pl-6 lg:pl-8 text-center md:text-left mx-auto md:mx-0">
          <p className="text-[10px] font-mono text-blue-500 font-black tracking-[0.5em] uppercase mb-2">
            Infrastructure_Stack_v4.0
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none">
            Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Schematics.
            </span>
          </h2>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs font-mono text-gray-800/80 dark:text-gray-500 uppercase tracking-widest">Select_Partition_To_View</p>
          <div className="flex gap-1 justify-end mt-2">
            {[0, 1, 2].map(i => (
              <div key={i} className={`w-8 h-1 transition-colors ${activeTab === i ? "bg-blue-500" : "bg-black/10 dark:bg-white/10"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE: accordion (flex-col rows) — hidden on lg+ ── */}
      <div className="lg:hidden max-w-7xl mx-auto border border-black/10 dark:border-white/5 rounded-sm bg-gray-900/[0.02] dark:bg-white/[0.02] backdrop-blur-md overflow-hidden">
        {categories.map((cat, idx) => (
          <MobilePartition
            key={cat.title}
            index={idx}
            category={cat.title}
            icon={cat.icon}
            items={getItems(cat.title)}
            isActive={activeTab === idx}
            onToggle={() => setActiveTab(activeTab === idx ? -1 : idx)}
          />
        ))}
      </div>

      {/* ── DESKTOP: original horizontal partitions — hidden on mobile ── */}
      <div className="hidden lg:flex max-w-7xl mx-auto border border-black/10 dark:border-white/5 rounded-sm bg-gray-900/[0.02] dark:bg-white/[0.02] backdrop-blur-md overflow-hidden">
        {categories.map((cat, idx) => (
          <DesktopPartition
            key={cat.title}
            index={idx}
            category={cat.title}
            icon={cat.icon}
            items={getItems(cat.title)}
            isActive={activeTab === idx}
            onHover={() => setActiveTab(idx)}
          />
        ))}
      </div>

      {/* Footer Metadata */}
      <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[9px] font-mono text-gray-800/80 dark:text-gray-500 uppercase tracking-[0.3em]">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
          <span>Core_Type: MERN_Architect</span>
          <span>Last_Sync: {new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Connection: Encrypted</span>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};