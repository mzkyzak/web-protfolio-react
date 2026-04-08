import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(item.href.replace("#", ""));
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 90,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
    
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 transform-gpu ${
          scrolled || isOpen
            ? "bg-transparent border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group relative flex items-center gap-2 z-[101]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:animate-ping" />
            
            <span className="text-lg font-black tracking-[0.2em] uppercase flex items-center">
              <span className="relative flex">
                <span className="opacity-0">MZKYZAK</span>
                
                <motion.span
                  className="absolute left-0 top-0 whitespace-nowrap overflow-hidden flex"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.9, 
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 3 
                  }}
                >
                  <span className="text-white">MZKY</span>
                  <span className="text-red-600">ZAK</span>
                </motion.span>
              </span>
              

              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-[2px] h-[1em] bg-red-600 ml-1"
              />
            </span>
          </a>

  
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[101] p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all duration-300 group"
          >
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {isOpen ? <X size={20} className="text-red-500" /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-[#030014]/80 flex flex-col justify-center transform-gpu px-8 md:px-24"
          >
        
            <div className="absolute inset-0 pointer-events-none opacity-20" 
                 style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} 
            />

            <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
              <span className="text-white text-[14px] font-bold uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-red-600" />
                Navigation Menu
              </span>

              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="group flex items-center gap-6 w-fit cursor-pointer"
                    >
              
                      <span className={`text-sm font-mono tracking-widest transition-all duration-300 ease-out flex items-center gap-4
                        ${isActive ? "text-red-500 opacity-100 translate-x-0" : "text-red-500/50 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}
                      `}>
                        0{index + 1}
                        <div className={`h-[1px] bg-red-500 transition-all duration-300 ${isActive ? "w-8" : "w-0 group-hover:w-8"}`} />
                      </span>

                     
                      <span className={`text-3xl md:text-5xl font-black uppercase tracking-widest transition-all duration-300
                        ${isActive ? "text-white" : "text-slate-600 group-hover:text-white"}
                      `}>
                        {item.label}
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;