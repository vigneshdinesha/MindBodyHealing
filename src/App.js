import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Breathwork from "./pages/Breathwork";
import Meditation from "./pages/Meditation";
import MindfulLiving from "./pages/MindfulLiving";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breathwork" element={<Breathwork />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/mindful-living" element={<MindfulLiving />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
