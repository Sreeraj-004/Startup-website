// src/components/Hero.js
import React from "react";
import logo from "../logo.svg"; // Replace with your BetaMind logo later

const Hero = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center animate-fadeIn">
          
          {/* Logo */}
          <img
            src={logo}
            alt="BetaMind Logo"
            className="mx-auto h-20 w-20 mb-6 animate-slideUp"
          />

          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white animate-slideUp">
            Empowering Digital Growth with{" "}
            <strong className="text-indigo-600">Intelligent Solutions</strong>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed dark:text-gray-200 animate-fadeIn">
            At <strong>BetaMind TechSolutions</strong>, we build scalable web, mobile, and AI-driven 
            systems that help businesses grow smarter, faster, and more efficiently. 
            Transform your ideas into powerful digital products.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 sm:mt-8 animate-slideUp">
            <a
              href="#"
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Get Started
            </a>

            <a
              href="#"
              className="inline-block rounded border border-gray-200 px-6 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
