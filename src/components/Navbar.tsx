import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#004aad", padding: "10px" }}>
      <h2 style={{ color: "white", margin: 0 }}>City Municipal High School</h2>
      <div style={{ marginTop: "5px" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/gallery" style={{ color: "white", marginRight: "15px" }}>Gallery</Link>
        <Link to="/events" style={{ color: "white" }}>Events</Link>
      </div>
    </nav>
  );
}
