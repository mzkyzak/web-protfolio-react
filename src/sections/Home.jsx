import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import komponen-komponen yang sudah dipisah
import { BackgroundGlow, Starfield, MouseSpotlight } from "./components/BackgroundEffects";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  
  // Inisialisasi AOS cuma butuh dipanggil sekali di halaman utama
  useEffect(() => {
    AOS.init({ duration: 2000, once: false, mirror: true, easing: 'ease-out-back' });
  }, []);

  return (
    <div className="w-full bg-[#030014] text-slate-300 min-h-screen font-jakarta overflow-x-hidden selection:bg-red-600/30 relative">
      
      {/* Efek Latar Belakang */}
      <BackgroundGlow />
      <Starfield />
      <MouseSpotlight />

      {/* Bagian-bagian Web */}
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      
    </div>
  );
}