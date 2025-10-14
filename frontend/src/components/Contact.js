import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "student",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(
          `Thank you, ${formData.name}! Our team will reach out to you soon.`
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "student",
          message: "",
        });
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-screen-md mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
        >
          Concept to Code - Contact Us
        </motion.h2>

        {/* ✅ Success or Error Alert Box */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 bg-green-600/20 text-green-300 border border-green-500 rounded-lg p-4"
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 bg-red-600/20 text-red-300 border border-red-500 rounded-lg p-4"
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700 text-left"
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block mb-2 font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label className="block mb-2 font-medium text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your 10-digit phone number"
            />
          </div>

          {/* Role Selector */}
          <div className="mb-6">
            <label className="block mb-3 font-medium text-gray-300">
              I am a
            </label>

            <div className="relative flex bg-gray-900 border border-gray-700 rounded-full overflow-hidden w-full">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute top-0 bottom-0 ${
                  formData.role === "student" ? "left-0 w-1/2" : "left-1/2 w-1/2"
                } bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full`}
              ></motion.div>

              {["student", "business"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, role }))}
                  className={`relative flex-1 py-3 text-center font-semibold transition-colors duration-300 z-10 ${
                    formData.role === role
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {role === "student" ? " Student" : " Business Owner"}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Tell us how we can help..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>

          {/* ✅ Small Note */}
          <p className="text-sm text-gray-400 text-center mt-3">
            We’ll reach out to you within{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400">
              24 hours.
            </span>
          </p>

        </motion.form>

        {/* ✅ Call Button Below Card */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-2">Need faster reply?</p>
          <a
            href="tel:+918714540425"
            className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Call us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
