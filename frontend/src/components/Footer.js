import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "2rem", textAlign: "center", background: "#0f172a", color: "white" }}>
      &copy; {new Date().getFullYear()} BetaMind TechSolutions. All rights reserved.
    </footer>
  );
};

export default Footer;
