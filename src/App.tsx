import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      {/* Navigation Bar */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        {/* Optional: redirect unknown routes to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;