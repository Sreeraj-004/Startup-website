// src/components/Header.js
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const navItems = ["Home", "Services", "Contact"];

  const handleScroll = (id) => {
    const target = document.getElementById(id.toLowerCase());
    if (target) {
      const yOffset = 30;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="absolute top-10 left-0 right-0 px-6 md:px-10 flex flex-col md:flex-row items-center md:justify-between z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Logo wrapper */}
      <div className="relative w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0 overflow-visible">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Combined horizontal logo */}
          <img
            src="/Logo/BMTS_web.png"
            alt="BMTS Logo"
            className="
              h-12 sm:h-14 md:h-16 lg:h-16 lg:pl-20
              w-auto drop-shadow-lg
              scale-[1.5] sm:scale-[1.8] md:scale-[1.5] md:pl-11
              transition-transform
            "
            style={{
              transformOrigin: "center center",
            }}
          />
        </div>
      </div>





      {/* Navbar */}
      <motion.nav
        className="flex flex-wrap justify-center md:justify-start bg-white/90 backdrop-blur-md rounded-full px-4 py-2 w-max mx-auto md:mx-0 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        {navItems.map((item, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleScroll(item)}
            className="px-4 py-2 font-medium text-gray-800 hover:text-indigo-600 rounded-full transition-colors"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(99,102,241,0.9)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 8 }}
          >
            {item}
          </motion.button>
        ))}
      </motion.nav>
    </motion.header>
  );
};

export default Header;
