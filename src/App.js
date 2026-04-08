import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";

// 🧩 IMPORT KOMPONEN YANG SUDAH DIPISAH
import { BackgroundGlow, Starfield, MouseSpotlight } from "./components/BackgroundEffects";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 💫 IMPORT AOS ANIMATION
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: false, // animasi ULANG saat scroll
      duration: 1000,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    // Tambahkan font-jakarta dan selection text merah agar konsisten
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth bg-[#030014] text-white selection:bg-red-600/30 font-jakarta">

      {/* 🔄 PRELOADER */}
      <PreLoader />

      {/* ✨ EFEK LATAR BELAKANG GLOBAL (Bintang, Glow, Mouse) */}
      <BackgroundGlow />
      <Starfield />
      <MouseSpotlight />

      {/* 🔝 NAVBAR */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* 📦 MAIN CONTENT (Disusun rapi berurutan ke bawah) */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* 🏁 FOOTER */}
      <Footer />

    </div>
  );
}