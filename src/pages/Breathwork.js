import React from "react";
import { motion } from "framer-motion";
import BreathworkVisualizer from "../components/BreathworkVisualizer"; // Import the visualizer

const Breathwork = () => {
  return (
    <div style={containerStyle}>
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={headingStyle}
      >
        Breathwork Techniques
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={subtextStyle}
      >
        Learn about prana and how breath connects to energy from the earth.
      </motion.p>

      {/* Breathwork Visualizer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={sectionStyle}
      >
        <h2>Breathwork Visualizer</h2>
        <p>Select a breathing technique or customize your own</p>
        <BreathworkVisualizer />
      </motion.div>

      {/* Breathwork Techniques Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        style={sectionStyle}
      >
        <h2>Why Breathwork?</h2>
        <p>
          Breath is the bridge between mind and body. Conscious breathing can:
        </p>
        <ul>
          <li>Reduce stress and anxiety</li>
          <li>Improve focus and mental clarity</li>
          <li>Enhance lung capacity and oxygen intake</li>
          <li>Balance the nervous system and energy flow</li>
        </ul>
      </motion.section>

      {/* Different Breathwork Techniques */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        style={sectionStyle}
      >
        <h2>Popular Breathwork Techniques</h2>

        <div style={techniqueContainerStyle}>
          <div style={techniqueBoxStyle}>
            <h3>Box Breathing</h3>
            <p>
              Used by Navy SEALs, this method involves **inhaling, holding, exhaling, and holding** for equal durations. It helps with **calmness and focus**.
            </p>
          </div>

          <div style={techniqueBoxStyle}>
            <h3>4-7-8 Breathing</h3>
            <p>
              This technique **slows the heart rate** and is useful for **relaxation and sleep**. Inhale for 4s, hold for 7s, exhale for 8s.
            </p>
          </div>

          <div style={techniqueBoxStyle}>
            <h3>Cyclic Sighing</h3>
            <p>
              **Scientifically proven** to reduce stress quickly. Inhale fully, take a short second inhale, then exhale slowly.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Call-To-Action Buttons */}
      <div style={ctaContainerStyle}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={ctaButtonStyle}
          onClick={() => window.location.href = "/meditation"}
        >
          Explore Meditation
        </motion.button>
      </div>
    </div>
  );
};

// Styling
const containerStyle = {
  textAlign: "center",
  padding: "50px",
  maxWidth: "900px",
  margin: "0 auto",
};

const headingStyle = {
  fontSize: "2.5em",
  fontWeight: "bold",
};

const subtextStyle = {
  fontSize: "1.2em",
  marginBottom: "20px",
};

const sectionStyle = {
  marginTop: "40px",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
};

const techniqueContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const techniqueBoxStyle = {
  padding: "15px",
  backgroundColor: "#e3f2fd",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const ctaContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
};

const ctaButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  transition: "background 0.3s",
};

export default Breathwork;
