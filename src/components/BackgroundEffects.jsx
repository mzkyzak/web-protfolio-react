import React, { useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";

export const BackgroundGlow = React.memo(() => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-15]">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1], x: [0, 50, 0], y: [0, -50, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-red-600/30 blur-[150px] transform-gpu"
    />
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.25, 0.1], x: [0, -50, 0], y: [0, 50, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/30 blur-[150px] transform-gpu"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1], x: [0, 30, 0], y: [0, 50, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-purple-600/30 blur-[150px] transform-gpu"
    />
  </div>
));

export const Starfield = React.memo(() => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const stars = useMemo(() => {
    return [...Array(40)].map(() => ({
      width: Math.random() * 3 + 1 + "px",
      height: Math.random() * 2 + 1 + "px",
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      duration: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <motion.div style={{ y }} className="fixed inset-0 -z-20 pointer-events-none transform-gpu">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-30 transform-gpu"
          style={{ width: star.width, height: star.height, left: star.left, top: star.top }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: star.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </motion.div>
  );
});

export const MouseSpotlight = React.memo(() => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    let isTicking = false;
    const handleMouseMove = (e) => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
          isTicking = false;
        });
        isTicking = true;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 pointer-events-none transform-gpu"
      style={{ background: useMotionTemplate`radial-gradient(500px at ${mouseX}px ${mouseY}px, rgba(220, 38, 38, 0.1), transparent 80%)` }}
    />
  );
});