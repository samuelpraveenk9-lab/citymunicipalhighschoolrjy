import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Magazine from "./pages/Magazine";

export default function App() {
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Page Container */}
      <main className="pt-20 px-4 md:px-10 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/magazine" element={<Magazine />} />
        </Routes>
      </main>

      {/* Footer (Optional) */}
      <footer className="mt-20 py-6 text-center text-gray-600 text-sm border-t">
        © {new Date().getFullYear()} City Municipal Corporation High School  
        <br />
        All Rights Reserved.
      </footer>
    </div>
  );
}
