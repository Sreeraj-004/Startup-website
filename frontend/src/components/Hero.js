// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br  from-gray-900 via-[#0a1f4d] to-black
 overflow-hidden">
      {/* Background gradient container (z-0) */}
      <div className="absolute inset-0 z-0"></div>

      {/* CSS Fog overlay (z-10) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-20 animate-fadeSlow"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 70%),
                       radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 70%),
                       radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 80%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Floating shapes (z-10) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 opacity-20 rounded-full animate-spin-slow mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-20 rounded-full animate-pulse-slow mix-blend-multiply blur-3xl"></div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-screen-xl">
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none rounded-lg -z-10"></div>

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
            src="/Logo/BMTS logo only.png"
            alt="BetaMind Logo"
            className="h-24 w-24 mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Short Title */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-4xl sm:text-5xl font-bold text-transparent font-montserrat bg-clip-text bg-gradient-to-r from-[#3f7dff] to-[#0633d6] mb-3 tracking-tight"

          >
            Your Website, Perfected
          </motion.h1>

          {/* Short Subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-lg text-white/90 max-w-md font-normal font-poppins"
          >
            Let's build something together
          </motion.p>

          {/* Buttons container */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
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
