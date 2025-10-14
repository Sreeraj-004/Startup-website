// src/components/Header.js
import React from "react";
import { motion } from "framer-motion";
import logo from "../logo.svg";

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
      {/* Logo */}
      <motion.div className="flex items-center mb-4 md:mb-0">
        <img src={logo} alt="BetaMind Logo" className="h-12 w-12 mr-3 drop-shadow-lg" />
        <h1 className="text-3xl font-bold text-white drop-shadow-md">BetaMind TechSolutions</h1>
      </motion.div>

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
