import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10 overflow-hidden bg-transparent">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent transform-gpu" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          WEBSITE PORFOLIO Taufiq ikhsan muzaky
          <div className="text-center">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-px20 md:text-sm font-medium text-slate-500 tracking-wide transform-gpu">
              © {new Date().getFullYear()} 
            </motion.p>
            <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-2 transform-gpu">
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-white/40 italic">
                Website Portfolio By: <span className="text-red-600 ml-2 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]">mzkyzak</span>
              </span>
            </motion.div>
          </div>
          <div className="w-12 h-[2px] bg-red-600/20 rounded-full" />
        </div>
      </div>
    </footer>
  );
}