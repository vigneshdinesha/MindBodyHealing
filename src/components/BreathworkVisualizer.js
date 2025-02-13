import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BreathworkVisualizer = () => {
  // Breathing States
  const [breathPhase, setBreathPhase] = useState("Inhale");
  const [inhaleDuration, setInhaleDuration] = useState(4);
  const [inhaleHold, setInhaleHold] = useState(2);
  const [exhaleDuration, setExhaleDuration] = useState(6);
  const [exhaleHold, setExhaleHold] = useState(2);
  const [timer, setTimer] = useState(inhaleDuration);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedTechnique, setSelectedTechnique] = useState("Custom");

  // Sound States
  const [selectedSound, setSelectedSound] = useState("None");
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(new Audio());

  // Define correct sound file paths
  const soundOptions = {
    "None": null,
    "Light Rain": "/sounds/mixkit-light-rain-loop-1253.wav",
    "Night Forest": "/sounds/mixkit-night-forest-with-insects-2414.wav",
    "Sea Waves": "/sounds/mixkit-sea-waves-with-birds-loop-1185.wav"
  };
  

  // Handle sound selection
  useEffect(() => {
    if (selectedSound === "None") {
      audioRef.current.pause();
      return;
    }

    audioRef.current.src = soundOptions[selectedSound];
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    if (isSoundPlaying) {
      audioRef.current.play();
    }
  }, [selectedSound, isSoundPlaying, volume]);

  // Predefined breathing techniques
  const techniques = {
    "Custom": { inhale: 4, holdInhale: 2, exhale: 6, holdExhale: 2 },
    "Box Breathing": { inhale: 4, holdInhale: 4, exhale: 4, holdExhale: 4 },
    "4-7-8 Breathing": { inhale: 4, holdInhale: 7, exhale: 8, holdExhale: 0 },
    "Cyclic Sighing": { inhale: 4, holdInhale: 0, exhale: 6, holdExhale: 0 }
  };

  // ✅ Reset animation when switching techniques
  useEffect(() => {
    if (selectedTechnique !== "Custom") {
      const { inhale, holdInhale, exhale, holdExhale } = techniques[selectedTechnique];
      setInhaleDuration(inhale);
      setInhaleHold(holdInhale);
      setExhaleDuration(exhale);
      setExhaleHold(holdExhale);

      // Reset to inhale phase when switching techniques
      setBreathPhase("Inhale");
      setTimer(inhale);
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), 100);
    }
  }, [selectedTechnique]);

  // ✅ Timer management for breathwork phases
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
          : exhaleHold
      );

      interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            setBreathPhase((prevPhase) => {
              if (prevPhase === "Inhale") return inhaleHold > 0 ? "Inhale Hold" : "Exhale";
              if (prevPhase === "Inhale Hold") return "Exhale";
              if (prevPhase === "Exhale") return exhaleHold > 0 ? "Exhale Hold" : "Inhale";
              return "Inhale";
            });

            return breathPhase === "Inhale"
              ? inhaleDuration
              : breathPhase === "Inhale Hold"
              ? inhaleHold
              : breathPhase === "Exhale"
              ? exhaleDuration
              : exhaleHold;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isAnimating, breathPhase, inhaleDuration, inhaleHold, exhaleDuration, exhaleHold, selectedTechnique]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Breathwork Visualizer</h2>
      <p>Select a breathing technique or customize your own</p>

      {/* Dropdown for Techniques */}
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

      {/* Custom Breath Settings */}
      {selectedTechnique === "Custom" && (
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px", marginTop: "20px" }}>
          <label>Inhale: {inhaleDuration}s <input type="range" min="2" max="10" value={inhaleDuration} onChange={(e) => setInhaleDuration(parseInt(e.target.value))} /></label>
          <label>Inhale Hold: {inhaleHold}s <input type="range" min="0" max="5" value={inhaleHold} onChange={(e) => setInhaleHold(parseInt(e.target.value))} /></label>
          <label>Exhale: {exhaleDuration}s <input type="range" min="2" max="10" value={exhaleDuration} onChange={(e) => setExhaleDuration(parseInt(e.target.value))} /></label>
          <label>Exhale Hold: {exhaleHold}s <input type="range" min="0" max="5" value={exhaleHold} onChange={(e) => setExhaleHold(parseInt(e.target.value))} /></label>
        </div>
      )}

      {/* Breath Phase Text */}
      <h3 style={{ fontSize: "28px", marginTop: "40px" }}>{breathPhase}</h3>
      <p style={{ fontSize: "20px", marginBottom: "40px" }}>Time Remaining: {timer}s</p>

      {/* Animated Breath Circle */}
      <motion.div
        animate={{ scale: breathPhase.includes("Inhale") ? 1.5 : 1 }}
        transition={{ duration: inhaleDuration, ease: "easeInOut" }}
        style={{ width: "350px", height: "350px", borderRadius: "50%", backgroundColor: "lightblue", margin: "80px auto" }}
      ></motion.div>

      {/* Sound Selection */}
      <div style={{ marginTop: "30px" }}>
        <label>
          Select Background Sound:
          <select value={selectedSound} onChange={(e) => setSelectedSound(e.target.value)} style={{ marginLeft: "10px", padding: "5px" }}>
            {Object.keys(soundOptions).map((sound) => (
              <option key={sound} value={sound}>{sound}</option>
            ))}
          </select>
        </label>

        {/* Sound Controls */}
        <button onClick={() => setIsSoundPlaying(!isSoundPlaying)} style={{ marginLeft: "10px" }}>
          {isSoundPlaying ? "Pause" : "Play"}
        </button>

        <label style={{ marginLeft: "10px" }}>
          Volume:
          <input type="range" min="0" max="1" step="0.1" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} />
        </label>
      </div>
    </div>
  );
};

export default BreathworkVisualizer;
