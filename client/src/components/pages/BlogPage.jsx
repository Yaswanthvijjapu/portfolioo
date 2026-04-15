import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 flex justify-between items-center">
        <Link to="/" className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2 transition-colors">
          ← Back to Portfolio
        </Link>
        <span className="px-4 py-1.5 glass rounded-full text-sm font-mono text-gray-500 dark:text-gray-500">April 29, 2025</span>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-foreground">
          What if the Browser Becomes the OS? <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Exploring the Future of Computing.
          </span>
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-12">
          {["Web Development", "PWAs", "WebAssembly", "Cloud Computing"].map((tag) => (
            <span key={tag} className="px-4 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-800/80 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-12">
        
        <div className="glass p-8 md:p-12 rounded-[2rem]">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg text-gray-800/80 dark:text-gray-300 leading-relaxed">
            The browser is no longer just a window to the internet. With cloud IDEs, PWAs, and WebAssembly, it's turning into a full-blown OS. The browser has evolved from a mere portal to a powerful computing environment, enabling everything from gaming to video editing within a tab.
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-2xl font-bold mb-4 relative z-10">Chromebooks: A Browser-First Reality</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-800/80 dark:text-gray-300 relative z-10 mb-6">
            <li>Chromebooks rely on cloud storage, apps, and minimal local installs.</li>
            <li>Tools like Figma and VS Code Web outperform native counterparts.</li>
          </ul>
          <blockquote className="border-l-4 border-blue-500 pl-6 text-xl italic font-medium text-foreground relative z-10">
            "When the browser becomes the runtime, the OS fades into the background."
          </blockquote>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2rem]">
          <h2 className="text-2xl font-bold mb-6">Technologies Driving the Shift</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-blue-500 mb-2">PWAs</h3>
              <p className="text-gray-800/80 dark:text-gray-400">Web apps with native-like performance and offline support.</p>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-purple-500 mb-2">WebAssembly</h3>
              <p className="text-gray-800/80 dark:text-gray-400">Near-native execution speeds directly inside the browser.</p>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-pink-500 mb-2">Cloud IDEs</h3>
              <p className="text-gray-800/80 dark:text-gray-400">Develop anywhere using Replit, Codespaces, and StackBlitz.</p>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-green-500 mb-2">Edge Computing</h3>
              <p className="text-gray-800/80 dark:text-gray-400">Fast, secure rendering globally close to the user.</p>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};