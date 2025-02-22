import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  { id: 1, title: "Roots of Existence", bgColor: "#5A3E36", textColor: "#FFF", animation: "flowing-water" },
  { id: 2, title: "Rivers of Consciousness", bgColor: "#1B5E20", textColor: "#FFF", animation: "growing-tree" },
  { id: 3, title: "Ascending to the Sky", bgColor: "#1565C0", textColor: "#FFF", animation: "floating-clouds" },
  { id: 4, title: "Exploring the Cosmos", bgColor: "#4527A0", textColor: "#FFF", animation: "cosmic-warp" },
  { id: 5, title: "Infinite Light & Awareness", bgColor: "#FFF59D", textColor: "#000", animation: "radiating-sacred-geometry" },
  { id: 6, title: "Be Here Now", bgColor: "#F5F5F5", textColor: "#000", animation: "pulsing-energy" },
];

const Journey = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  const nextPhase = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        nextPhase();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentPhase]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPhase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor: phases[currentPhase].bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: phases[currentPhase].textColor,
          textAlign: "center",
          padding: "20px",
          overflow: "hidden",
          transition: "background-color 1s ease-in-out",
        }}
      >
        {/* 🎥 Moving Background Animation */}
        <BackgroundAnimation type={phases[currentPhase].animation} />

        <motion.h1
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ fontSize: "2.5em", marginBottom: "20px", zIndex: 10 }}
        >
          {phases[currentPhase].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "1.2em", maxWidth: "800px", zIndex: 10 }}
        >
          {`Phase ${currentPhase + 1}: A step towards deeper awareness.`}
        </motion.p>

        {/* ✅ Next Phase Button - Above Background Layers */}
        <motion.button
          onClick={nextPhase}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: "30px",
            padding: "12px 24px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: phases[currentPhase].textColor,
            color: phases[currentPhase].bgColor,
            zIndex: 20,
            position: "relative",
          }}
        >
          {currentPhase === phases.length - 1 ? "Finish Journey" : "Next Phase →"}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

/* 🎥 Background Animation Component */
const BackgroundAnimation = ({ type }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {getAnimation(type)}
    </motion.div>
  );
};

/* 🌌 Generate Moving Backgrounds */
const getAnimation = (type) => {
  switch (type) {
    case "flowing-water":
      return (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            background: "url('/animations/water.gif') center/cover no-repeat",
          }}
        />
      );
    case "growing-tree":
      return (
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            background: "url('/animations/tree-growing.gif') center/cover no-repeat",
          }}
        />
      );
    case "floating-clouds":
      return (
        <motion.div
          animate={{ x: ["0%", "20%", "-20%", "0%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{
            width: "100%",
            height: "100%",
            background: "url('/animations/clouds.gif') center/cover no-repeat",
          }}
        />
      );
    case "cosmic-warp":
      return (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            background: "url('/animations/stars.gif') center/cover no-repeat",
          }}
        />
      );
    case "radiating-sacred-geometry":
      return (
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            background: "url('/animations/sacred-geometry.gif') center/cover no-repeat",
          }}
        />
      );
    case "pulsing-energy":
      return (
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            background: "url('/animations/pulsing-energy.gif') center/cover no-repeat",
          }}
        />
      );
    default:
      return null;
  }
};

export default Journey;
