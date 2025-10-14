// src/components/Services.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Web Application Development",
    description:
      "Design, Code, and Publish scalable, responsive web apps using the latest web technologies.",
    image: "/images/1.png",
  },
  {
    title: "Application Maintenance",
    description:
      "Debug, Optimize, and Enhance your existing applications for performance, stability, and security.",
    image: "/images/2.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Craft stunning, user-friendly interfaces that make your web applications visually appealing and easy to use.",
    image: "/images/3.png",
  },
];

// Variants for smooth staggered entry & exit
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
  exit: (i) => ({
    opacity: 0,
    y: -40,
    scale: 0.95,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="relative bg-gray-950 text-white py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-extrabold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
        >
          What we do
        </motion.h2>

        {/* AnimatePresence wraps the grid */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-indigo-500/40 transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-700"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-end h-80 text-left">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-300 group-hover:text-white transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
