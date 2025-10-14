// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 flex flex-col items-center gap-3">
      {/* Company name in muted style */}
      <span className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} BetaMind TechSolutions
      </span>

      {/* Social / contact links */}
      <div className="flex items-center gap-6">
        {/* Instagram SVG */}
        <a
          href="https://www.instagram.com/betamind4?igsh=Z2w4MjI4NmR3Mmhk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.97.24 2.427.415a4.92 4.92 0 011.693 1.01 4.922 4.922 0 011.01 1.693c.175.457.361 1.256.415 2.427.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.97-.415 2.427a4.902 4.902 0 01-1.01 1.693 4.9 4.9 0 01-1.693 1.01c-.457.175-1.256.361-2.427.415-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.427-.415a4.902 4.902 0 01-1.693-1.01 4.9 4.9 0 01-1.01-1.693c-.175-.457-.361-1.256-.415-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.97.415-2.427a4.902 4.902 0 011.01-1.693 4.902 4.902 0 011.693-1.01c.457-.175 1.256-.361 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.694.307 3.78.63 2.798.978 1.97 1.493 1.174 2.288.378 3.084-.138 3.912-.486 4.894c-.323.914-.5 1.995-.558 3.272C-.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.235 2.358.558 3.272.348.982.864 1.81 1.66 2.606.796.796 1.624 1.312 2.606 1.66.914.323 1.995.5 3.272.558C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.358-.235 3.272-.558a6.937 6.937 0 002.606-1.66 6.933 6.933 0 001.66-2.606c.323-.914.5-1.995.558-3.272.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.235-2.358-.558-3.272a6.933 6.933 0 00-1.66-2.606 6.937 6.937 0 00-2.606-1.66c-.914-.323-1.995-.5-3.272-.558C15.668.014 15.259 0 12 0z" />
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
        </a>

        {/* Email SVG */}
        <a
          href="mailto:betamind4tech@gmail.com"
          className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M1.5 4.5h21v15h-21v-15zm2.5 1.5v12h16v-12h-16zm8 6.5l-8-5.5h16l-8 5.5z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
