import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Clock, Hash, Copy, CheckCircle2, Terminal, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../portfolioData";

export const Contact = () => {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Asia/Calcutta", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
      setTime(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    const email = "yaswanthvijjapu799@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 container mx-auto bg-background relative overflow-hidden">
      
      {/* BACKGROUND DATA STREAM (Subtle Tech Overlay) */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05] pointer-events-none font-mono text-[10px] leading-none overflow-hidden select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap mb-1">
            {`CONNECTING... PROTOCOL_ID_${Math.random().toString(16).slice(2, 10)} ... STATUS_OK ... `}
            {`PACKET_RECEIVED ... ENCRYPT_AES_256 ... `}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: PROTOCOL HUD */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-[10px] font-mono text-blue-500 font-black tracking-[0.4em] uppercase">
                Connection_Protocol_v1.0
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Session.
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:flex flex-col items-end text-right font-mono"
          >
            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs mb-1">
              <Clock className="w-3 h-3" /> <span>SERVER_TIME_IST</span>
            </div>
            <div className="text-2xl font-bold text-foreground tabular-nums tracking-widest">
              {time || "00:00:00"}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT HUB: CONTACT DATA TILES */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* EMAIL TILE */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-sm border border-black/10 dark:border-white/5 relative group cursor-pointer"
              onClick={handleCopyEmail}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </div>
              <div className="flex items-center gap-3 text-blue-500 mb-4 font-mono text-[10px] font-black uppercase tracking-widest">
                <Mail className="w-3 h-3" /> Primary_Link
              </div>
              <p className="text-lg font-bold truncate">yaswanthvijjapu799@gmail.com</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-2 font-mono italic">// Click to copy to clipboard</p>
            </motion.div>

            {/* LOCATION TILE */}
            <div className="glass p-6 rounded-sm border border-black/10 dark:border-white/5 relative flex flex-col justify-between">
              <div className="flex items-center gap-3 text-purple-500 mb-4 font-mono text-[10px] font-black uppercase tracking-widest">
                <Globe className="w-3 h-3" /> Host_Location
              </div>
              <div>
                <p className="text-xl font-bold">Andhra Pradesh, India</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-500 font-mono italic">Lat: 17.3850° N // Long: 78.4867° E</p>
              </div>
            </div>

            {/* SOCIAL TILES GRID */}
            <div className="sm:col-span-2 lg:col-span-1 grid grid-cols-3 gap-4">
              {PORTFOLIO_DATA.socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass p-6 rounded-sm border border-black/10 dark:border-white/5 flex flex-col items-center justify-center gap-3 hover:border-blue-500 transition-colors group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 group-hover:text-blue-500 transition-all" />
                  <span className="text-[8px] font-mono font-bold uppercase opacity-50 group-hover:opacity-100">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT HUB: TERMINAL FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-sm border border-black/10 dark:border-white/5 p-8 relative overflow-hidden h-full">
              
              {/* Terminal Header Decoration */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 dark:bg-white/5 border-b border-black/10 dark:border-white/5 flex items-center px-4 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="ml-4 text-[9px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">msg_encrypt_input.sh</span>
              </div>

              <form className="mt-8 space-y-8">
                
                {/* NAME FIELD */}
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2 text-blue-500">
                    <Hash className="w-3 h-3" />
                    <label className="text-[10px] font-mono font-black uppercase tracking-widest">User_Identity</label>
                  </div>
                  <input 
                    type="text" 
                    onFocus={() => setActiveInput('name')}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-transparent border-l-2 border-black/10 dark:border-white/10 px-4 py-2 outline-none focus:border-blue-500 font-mono text-sm transition-all"
                    placeholder="Enter your name..."
                  />
                  {activeInput === 'name' && (
                    <motion.div layoutId="cursor" className="absolute bottom-2 right-4 w-2 h-4 bg-blue-500 animate-pulse" />
                  )}
                </div>

                {/* EMAIL FIELD */}
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2 text-purple-500">
                    <Terminal className="w-3 h-3" />
                    <label className="text-[10px] font-mono font-black uppercase tracking-widest">Return_Address</label>
                  </div>
                  <input 
                    type="email" 
                    onFocus={() => setActiveInput('email')}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-transparent border-l-2 border-black/10 dark:border-white/10 px-4 py-2 outline-none focus:border-blue-500 font-mono text-sm transition-all"
                    placeholder="your@email.com"
                  />
                  {activeInput === 'email' && (
                    <motion.div layoutId="cursor" className="absolute bottom-2 right-4 w-2 h-4 bg-purple-500 animate-pulse" />
                  )}
                </div>

                {/* MESSAGE FIELD */}
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2 text-green-500">
                    <span className="text-[10px] font-mono font-black">&gt;_</span>
                    <label className="text-[10px] font-mono font-black uppercase tracking-widest">Packet_Payload</label>
                  </div>
                  <textarea 
                    rows="4" 
                    onFocus={() => setActiveInput('msg')}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-transparent border-l-2 border-black/10 dark:border-white/10 px-4 py-2 outline-none focus:border-blue-500 font-mono text-sm transition-all resize-none"
                    placeholder="Type your message here..."
                  />
                  {activeInput === 'msg' && (
                    <motion.div layoutId="cursor" className="absolute bottom-4 right-4 w-2 h-4 bg-green-500 animate-pulse" />
                  )}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full group relative flex items-center justify-between px-8 py-5 bg-foreground text-background font-black uppercase tracking-[0.3em] text-xs rounded-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    EXECUTE_SEND <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>

              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER METADATA
        <div className="mt-20 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-gray-800/80 dark:text-gray-500 uppercase tracking-widest">
          <p>© 2026_SYSTEM_USER_YASWANTH // ALL_RIGHTS_RESERVED</p>
          <div className="flex gap-8">
            <span>Security: AES_256</span>
            <span>Region: AP_SOUTH_1</span>
            <span className="text-blue-500 animate-pulse">● Live_Signal_Stable</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};