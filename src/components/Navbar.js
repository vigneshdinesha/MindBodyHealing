import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState({});

  // Toggle Navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle Dropdown
  const toggleDropdown = (section) => {
    setDropdown((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      {/* Navbar Toggle Button */}
      <button
        onClick={toggleNavbar}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1100,
        }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Animated Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundColor: "#f8f9fa",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px 0",
            }}
          >
            <ul style={{ listStyle: "none", textAlign: "center", padding: 0, margin: 0, fontSize: "18px" }}>
              <li><a href="/" style={linkStyle}>Home</a></li>

              {/* Breathwork Dropdown */}
              <li style={{ position: "relative" }}>
                <button onClick={() => toggleDropdown("breathwork")} style={dropdownButtonStyle}>
                  Breathwork <FaChevronDown />
                </button>
                <AnimatePresence>
                  {dropdown.breathwork && (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={dropdownMenuStyle}>
                      <li><a href="/breathwork-exercises" style={dropdownLinkStyle}>Exercises</a></li>
                      <li><a href="/breathwork-science" style={dropdownLinkStyle}>Science & Benefits</a></li>
                      <li><a href="/breathwork-visualization" style={dropdownLinkStyle}>Visualization</a></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Meditation Dropdown */}
              <li style={{ position: "relative" }}>
                <button onClick={() => toggleDropdown("meditation")} style={dropdownButtonStyle}>
                  Meditation <FaChevronDown />
                </button>
                <AnimatePresence>
                  {dropdown.meditation && (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={dropdownMenuStyle}>
                      <li><a href="/meditation-techniques" style={dropdownLinkStyle}>Techniques</a></li>
                      <li><a href="/meditation-mudras" style={dropdownLinkStyle}>Mudras & Frequencies</a></li>
                      <li><a href="/meditation-timer" style={dropdownLinkStyle}>Meditation Timer</a></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Mindful Living (No Dropdown) */}
              <li><a href="/mindful-living" style={linkStyle}>Mindful Living</a></li>

              {/* More Information Dropdown */}
              <li style={{ position: "relative" }}>
                <button onClick={() => toggleDropdown("info")} style={dropdownButtonStyle}>
                  More Information <FaChevronDown />
                </button>
                <AnimatePresence>
                  {dropdown.info && (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={dropdownMenuStyle}>
                      <li><a href="/info-research" style={dropdownLinkStyle}>Research & Sources</a></li>
                      <li><a href="/info-esoteric" style={dropdownLinkStyle}>Esoteric Wisdom</a></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Q&A / Chatbot */}
              <li><a href="/qa" style={linkStyle}>Q&A / Chatbot</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Styles
const linkStyle = {
  display: "block",
  padding: "12px 20px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  transition: "color 0.3s",
};

const dropdownButtonStyle = {
  display: "block",
  background: "none",
  border: "none",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  margin: "10px 0",
  color: "#333",
};

const dropdownMenuStyle = {
  listStyle: "none",
  padding: "10px",
  margin: "5px 0",
  textAlign: "center",
  backgroundColor: "#eaeaea",
  borderRadius: "5px",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  minWidth: "200px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const dropdownLinkStyle = {
  display: "block",
  padding: "8px 15px",
  textDecoration: "none",
  color: "#333",
  transition: "background 0.3s",
};

export default Navbar;
