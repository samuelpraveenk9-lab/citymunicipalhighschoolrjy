import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#1e3a8a",
        color: "#fff",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        {/* Logo / School Name */}
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>CMCH School</div>

        {/* Hamburger Menu Button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "block",
          }}
        >
          ☰
        </button>
      </div>

      {/* Menu Links */}
      <div
        style={{
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          textAlign: "center",
          gap: "15px",
          paddingBottom: "10px",
        }}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          Home
        </Link>
        <Link
          to="/gallery"
          onClick={() => setIsOpen(false)}
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          Gallery
        </Link>
        <Link
          to="/events"
          onClick={() => setIsOpen(false)}
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          Events
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;