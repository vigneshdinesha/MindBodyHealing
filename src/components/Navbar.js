import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/breathwork">Breathwork</Link></li>
        <li><Link to="/meditation">Meditation</Link></li>
        <li><Link to="/mindful-living">Mindful Living</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
