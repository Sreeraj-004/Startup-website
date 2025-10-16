import React from "react";
import { Linkedin, MapPin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  // Array for cleaner rendering of social/contact links
  const socialLinks = [
    {
      href: "https://www.instagram.com/betamind.techsolutions?igsh=Z2w4MjI4NmR3Mmhk",
      Icon: Instagram,
      color: "hover:text-pink-500",
      label: "Instagram",
    },
    {
      href: "http://www.linkedin.com/in/betamind-techsolutions-64a8a538a",
      Icon: Linkedin,
      color: "hover:text-blue-400",
      label: "LinkedIn",
    },
    {
      href: "mailto:betamind4tech@gmail.com",
      Icon: Mail,
      color: "hover:text-indigo-400",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Section 1: Branding and Location - Replaced text with Logo Image */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/Logo/BMTS text white.png"
            alt="BetaMind TechSolutions Logo"
            className="h-16 mb-4 w-auto" // Increased size to h-16 (200% of h-8)
          />
          <p className="flex items-center text-sm text-gray-400 mt-2">
            <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
            Palakkad, Kerala
          </p>
          <a 
            href="mailto:betamind4tech@gmail.com"
            className="text-sm text-gray-400 hover:text-white transition-colors mt-1"
          >
            betamind4tech@gmail.com
          </a>
        </div>

        {/* Section 2: Social Links */}
        <div className="flex flex-col items-center md:items-center">
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.label} page`}
                // Enhanced appearance: uses bold text-shadow on hover for premium look
                className={`text-gray-300 ${link.color} transition-transform transform hover:scale-125 duration-300 drop-shadow-md`}
              >
                <link.Icon className="h-7 w-7 stroke-2" /> {/* Increased stroke weight */}
              </a>
            ))}
          </div>
        </div>

        {/* Section 3: Copyright */}
        <div className="flex flex-col items-center md:items-end md:justify-end mt-4 md:mt-0">
          <span className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BetaMind TechSolutions. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
