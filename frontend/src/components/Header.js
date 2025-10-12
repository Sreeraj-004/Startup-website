import React from "react";
import logo from "../logo.svg"; // React logo placeholder

const Header = () => {
  return (
    <header className="header" style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", alignItems: "center", background: "#0f172a", color: "white" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="BetaMind Logo" style={{ height: "40px", marginRight: "1rem" }} />
        <h1>BetaMind TechSolutions</h1>
      </div>
      <nav>
        <a href="#services" style={{ margin: "0 1rem", color: "white" }}>Services</a>
        <a href="#contact" style={{ margin: "0 1rem", color: "white" }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
