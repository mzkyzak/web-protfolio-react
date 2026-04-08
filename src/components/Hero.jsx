import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { User } from "lucide-react";

const TypingText = React.memo(() => {
  const words = ["Kreatif", "Inovatif", "Usaha"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div className="h-[1.2em] overflow-hidden flex items-center justify-center md:justify-start transform-gpu">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -15, opacity: 0 }} transition={{ duration: 0.3 }}
          className="text-red-500 inline-block font-bold italic drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transform-gpu"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
});

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center mt-10 md:mt-0">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="transform-gpu">
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-tight mb-4 tracking-tight">
            <motion.span animate={{ textShadow: ["0px 0px 10px #ef4444", "0px 0px 30px #ef4444", "0px 0px 10px #ef4444"] }} transition={{ duration: 2.5, repeat: Infinity }} className="transform-gpu inline-block">
              Taufiq Ikhsan Muzaky
            </motion.span>
            <br />
            <TypingText />
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-md mb-8 leading-relaxed">
            Kepribadian saya terbentuk melalui kegiatan yang melatih kedisiplinan, kerja sama tim, tanggung jawab, kepemimpinan, serta kepedulian sosial. Saya menciptakan dan mengembangkan website, game, serta aplikasi untuk membangun solusi digital yang fungsional dan ramah pengguna.
          </p>

          <div className="flex gap-4">
            <motion.a href="#portfolio" whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(220,38,38,0.6)" }} whileTap={{ scale: 0.95 }} className="px-8 py-3.5 bg-red-600 text-white text-xs font-bold rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.4)] transform-gpu flex items-center gap-2 uppercase tracking-widest transition-all">
              Portfolio me <FaArrowRight size={12} />
            </motion.a>
            <motion.a href="#about" whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.1)" }} className="px-8 py-3.5 glass-effect text-white text-xs font-bold rounded-xl flex items-center gap-2 uppercase tracking-widest border border-white/10 transform-gpu">
              Profile <User size={14} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="relative flex justify-center md:justify-end transform-gpu">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600/10 blur-[120px] rounded-full animate-pulse transform-gpu" style={{ willChange: 'opacity' }} />
            <motion.img src="/website_mzkyzak.gif" alt="Development Animation" className="relative z-10 w-full h-auto drop-shadow-[0_0_50px_rgba(220,38,38,0.3)] transform-gpu" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: 'transform' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}