import React from "react";
import { motion } from "framer-motion";
// Removed: useState, AnimatePresence, Sparkles, ChevronDown (as they are no longer used)

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

// Removed: workflowSteps array (as it is no longer used)

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-gray-950 text-white py-24 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3f7dff] to-[#0633d6] font-montserrat"

        >
          What we do
        </motion.h2>

        {/* Service Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center place-items-center">
  {services.map((service, index) => (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-indigo-500/40 transition-all duration-500 w-full max-w-sm font-poppins font-normal"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-700"
        style={{ backgroundImage: `url(${service.image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="relative z-10 p-8 flex flex-col justify-end h-80 text-left">
        {/* Main title */}
        <h3 className="text-2xl font-bold font-montserrat mb-3 text-indigo-300 group-hover:text-white transition-all">
          {service.title}
        </h3>
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed font-poppins group-hover:text-gray-100">
          {service.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Services;