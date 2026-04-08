import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🧩 IMPORT KOMPONEN GLOBAL
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import Footer from "./components/Footer";

// ✨ IMPORT EFEK BACKGROUND
import { BackgroundGlow, Starfield, MouseSpotlight } from "./components/BackgroundEffects";

// 📦 IMPORT SECTION HALAMAN YANG SUDAH DIPISAH
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false, // Set false agar animasi terulang terus saat di-scroll
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    // Tambahkan font-jakarta dan relative min-h-screen agar background pas
    <div className="bg-[#030014] text-white overflow-x-hidden scroll-smooth selection:bg-red-500/30 font-jakarta relative min-h-screen">
      
      {/* 🔄 PRELOADER */}
      <PreLoader />

      <BackgroundGlow />
      <Starfield />
      <MouseSpotlight />

      {/* 🔝 NAVBAR */}
      <div className="relative z-20">
        <Navbar />
      </div>
      
      {/* 📦 MAIN CONTENT (Disusun berurutan ke bawah) */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* 🏁 FOOTER */}
      <div className="relative z-20">
        <Footer />
      </div>
      
    </div>
  );
}