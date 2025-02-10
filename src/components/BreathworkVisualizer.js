import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

//Explanatory Text Definition: 
const techniqueDescriptions = {
    "Box Breathing": {
      purpose: "Enhances focus and reduces stress by balancing the nervous system.",
      awareness: "Visualize a square; as you inhale, trace one side, hold, trace another, exhale along the next, and hold again."
    },
    "4-7-8 Breathing": {
      purpose: "Promotes relaxation and aids in sleep by slowing the heart rate.",
      awareness: "Focus on the deep inhale filling your lungs, the stillness during the hold, and the slow, full exhale releasing tension."
    },
    "Cyclic Sighing": {
      purpose: "Rapidly relieves stress and increases oxygen efficiency.",
      awareness: "Take a deep inhale, followed by a quick short inhale, then slowly exhale fully, directing your focus to the sensation of release."
    },
    "Custom": {
      purpose: "Customize your own breathing rhythm for tailored benefits.",
      awareness: "Experiment with different breath patterns while keeping your awareness on how your body and mind respond."
    }
  };
  

const BreathworkVisualizer = () => {
  // Default breath settings
  const [breathPhase, setBreathPhase] = useState("Inhale");
  const [inhaleDuration, setInhaleDuration] = useState(4);
  const [inhaleHold, setInhaleHold] = useState(2);
  const [exhaleDuration, setExhaleDuration] = useState(6);
  const [exhaleHold, setExhaleHold] = useState(2);
  const [timer, setTimer] = useState(inhaleDuration);
  const [isAnimating, setIsAnimating] = useState(true);
  const [scaleValue, setScaleValue] = useState(1);
  const [selectedTechnique, setSelectedTechnique] = useState("Custom");

  // Predefined breathing techniques
  const techniques = {
    "Custom": { inhale: 4, holdInhale: 2, exhale: 6, holdExhale: 2 },
    "Box Breathing": { inhale: 4, holdInhale: 4, exhale: 4, holdExhale: 4 },
    "4-7-8 Breathing": { inhale: 4, holdInhale: 7, exhale: 8, holdExhale: 0 },
    "Cyclic Sighing": { inhale: 4, holdInhale: 0, exhale: 6, holdExhale: 0 } // ✅ Fixed
  };

  // Function to set breathing pattern based on selection
  useEffect(() => {
    if (selectedTechnique !== "Custom") {
      const { inhale, holdInhale, exhale, holdExhale } = techniques[selectedTechnique];
      setInhaleDuration(inhale);
      setInhaleHold(holdInhale);
      setExhaleDuration(exhale);
      setExhaleHold(holdExhale);

      // ✅ Reset phase and timer when switching techniques
      setBreathPhase("Inhale"); // Always start from Inhale
      setTimer(inhale);
    }
  }, [selectedTechnique]);

  useEffect(() => {
    let interval;

    if (isAnimating) {
      setTimer(
        breathPhase === "Inhale"
          ? inhaleDuration
          : breathPhase === "Inhale Hold" && inhaleHold > 0
          ? inhaleHold
          : breathPhase === "Exhale"
          ? exhaleDuration
          : breathPhase === "Exhale Hold" && exhaleHold > 0
          ? exhaleHold
          : inhaleDuration // Default to inhale if hold is skipped
      );

      interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            setBreathPhase((prevPhase) => {
              if (prevPhase === "Inhale") return inhaleHold > 0 ? "Inhale Hold" : "Exhale";
              if (prevPhase === "Inhale Hold" && inhaleHold > 0) return "Exhale";
              if (prevPhase === "Exhale") return exhaleHold > 0 ? "Exhale Hold" : "Inhale";
              if (prevPhase === "Exhale Hold" && exhaleHold > 0) return "Inhale";
              return "Inhale"; // Default back to inhale
            });

            return breathPhase === "Inhale"
              ? inhaleDuration
              : breathPhase === "Inhale Hold" && inhaleHold > 0
              ? inhaleHold
              : breathPhase === "Exhale"
              ? exhaleDuration
              : breathPhase === "Exhale Hold" && exhaleHold > 0
              ? exhaleHold
              : inhaleDuration;
          }

          return prevTime - 1;
        });
      }, 1000); // ✅ Ensures timer moves in **real-time (1s per second)**

      return () => clearInterval(interval);
    }
  }, [isAnimating, breathPhase, inhaleDuration, inhaleHold, exhaleDuration, exhaleHold, selectedTechnique]);

  // Ensure smooth transition between phases
  useEffect(() => {
    if (breathPhase === "Inhale") setScaleValue(1.5);
    if (breathPhase === "Inhale Hold") setScaleValue(1.5);
    if (breathPhase === "Exhale") setScaleValue(1);
    if (breathPhase === "Exhale Hold") setScaleValue(1);
  }, [breathPhase]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Breathwork Visualizer</h2>
      <p>Select a breathing technique or customize your own</p>

      {/* Dropdown for Predefined Techniques */}
      {/* Technique Information Section with Animation */}
    <motion.div
    key={selectedTechnique} // Triggers animation on change
    initial={{ opacity: 0, y: -10 }} // Start position
    animate={{ opacity: 1, y: 0 }} // End position
    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth fade-in
    style={{
        backgroundColor: "#f3f3f3",
        padding: "15px",
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "20px auto",
        textAlign: "left",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" // Soft shadow for depth
    }}
    >
    <h3>{selectedTechnique}</h3>
    <p><strong>Purpose:</strong> {techniqueDescriptions[selectedTechnique].purpose}</p>
    <p><strong>How to Focus:</strong> {techniqueDescriptions[selectedTechnique].awareness}</p>
    </motion.div>


      <label>
        Select Technique:
        <select
          value={selectedTechnique}
          onChange={(e) => setSelectedTechnique(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          {Object.keys(techniques).map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </label>

      {/* User Controls for Customization */}
      {selectedTechnique === "Custom" && (
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
          <label>
            Inhale: {inhaleDuration}s
            <input type="range" min="2" max="10" value={inhaleDuration} onChange={(e) => setInhaleDuration(parseInt(e.target.value))} />
          </label>
          <label>
            Inhale Hold: {inhaleHold}s
            <input type="range" min="0" max="5" value={inhaleHold} onChange={(e) => setInhaleHold(parseInt(e.target.value))} />
          </label>
          <label>
            Exhale: {exhaleDuration}s
            <input type="range" min="2" max="10" value={exhaleDuration} onChange={(e) => setExhaleDuration(parseInt(e.target.value))} />
          </label>
          <label>
            Exhale Hold: {exhaleHold}s
            <input type="range" min="0" max="5" value={exhaleHold} onChange={(e) => setExhaleHold(parseInt(e.target.value))} />
          </label>
        </div>
      )}

      {/* Animated Breath Circle */}
      <motion.div
        animate={{ scale: scaleValue }}
        transition={{
          duration: breathPhase.includes("Hold") ? 0.5 : breathPhase.includes("Inhale") ? inhaleDuration : exhaleDuration,
          ease: "easeInOut",
        }}
        style={{
          width: "350px", // Enlarged from 300px
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "lightblue",
          margin: "50px auto",
          position: "relative",
          zIndex: 1,
        }}
      ></motion.div>

      <div style={{ marginTop: "20px", zIndex: 2, position: "relative" }}>
        <h3>
          {breathPhase === "Inhale Hold" && inhaleHold === 0
            ? "Exhale"
            : breathPhase === "Exhale Hold" && exhaleHold === 0
            ? "Inhale"
            : breathPhase}
        </h3>
        <p>Time Remaining: {timer}s</p>
      </div>

      {/* Start/Stop Animation Button */}
      <button onClick={() => setIsAnimating(!isAnimating)}>
        {isAnimating ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default BreathworkVisualizer;
