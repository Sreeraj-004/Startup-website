import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, User } from "lucide-react"; // Imported for icons

// Define the contact options
const contactOptions = [
  {
    number: "+918714540425",
    icon: User,
  },
  {
    number: "+916238895749",
    icon: User,
  },
];

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
  const [loading, setLoading] = useState(false); // Loading state for submit button
  const [showCallCards, setShowCallCards] = useState(false); // State to manage call card visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true); // Start loading

    try {
        const API_BASE = process.env.REACT_APP_API_URL; // '' in production, 'http://localhost:8000' in dev
        const response = await fetch(`${API_BASE}/api/contact`, {
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
      } finally {
        setLoading(false); // Stop loading
      }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3f7dff] to-[#0633d6] font-montserrat"
        >
          Concept to Code - Contact Us
        </motion.h2>

        {/* Success or Error Alert */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-5 bg-green-600/20 text-green-300 border border-green-500 rounded-lg p-3 sm:p-4 text-sm sm:text-base"
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-5 bg-red-600/20 text-red-300 border border-red-500 rounded-lg p-3 sm:p-4 text-sm sm:text-base"
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
          className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700 text-left"
        >
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-300">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your 10-digit phone number"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium text-gray-300">I am a</label>
            <div className="relative flex bg-gray-900 border border-gray-700 rounded-full overflow-hidden">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute top-0 bottom-0 ${
                  formData.role === "student" ? "left-0 w-1/2" : "left-1/2 w-1/2"
                } bg-gradient-to-r from-[#0633d6] to-[#3f7dff] rounded-full`}
              ></motion.div>
              {["student", "business"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, role }))}
                  className={`relative flex-1 py-2 sm:py-3 text-center font-semibold transition-colors duration-300 z-10 ${
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
          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Tell us how we can help..."
            ></textarea>
          </div>

          {/* Submit Button with Loading */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2.5 sm:py-3 text-white font-bold font-montserrat bg-gradient-to-r from-[#3f7dff] to-[#0633d6] hover:from-[#0633d6] hover:to-[#3f7dff] rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
          <p className="text-sm text-gray-400 text-center mt-3">
            We’ll reach out within{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3f7dff] to-[#0633d6]">
              24 hours.
            </span>
          </p>
        </motion.form>

        {/* Call Cards */}
        <motion.div
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            {showCallCards ? "Choose a line to connect:" : "Need faster reply?"}
          </p>

          <AnimatePresence mode="wait">
            {showCallCards ? (
              <motion.div
                key="cards"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {contactOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl shadow-lg border border-gray-700 bg-gray-800/60 transition-all hover:shadow-indigo-500/30 cursor-pointer"
                    >
                      <p className="font-bold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 flex items-center justify-center gap-2">
                        <IconComponent size={20} className="text-indigo-400" />
                        Contact
                      </p>
                      <p className="text-gray-300 text-sm mb-3">{option.number}</p>
                      <a
                        href={`tel:${option.number}`}
                        className="w-full inline-flex items-center justify-center font-semibold py-2 px-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#0633d6] to-[#3f7dff] hover:shadow-md"
                      >
                        <Phone size={18} className="mr-2" />
                        Call Now
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.button
                key="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowCallCards(true)}
                className="inline-block bg-gradient-to-r from-[#0633d6] to-[#3f7dff] text-white font-semibold py-2 px-5 sm:px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
              >
                Show Call Options
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
