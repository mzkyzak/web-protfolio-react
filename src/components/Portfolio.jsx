import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { listProyek, listTools, listCertificates } from "../data"; // Sesuaikan path ini jika data.js ada di luar folder components

const listOS = [
  { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Ubuntu",  logo:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
];

export const listDesignTools = [
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { name: "Canva", logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" }, 
  { name: "Lightroom", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" },
  { name: "Capcut", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Capcut-icon.svg" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Mengunci scroll background saat modal terbuka
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  const nextSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    const images = selectedProject?.images || [];
    if (images.length === 0) return;
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [selectedProject]);

  const prevSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    const images = selectedProject?.images || [];
    if (images.length === 0) return;
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* TITLE */}
        <div className="mb-12 w-full flex flex-col items-center" data-aos="fade-up">
          <motion.h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Portfolio 
          </motion.h3>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100px" }} className="h-2 bg-red-600 mt-2 rounded-full shadow-[0_0_10px_#dc2626]" />
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex justify-center mb-20 w-full" data-aos="fade-up">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
            {["projects", "certificates", "tech", "design", "os"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 md:px-10 py-4 rounded-[1.5rem] text-[11px] font-[900] uppercase tracking-[0.25em] transition-all duration-500 relative group
                ${activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-200"}`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-red-600 rounded-[1.5rem] z-0 shadow-[0_10px_30px_rgba(220,38,38,0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {activeTab !== tab && (
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-600/50 group-hover:w-1/2 transition-all duration-300" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full">
              
              {/* TAB PROJECTS */}
              {activeTab === "projects" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  {listProyek.map((proyek, index) => (
                    <motion.div 
                      key={proyek.id} 
                      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.4, 0, 1] }}
                      className="group relative cursor-pointer mx-auto w-full"
                    >
                      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent aspect-video flex items-center justify-center transition-all duration-700 group-hover:border-red-600/50 group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)]">
                        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 blur-3xl transition-all duration-700" />
                        <motion.img 
                          src={proyek.img} alt={proyek.title} className="w-full h-full object-cover"
                          animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }} whileHover={{ scale: 1.1 }}
                          onClick={() => { setSelectedProject(proyek); setCurrentImgIndex(0); }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 pointer-events-none">
                           <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                             <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Click Untuk Zoom View</p>
                           </motion.div>
                        </div>
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shine pointer-events-none" />
                      </div>
                      <div className="mt-6 px-4">
                        <span className="text-red-500 text-[15px] font-black uppercase tracking-[0.3em]">{proyek.subtitle}</span>
                        <h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-tight mt-2 group-hover:text-red-500 transition-colors duration-300">{proyek.title}</h4>
                        <div className="flex items-center justify-between gap-3 mt-4">
                          <div className="flex items-center gap-3">
                            <div className="h-[2px] w-8 bg-red-600 group-hover:w-12 transition-all duration-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                            <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">Lihat Project</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* TAB CERTIFICATES */}
              {activeTab === "certificates" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                  {listCertificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.4, 0, 1] }}
                      className="group relative mx-auto w-full"
                    >
                      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent aspect-[4/3] flex items-center justify-center transition-all duration-700 group-hover:border-red-600/50 group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)]">
                        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 blur-3xl transition-all duration-700" />
                        <motion.img 
                          src={cert.img} alt={cert.title} className="w-full h-full object-cover"
                          animate={{ y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }} whileHover={{ scale: 1.1 }}
                        />
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shine pointer-events-none" />
                      </div>
                      <div className="mt-6 text-center md:text-left px-2 md:px-4">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                          <span className="bg-red-600/20 border border-red-600/50 text-red-500 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Verifikasi ✅</span>
                          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">{cert.date || "2025 - 2026"}</span>
                        </div>
                        <motion.h4 
                          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.03 } }, hidden: {} }}
                          className="text-white font-black text-xl uppercase tracking-tighter leading-tight group-hover:text-red-500 transition-colors duration-300 flex flex-wrap justify-center md:justify-start"
                        >
                          {cert.title.split("").map((char, charIndex) => (
                            <motion.span key={charIndex} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>{char === " " ? "\u00A0" : char}</motion.span>
                          ))}
                        </motion.h4>
                        <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                          <div className="h-[1px] w-8 bg-red-600/50 group-hover:w-12 transition-all duration-500" />
                          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors">{cert.issuer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* TAB TECH */}
              {activeTab === "tech" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto justify-items-center">
                  {listTools.map((tool, i) => (
                    <motion.div 
                      key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.05 }} whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      className="w-full max-w-[200px] bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-center gap-6 transition-all duration-500 group relative overflow-hidden hover:border-red-600/40 hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/0 group-hover:from-red-600/10 group-hover:to-transparent transition-all duration-700 opacity-50" />
                      <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-600/0 blur-[60px] group-hover:bg-red-600/20 transition-all duration-700 rounded-full" />
                      <div className="w-16 h-16 flex items-center justify-center relative z-10">
                        <motion.img 
                          src={tool.logo} alt={tool.name} className="w-full h-full object-contain"
                          animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                          whileHover={{ scale: 1.25, rotate: [0, 10, -10, 0], filter: "drop-shadow(0 0 20px rgba(220, 38, 38, 0.6))" }}
                        />
                      </div>
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <h4 className="text-white font-black text-lg md:text-xl uppercase tracking-tighter leading-tight mt-2 group-hover:text-red-500 transition-colors duration-300">{tool.name}</h4>
                        <motion.div initial={{ width: 0 }} whileHover={{ width: "100%" }} className="h-[2px] bg-red-600 mt-2 rounded-full transition-all duration-500" />
                      </div>
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* TAB DESIGN */}
              {activeTab === "design" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto justify-items-center">
                  {listDesignTools.map((tool, i) => (
                    <motion.div 
                      key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.05 }} whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      className="w-full max-w-[200px] bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-center gap-6 transition-all duration-500 group relative overflow-hidden hover:border-red-600/40 hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/0 group-hover:from-red-600/10 group-hover:to-transparent transition-all duration-700 opacity-50" />
                      <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-600/0 blur-[60px] group-hover:bg-red-600/20 transition-all duration-700 rounded-full" />
                      <div className="w-16 h-16 flex items-center justify-center relative z-10">
                        <motion.img 
                          src={tool.logo} alt={tool.name} className="w-full h-full object-contain"
                          animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                          whileHover={{ scale: 1.25, rotate: [0, 10, -10, 0], filter: "drop-shadow(0 0 15px rgba(220, 38, 38, 0.6))" }}
                        />
                      </div>
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <h4 className="text-white font-black text-lg md:text-xl uppercase tracking-tighter leading-tight mt-2 group-hover:text-red-500 transition-colors duration-300">{tool.name}</h4>
                        <motion.div initial={{ width: 0 }} whileHover={{ width: "100%" }} className="h-[2px] bg-red-600 mt-2 rounded-full transition-all duration-500" />
                      </div>
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* TAB OS */}
              {activeTab === "os" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center">
                  {listOS.map((os, i) => (
                    <motion.div 
                      key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.4, 0, 1] }} whileHover={{ y: -15, scale: 1.02 }}
                      className="w-full max-w-[250px] bg-white/5 border border-white/10 rounded-[3.5rem] p-10 md:p-12 flex flex-col items-center gap-10 group relative overflow-hidden transition-all duration-500 hover:border-red-600/40 hover:shadow-[0_30px_60px_rgba(220,38,38,0.15)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="w-24 h-24 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
                        <motion.img 
                          src={os.logo} alt={os.name} className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                          animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                        />
                      </div>
                      <div className="text-center relative z-10">
                         <h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-tight mt-2 group-hover:text-red-500 transition-colors duration-300">{os.name}</h4>
                        <div className="relative h-1 w-12 mx-auto mt-4 bg-white/10 rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-red-600 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                        </div>
                      </div>
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-shine pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* === MODAL DETAIL === */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-10"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-[#05011a] border border-white/10 w-full max-w-6xl h-auto max-h-[90vh] md:max-h-[85vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative transform-gpu"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2.5 bg-black/50 md:bg-transparent border border-white/10 md:border-transparent text-white/50 hover:text-red-500 hover:bg-white/5 rounded-full transition-all" 
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes size={24} />
                </button>

                <div className="relative w-full h-[40vh] md:h-auto md:flex-1 bg-black flex flex-col items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                   <motion.img 
                    key={currentImgIndex}
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    src={selectedProject.images && selectedProject.images.length > 0 ? selectedProject.images[currentImgIndex] : selectedProject.img} 
                    className="w-full h-full object-contain p-4 md:p-8"
                    alt="Detail"
                   />
                  {selectedProject.images?.length > 1 && (
                    <div className="absolute bottom-4 md:bottom-8 inset-x-4 md:inset-x-8 flex justify-between items-center pointer-events-none">
                      <button onClick={prevSlide} className="pointer-events-auto p-3 md:p-4 bg-black/60 hover:bg-red-600 rounded-full text-white backdrop-blur-md transition-all border border-white/10"><ChevronRight className="rotate-180 w-5 h-5" /></button>
                      <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white/80 text-[10px] md:text-xs font-bold tracking-widest border border-white/10">{currentImgIndex + 1} / {selectedProject.images.length}</span>
                      <button onClick={nextSlide} className="pointer-events-auto p-3 md:p-4 bg-black/60 hover:bg-red-600 rounded-full text-white backdrop-blur-md transition-all border border-white/10"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                  )}
                </div>

                <div className="w-full md:w-[450px] lg:w-[500px] flex flex-col bg-[#05011a] p-6 md:p-10 lg:p-14 overflow-y-auto custom-scrollbar">
                   <div className="flex-shrink-0 pr-8 md:pr-0">
                     <span className="text-red-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Project Overview</span>
                     <motion.h2 
                       initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.04 } }, hidden: {} }}
                       className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase leading-tight mb-6 tracking-tighter flex flex-wrap w-full"
                     >
                       {selectedProject.title.split("").map((char, i) => (
                         <motion.span key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                           {char === " " ? "\u00A0" : char}
                         </motion.span>
                       ))}
                     </motion.h2>
                   </div>
                   <div className="mb-8 flex-1">
                     <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-slate-400 text-[14px] md:text-base leading-[1.8] italic w-full">
                       "{selectedProject.description}"
                     </motion.p>
                   </div>
                   {selectedProject.link && (
                     <div className="flex-shrink-0 mt-auto border-t border-white/5 pt-6">
                       <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-red-600 hover:bg-red-700 text-white text-center rounded-xl font-black uppercase tracking-widest text-[11px] md:text-xs transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1">
                         Lihat Project <FaExternalLinkAlt size={14} />
                       </a>
                     </div>
                   )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}