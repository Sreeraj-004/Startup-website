import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name}, we received your message!`);
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <section id="contact" style={{ padding: "4rem 2rem", background: "#f1f5f9", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", maxWidth: "400px", width: "100%", textAlign: "left" }}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
        <button type="submit" style={{ width: "100%", padding: "0.75rem", background: "#3b82f6", color: "white", border: "none", borderRadius: "5px" }}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
