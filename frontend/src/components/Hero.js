// src/components/Hero.js
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../logo.svg"; // Replace with your BetaMind logo

const Hero = () => {
  const bgRef = useRef(null);
  const gradientRef = useRef(null);
  const floatsRef = useRef([]);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    floatsRef.current = el.querySelectorAll(".animate-spin-slow, .animate-pulse-slow");

    let speed = 40;
    let offset = 0;
    let lastScroll = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      speed = Math.max(5, 40 - (scrollY - lastScroll) / 2);
      lastScroll = scrollY;
      floatsRef.current.forEach((f) => {
        f.style.animationDuration = `${speed}s`;
      });
    };

    const animateGradient = () => {
      offset += 0.2;
      const wave = Math.sin(offset / 50) * 30;
      if (gradientRef.current) {
        gradientRef.current.style.background = `linear-gradient(90deg, #6366f1, #a855f7 ${50 + wave}%, #ec4899)`;
      }
      requestAnimationFrame(animateGradient);
    };

    window.addEventListener("scroll", handleScroll);
    animateGradient();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background gradient container */}
      <div
        ref={gradientRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(90deg, #6366f1, #a855f7 50%, #ec4899)" }}
      ></div>

      {/* Floating shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full animate-spin-slow mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-20 rounded-full animate-pulse-slow mix-blend-multiply blur-3xl"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-screen-xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="BetaMind Logo"
            className="h-20 w-20 mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          />

          {/* Short Title */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3 font-sans tracking-tight"
          >
            Your Website, Perfected
          </motion.h1>

          {/* Short Subtitle */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="text-lg text-white/90 max-w-md font-light"
          >
            Let's build something together
          </motion.p>

          {/* Buttons container */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Add your buttons here */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
