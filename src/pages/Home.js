import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div style={containerStyle}>
      {/* Welcome Message */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={headingStyle}
      >
        Welcome to Mind Body Healing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={subtextStyle}
      >
        Discover the connection between your mind, body, and spirit.
      </motion.p>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={sectionStyle}
      >
        <h2>Unlock the Power of Inner Healing</h2>
        <p>
          The mind and body are deeply connected. Ancient traditions and modern science agree—balancing your mental, physical, and spiritual energy can lead to profound transformation. 
        </p>
        <p>
          From breathwork to meditation, mindful living to esoteric wisdom, this space is dedicated to empowering you with knowledge and tools to realign yourself.
        </p>
      </motion.section>

      {/* Science + Spirituality Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        style={sectionStyle}
      >
        <h2>Science Meets Spirituality</h2>
        <p>
          Scientific research shows that practices like breathwork, meditation, and mindfulness can:
        </p>
        <ul>
          <li>Lower stress and anxiety</li>
          <li>Enhance cognitive function and focus</li>
          <li>Improve emotional resilience</li>
          <li>Boost overall well-being</li>
        </ul>
        <p>
          Beyond science, ancient wisdom from yogic traditions, Eastern philosophy, and metaphysics have long recognized the unseen forces shaping our reality.
        </p>
      </motion.section>

      {/* Chakra & Energy Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        style={sectionStyle}
      >
        <h2>Understanding Chakras & Energy Flow</h2>
        <p>
          Your body is an energetic system, with key points known as chakras. When these energy centers are balanced, life flows effortlessly.
        </p>
        <p> 
          Explore the practices that help align these centers, from breathwork to hand mudras, sound healing to meditation.
        </p>
      </motion.section>

      {/* Call-To-Action Buttons */}
      <div style={ctaContainerStyle}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={ctaButtonStyle}
          onClick={() => window.location.href = "/breathwork"}
        >
          Explore Breathwork
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={ctaButtonStyle}
          onClick={() => window.location.href = "/meditation"}
        >
          Learn Meditation
        </motion.button>
      </div>
    </div>
  );
};

// Styling
const containerStyle = {
  textAlign: "center",
  padding: "50px",
  maxWidth: "800px",
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

const ctaContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
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

export default Home;
