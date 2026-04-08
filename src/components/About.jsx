import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative z-10 overflow-hidden bg-transparent py-28 px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 blur opacity-20 transform-gpu" />
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative h-72 w-72 overflow-hidden rounded-full border-[6px] border-[#030014] md:h-80 md:w-80 shadow-2xl transform-gpu">
                <img src="/Profile.jpg" alt="Profile" className="h-full w-full object-cover" loading="lazy" />
              </motion.div>
            </div>

            <div className="mt-12 grid w-full max-w-sm grid-cols-2 gap-4">
              {[{ label: "Location", value: "Jakarta, ID", color: "red" }, { label: "Education", value: "SMKN 2 JKT", color: "blue" }].map((item, i) => (
                <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transform-gpu hover:shadow-[0_0_25px_rgba(239,68,68,0.18)] transition-all"
                >
                  <p className={`mb-1 text-[13px] font-mono uppercase tracking-widest ${item.color === "red" ? "text-red-500/60" : "text-blue-500/60"}`}>{item.label}</p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid w-full max-w-sm grid-cols-2 gap-4">
              {[{ title: "Projects", count: "6+", icon: "📁", color: "red" }, { title: "Certificates", count: "20+", icon: "🎓", color: "blue" }].map((item, i) => (
                <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ delay: i * 0.1 + 0.2 }} whileHover={{ y: -4, scale: 1.02 }}
                  className="group cursor-default rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transform-gpu hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className={`text-xs font-mono uppercase tracking-widest ${item.color === "red" ? "text-red-400" : "text-blue-400"}`}>{item.title}</p>
                      <p className="text-xl font-bold text-white">{item.count}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="relative inline-block">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-md animate-pulse transform-gpu" />
              <h3 className="relative text-4xl font-bold uppercase tracking-tight text-white md:text-5xl flex flex-wrap gap-2">
                <motion.span initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}>
                  {"About".split("").map((char, index) => (
                    <motion.span key={index} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>{char === " " ? "\u00A0" : char}</motion.span>
                  ))}
                </motion.span>
                <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <motion.span initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}>
                    {"Me".split("").map((char, index) => (
                      <motion.span key={index} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>{char === " " ? "\u00A0" : char}</motion.span>
                    ))}
                  </motion.span>
                </span>
              </h3>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.005 } }, hidden: {} }} 
              className="max-w-xl text-[16px] leading-[1.9] text-slate-300 md:text-[18px] font-medium tracking-wide will-change-[opacity]"
            >
              <p className="mb-6">
                {"Perkenalkan, nama saya ".split("").map((char, index) => (
                  <motion.span key={`p1-${index}`} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{char}</motion.span>
                ))}
                <span className="font-bold italic text-white relative inline-block">
                  {"Taufiq Ikhsan Muzaky (Zaky)".split("").map((char, index) => (
                    <motion.span key={`name-${index}`} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                  ))}
                  <motion.span aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.5 }} className="absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-gradient-to-r from-red-500 to-blue-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] transform-gpu" />
                </span>
              </p>
              
              <p className="mb-8">
                {"Saya adalah Seorang siswa Dari jurusan Rekayasa Perangkat Lunak Di sekolah Smkn 2 Jakarta Pusat karena saya memiliki minat dalam pengembangan aplikasi, game dan website. Dan Berpengalaman mengerjakan berbagai proyek sekolah dan mandiri, saya berfokus pada pembuatan solusi digital yang responsif, fungsional, dan ramah pengguna.".split("").map((char, index) => (
                  <motion.span key={`p2-${index}`} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{char}</motion.span>
                ))}
              </p>
              
              <motion.a 
                href="/CV_Taufiq_ikhsan_muzaky.pdf" 
                download 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.5 } } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-3 rounded-full border border-red-500/50 bg-red-600/10 px-8 py-4 text-xs font-black tracking-[0.3em] text-white transition-all hover:bg-red-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
              >
                DOWNLOAD CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}