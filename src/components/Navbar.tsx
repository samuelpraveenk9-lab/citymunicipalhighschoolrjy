import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#1e3a8a",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
        Home
      </Link>
      <Link to="/gallery" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
        Gallery
      </Link>
      <Link to="/events" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
        Events
      </Link>
    </nav>
  );
};

export default NavBar;