import React from "react";

const services = [
  { title: "Web Development", description: "Custom websites built with React, FastAPI, and modern tools." },
  { title: "App Development", description: "iOS and Android applications designed for performance." },
  { title: "Graphic Design", description: "Professional branding and UI/UX design for your startup." }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Our Services</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
        {services.map((service, index) => (
          <div key={index} style={{ width: "250px", padding: "2rem", border: "1px solid #cbd5e1", borderRadius: "10px" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
